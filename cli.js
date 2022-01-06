const Thermostat = require('./thermostat.js')
thermostat = new Thermostat();
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = () => {
console.log(`Temperature is ${thermostat.getTemperature()}`)
rl.question('Enter command ', (answer) => {
  if (answer.toLowerCase() === 'up') {
    if (thermostat.maxTemperature === thermostat.getTemperature())
    {console.log("Max reached!")}
    else
      thermostat.up()}
  else if (answer.toLowerCase() === 'down') {if (thermostat.minTemperature === thermostat.getTemperature())
    {console.log("Min reached!")}
    else
    thermostat.down()}
  else if (answer.toLowerCase() === 'psm on') {thermostat.setPowerSavingMode(true)}
  else if (answer.toLowerCase() === 'psm off') {thermostat.setPowerSavingMode(false)}
  else {console.log("Not valid")}
});
}

setInterval(input, 2500)