import https from 'https';
import {getKeyValue,TOKEN_DICTIONARY} from './storage.service.js'
import axios from 'axios';

const getWeather = async (city) => {
	const token = await getKeyValue(TOKEN_DICTIONARY.token);
	if (!token) {
		throw new Error('Not settings API, use the command "-t [API_KEY]"')
	}

	const coordinates = await getCoord(city, token);

	const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
		params: {
			lat: coordinates.lat,
			lon: coordinates.lon,
			appid: token,
			lang: 'ru',
			units: 'metric'
		}
	});
	return data;
}

const getCoord = async (city, token) => {
	const { data } = await axios.get('http://api.openweathermap.org/geo/1.0/direct', {
		params: {
			q: city,
			appid: token,
		}
	});
	return data[0];
}

export { getWeather };