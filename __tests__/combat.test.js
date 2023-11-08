import { AttackStats } from "../src/combat";
import { DefenseStats } from "../src/combat";

describe('AttackStats', () => {

  test('should store a characters initial attack stats', () => {
    const attackStats = new AttackStats(2,4);
    expect(attackStats.physicalAtk).toEqual(2);
    expect(attackStats.magicAtk).toEqual(4);
  });
});

describe('DefenseStats', () => {

  test('should store a characters initial Defense stats', () => {
    const defenseStats = new DefenseStats(2,4);
    expect(defenseStats.physicalDef).toEqual(2);
    expect(defenseStats.magicDef).toEqual(4);
  });
});