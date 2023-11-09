/* eslint-disable no-undef */
import { getRequiredXp, levelSystem } from "../src/characterStats/leveling";

describe('getRequiredXp', () => {

  test('should take the current required XP and double it', () => {
    const xpTest = getRequiredXp(4);
    expect(xpTest).toEqual(8); 
  });
});

describe('levelSystem', () => {

  test('should return new requiredXP value when currentXP and requiredXP are the same', () => {
    const xpTest = levelSystem();
    expect(xpTest).toEqual(8);
  });
});