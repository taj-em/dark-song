export function enemyHealth(playerAttack, healthBar, enemyDefense) {
  healthBar = (healthBar + enemyDefense) - playerAttack;
  return healthBar;
}


export function enemyStats(playerClass, attackType, enemyType) {
  if (playerClass === "Knight") {
    const physicalAttack = 4;
    const magicAttack = 2;
    if (attackType === "Physical") {
      if (enemyType === "Skeleton") {
        let healthBar = 12;
        const physicalDef = 0;
        healthBar = enemyHealth(physicalAttack, healthBar, physicalDef);
        return healthBar;
      } else if (enemyType === "Troll") {
        let healthBar = 20;
        const physicalDef = 2;
        healthBar = enemyHealth(magicAttack, healthBar, physicalDef);
        return healthBar;
      }
    } else if (attackType === "Magic") {
      if (enemyType === "Skeleton") {
        let healthBar = 12;
        const magicDef = 0;
        healthBar = enemyHealth(magicAttack, healthBar, magicDef);
        return healthBar;
      } else if (enemyType === "Troll") {
        let healthBar = 20;
        const magicDef = 0;
        healthBar = enemyHealth(magicAttack, healthBar, magicDef);
        return healthBar;
      }
    }
  }
}