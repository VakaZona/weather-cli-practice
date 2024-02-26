import chalk from 'chalk';

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
		'-s [CITY] for setup city' + '\n' +
		'-h helpers output' + '\n' +
		'-t [API_KEY] for save API token'
	)
}

export { printError, printSuccess, printHelp };