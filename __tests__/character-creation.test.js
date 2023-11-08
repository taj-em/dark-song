import Character from '../src/character-creation';

describe('Character', () => {

  test('should store passed inputs into a new object', () => {
    const newCharacter = new Character(2,4,5);
    expect(newCharacter.stat1).toEqual(2);
    expect(newCharacter.stat2).toEqual(4);
    expect(newCharacter.stat3).toEqual(5);
  });
});