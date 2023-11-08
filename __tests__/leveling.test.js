import { getRequiredXp } from "../src/characterStats/leveling";

describe('getRequiredXp', () => {

  test('should take the current required XP and double it', () => {
    const xpTest = getRequiredXp(4);
    expect(xpTest).toEqual(8); 
  });
});