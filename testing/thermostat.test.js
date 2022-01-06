const Thermostat = require('../thermostat.js')

describe('class Thermostat', () => {
  beforeEach(() => {
    thermostat = new Thermostat();
  });
  it('has a default temperature of 20', () => {
    expect(thermostat.getTemperature()).toBe(20);
  });
  it('increases temperature by 1 when up is called', () => {
    thermostat.up()
    expect(thermostat.getTemperature()).toBe(21);
  });
  it('decreases temperature by 1 when down is called', () => {
    thermostat.down()
    expect(thermostat.getTemperature()).toBe(19)
  });
});