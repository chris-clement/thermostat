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
    expect(thermostat.getTemperature()).toBe(19);
  });
  it('has a minimum temperature setting', () => {
    for(let i = 0; i < thermostat.minTemperature; i++) {
      thermostat.down();
    }
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(10);
  });
  it('Power saving mode is on by default', () => {
    expect(thermostat.powerSaving).toBe(true);
  });
  it('Power saving mode can be turned off', () => {
    thermostat.turnPowerSaving('off')
    expect(thermostat.powerSaving).toBe(false)
  });
  it('Power saving mode can be turned on after being turned off', () => {
    thermostat.turnPowerSaving('off')
    thermostat.turnPowerSaving('on')
    expect(thermostat.powerSaving).toBe(true)
  });
});