/* eslint-disable no-undef */
import { enemyHealth, enemyStats } from "../src/enemyStats/enemies";

describe('enemyHealth', () => {

  test('should subtract a specific amount from the enemy healthbar', () => {
    const healthTest = enemyHealth(4, 12, 0);
    expect(healthTest).toEqual(8);
  });
});

describe('enemyStats', () => {

  test('should determine how much damage an attack does to enemy hp', () => {
    const healthBarTest = enemyStats("Knight", "Physical", "Skeleton");
    expect(healthBarTest).toEqual(8);
  });
});