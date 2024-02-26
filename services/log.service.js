import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
	console.log(chalk.bgRed('ERROR') + ' ' + error);
}

const printSuccess = (message) => {
	console.log(chalk.bgGreen('SUCCESS') + ' ' + message);
}

const printHelp = () => {
	console.log(
		chalk.bgCyan('HELP') + '\n' + 
		'Without parameters - weather output' + '\n' +
		'-c [CITY] for setup city' + '\n' +
		'-h helpers output' + '\n' +
		'-t [API_KEY] for save API token'
	)
}

const printWeather = (res) => {
	console.log(
		dedent`${chalk.bgYellow('Weather')} Weather in city ${res.name}
		${res.weather[0].description}
		Temperature: ${res.main.temp} (feels like ${res.main.feels_like})
		Humidity: ${res.main.humidity}%
		Wind speed: ${res.wind.speed}
		`
	)
}

export { printError, printSuccess, printHelp, printWeather };