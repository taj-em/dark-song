/* eslint-disable no-undef */
import { enemyHealth, knightAttack, enemyGenerator } from "../src/characterStats/playerAttacks";

describe('enemyHealth', () => {

  test('should subtract a specific amount from the enemy healthbar', () => {
    const healthTest = enemyHealth(4, 12, 0);
    expect(healthTest).toEqual(8);
  });
});

describe('knightAttack', () => {

  test('should determine how much damage an attack does to enemy hp', () => {
    const healthBarTest = knightAttack("Physical", "Skeleton");
    expect(healthBarTest).toEqual(8);
  });
});

describe('enemyGenerator', () => {

  test('should return a new enemy type based on a random number', () => {
    const generatorTest = enemyGenerator();
    expect(generatorTest).toEqual("Skeleton" || "Troll");
  })
})