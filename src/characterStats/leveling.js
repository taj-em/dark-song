export function getRequiredXp(requiredXP) {
  if (requiredXP === undefined) {
    requiredXP = 4;
  } else {
    requiredXP = requiredXP * 2;
  }
  return requiredXP;
}

export function levelSystem() {
  let requiredXP = 4;
  let currentXP = 4;
  if (currentXP === requiredXP) {
    requiredXP = getRequiredXp(requiredXP);
  }
  return requiredXP;
}