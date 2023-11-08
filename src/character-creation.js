export function Character(characterClass) {
  if (characterClass === "Knight") {
    this.physicalAtk = 4;
    this.magicAtk = 2;
    this.physicalDef = 4;
    this.magicDef = 2;
  } else if (characterClass === "Sorcerer") {
    this.physicalAtk = 2;
    this.magicAtk = 6;
    this.physicalDef = 2;
    this.magicDef = 6;
  } else if (characterClass === "Cleric") {
    this.physicalAtk = 3;
    this.magicAtk = 3;
    this.physicalDef = 2;
    this.magicDef = 4;
  } else if (characterClass === "Misbegotten Wretch") {
    this.physicalAtk = 1;
    this.magicAtk = 1;
    this.physicalDef = 1;
    this.magicDef = 1;
  }
}


let character = new Character(1, 2, 3);
console.log(character);