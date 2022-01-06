class Thermostat {
  constructor() {
    this.temperature = 20;
    this.minTemperature = 10;
    this.powerSaving = true;
  };
  getTemperature() {
    return this.temperature;
  };
  up() {
    this.temperature += 1;
  };
  down() {
    if(this.temperature > this.minTemperature) {
      this.temperature -= 1;
    };
  };
  turnPowerSaving(choice) {
    if(choice === 'off') {
      this.powerSaving = false;
    }
    else if(choice === 'on') {
      this.powerSaving = true;
    };
  };
};

module.exports = Thermostat