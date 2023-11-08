import { Character } from '../src/characterStats/character-creation';

describe('Character', () => {

  // test('should store passed inputs into a new object', () => {
  //   const newCharacter = new Character(2,4,5);
  //   expect(newCharacter.stat1).toEqual(2);
  //   expect(newCharacter.stat2).toEqual(4);
  //   expect(newCharacter.stat3).toEqual(5);
  // });

  test('should assign the proper stats to newCharacter object depending on selected class', () => {
    const newCharacter = new Character("Knight");
    expect(newCharacter.physicalAtk).toEqual(4);
    expect(newCharacter.physicalDef).toEqual(4);
    expect(newCharacter.magicAtk).toEqual(2);
    expect(newCharacter.magicDef).toEqual(2);
  });
});