class Thermostat {
  constructor() {
    this.temperature = 20;
    this.minTemperature = 10;
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
};

module.exports = Thermostat