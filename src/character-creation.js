export default function Character(stat1, stat2, stat3) {
  this.stat1 = stat1;
  this.stat2 = stat2;
  this.stat3 = stat3;
}

let character = new Character(1,2,3);
console.log(character);