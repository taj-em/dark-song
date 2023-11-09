/* eslint-disable no-undef */
import { enemyHealth } from "../src/enemyStats/enemies";

describe('enemyHealth', () => {

  test('should subtract a specific amount from the enemy healthbar', () => {
    const healthTest = enemyHealth(4, 12);
    expect(healthTest).toEqual(8);
  });
});