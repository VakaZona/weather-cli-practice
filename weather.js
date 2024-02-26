#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printError, printHelp, printSuccess, printWeather } from './services/log.service.js';
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

const saveToken = async (token) => {
	if (!token.length) {
		printError('No token');
		return;
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.token, token);
		printSuccess('Token save');
	} catch (error) {
		printError(error.message)
	}
	
}

const SaveCity = async (city) => {
	if (!city.length) {
		printError('No city');
		return;
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.city, city);
		printSuccess('City save')
	} catch (error) {
		printError(error.message);
	}
}

const getForcast = async () => {
	try {
		const city = await getKeyValue(TOKEN_DICTIONARY.city);
		const weather = await getWeather(city);
		printWeather(weather)
	} catch (error) {
		if (error?.response?.status == 404) {
			printError('Error with country')
		}else if (error?.response?.status == 401) {
			printError('Error with Token')
		} else {
			printError(error.message);
		}

	}
	
}

const initCLI = () => {
	const args = getArgs(process.argv)
	if (args.h) {
		return printHelp();
	}
	if (args.c) {
		return SaveCity(args.c)
	}
	if (args.t) {
		return saveToken(args.t)
	}
	return getForcast();
}

initCLI();