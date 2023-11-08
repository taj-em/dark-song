export function getRequiredXp(requiredXP) {
  if (requiredXP === undefined) {
    requiredXP = 4;
  } else {
    requiredXP = requiredXP * 2;
  }
  return requiredXP;
}

export function levelSystem() {

}