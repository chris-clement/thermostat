const Thermostat = require('./thermostat.js')
thermostat = new Thermostat();
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const temperatureControl = () => {
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

  const temperatureControl2 = () => {
    return new Promise(resolve => {
      rl.question('Enter command', (answer) => {
        if (answer.toLowerCase === "up") {
          if (thermostat.maxTemperature === thermostat.getTemperature())
            {console.log("Max reached!")}
          else
            thermostat.up()
        }
        else if (answer.toLowerCase === "down") {
          if (thermostat.minTemperature === thermostat.getTemperature())
            {console.log("Min reached!")}
          else {thermostat.down()}
        }
        else if (answer.toLowerCase() === 'psm on') {thermostat.setPowerSavingMode(true)}
        else if (answer.toLowerCase() === 'psm off') {thermostat.setPowerSavingMode(false)}
        else {console.log("Not valid")}
        }
      )
    })
  }

  function controlTemp(){
    return new Promise((resolve) => {
      rl.question(`enter command > `,(answer) => {
        if (answer === 'up'){
          if(thermostat.getTemperature() < thermostat.maxTemperature) { thermostat.up() } 
          else { console.log('max temperature reached')}
        }
        else if (answer === 'down'){
          if(thermostat.getTemperature() > thermostat.minTemperature) { thermostat.down() }
          else { console.log('min temperature reached')}
        }
        else if (answer === 'psm on') {
          thermostat.setPowerSavingMode(true)
          console.log('Power Saving Mode turned on')
        }
        else if (answer === 'psm off') {
          thermostat.setPowerSavingMode(false)
          console.log('Power Saving Mode turned off')
        }
        else if (answer === 'reset') {
          thermostat.reset()
          console.log('Thermostat reset to default temperature')
        }
        else if (answer === 'usage') {
          console.log(`Current usage is ${thermostat.energyUsage()}`)
        }
        resolve('Success');
      });
    });
  }
  
  async function run() {
      while (true) {
        await controlTemp();
        console.log(`Current temperature is: ${thermostat.getTemperature()}`);
      }
  }
  
  run()
