export function enemyHealth(playerAttack, healthBar) {
  healthBar = healthBar - playerAttack;
  return healthBar;
}