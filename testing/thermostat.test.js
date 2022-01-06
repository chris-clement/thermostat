const Thermostat = require('../thermostat.js')

describe('class Thermostat', () => {
  beforeEach(() => {
    thermostat = new Thermostat();
  });
  it('has a default temperature of 20', () => {
    expect(thermostat.getTemperature()).toEqual(20);
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
    for(let i = 0; i = (thermostat.getTemperature() - thermostat.minTemperature); i++) {
      thermostat.down();
    }
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(10);
  });
  it('Power saving mode is on by default', () => {
    expect(thermostat.powerSaving).toBe(true);
  });
  it('Power saving mode can be turned off', () => {
    thermostat.setPowerSavingMode(false);
    expect(thermostat.powerSaving).toBe(false);
  });
  it('Power saving mode can be turned on after being turned off', () => {
    thermostat.setPowerSavingMode(false);
    thermostat.setPowerSavingMode(true);
    expect(thermostat.powerSaving).toBe(true);
  });
  it('When power saving mode is on the max temperature is 25', () => {
    thermostat.setPowerSavingMode(true);
    expect(thermostat.maxTemperature).toBe(25);
  });
  it('When power saving mode is off the max temperature is 32', () => {
    thermostat.setPowerSavingMode(false);
    expect(thermostat.maxTemperature).toBe(32);
  });
  it('Can not increase temperature beyond maximum temperature setting of 25 when power saving is on', () => {
    for(let i = 0; i = (thermostat.maxTemperature - thermostat.getTemperature()); i++) {
      thermostat.up();
    }
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(25);
  });
  it('Can not increase temperature beyond maximum temperature setting of 32 when power saving is off', () => {
    thermostat.setPowerSavingMode(false)
    for(let i = 0; i = (thermostat.maxTemperature - thermostat.getTemperature()); i++) {
      thermostat.up();
    }
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(32);
  });
  it('reset puts the temperature to 20', ()=> {
    thermostat.up();
    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual(20);
  });
  it('energy usage is low, medium or high depending on temperature setting', ()=> {
    thermostat.setPowerSavingMode(false)
    expect(thermostat.energyUsage()).toEqual('Medium');
    thermostat.down()
    thermostat.down()
    thermostat.down()
    thermostat.down()
    expect(thermostat.energyUsage()).toEqual('Low');
    thermostat.reset()
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    expect(thermostat.energyUsage()).toEqual('High');
  });
});