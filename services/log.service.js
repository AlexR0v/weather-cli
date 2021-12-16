import chalk  from 'chalk'
import dedent from 'dedent'

export const printError = (err) => {
  console.log(chalk.red(' ERROR ') + ' ' + err)
}

export const printSuccess = (msg) => {
  console.log(chalk.green(' SUCCESS ') + ' ' + chalk.green(msg))
}

export const printHelp = () => {
  console.log(
    dedent(
      chalk.red.bgBlue(' HELP ') + '\n' +
      'Без параметров - вывод погоды' + '\n' +
      '-s [CITY] для установки города' + '\n' +
      '-h для вывода помощи' + '\n' +
      '-t [API_KEY] для сохранения токена' + '\n'
    )
  )
}

export const printWeather = (res, icon) => {
  console.log(
    dedent(`${chalk.yellow(' WEATHER ')} Погода в городе ${res.name}
		${icon}  ${res.weather[0].description}
		Температура: ${res.main.temp} ℃ (ощущается как ${res.main.feels_like} ℃)
		Влажность: ${res.main.humidity}%
		Скорость ветра: ${res.wind.speed} м/с
		`)
  )
}
