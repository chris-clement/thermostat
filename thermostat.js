class Thermostat {
  constructor() {
    this.temperature = 20;
    this.minTemperature = 10;
    this.powerSaving = true;
    this.maxTemperature = 25;
  };
  getTemperature() {
    return this.temperature;
  };
  up() {
    if(this.temperature < this.maxTemperature) {
      this.temperature += 1;
    };
  };
  down() {
    if(this.temperature > this.minTemperature) {
      this.temperature -= 1;
    };
  };
  setPowerSavingMode(choice) {
    if(choice === false) {
      this.powerSaving = false;
      this.maxTemperature = 32;
    }
    else if(choice === true) {
      this.powerSaving = true;
      this.maxTemperature = 25;
    };
  };
  reset() {
    this.temperature = 20;
  };
  energyUsage() {
    if(this.getTemperature() < 18) {
      return 'Low';
    }
    else if(this.getTemperature() <= 25) {
      return 'Medium';
    }
    else {
      return 'High';
    }
  }
};

module.exports = Thermostat