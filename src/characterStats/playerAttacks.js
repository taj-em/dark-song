export function enemyHealth(playerAttack, healthBar, enemyDefense) {
  healthBar = (healthBar + enemyDefense) - playerAttack;
  return healthBar;
}

export function enemyGenerator() {
  const min = Math.ceil(1);
  const max = Math.floor(2);
  let enemyNumber = Math.floor(Math.random() * (max - min + 1) + min);
  if (enemyNumber === 1) {
    let enemyType = "Skeleton";
    return enemyType;
  } else if (enemyNumber === 2) {
    let enemyType = "Troll";
    return enemyType;
  }
}

export function knightAttack(attackType, enemyType) {
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
export function sorcererAttack(attackType, enemyType) {
  const physicalAttack = 2;
  const magicAttack = 6;
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
export function clericAttack(attackType, enemyType) {
  const physicalAttack = 3;
  const magicAttack = 3;
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
export function wretchAttack(attackType, enemyType) {
  const physicalAttack = 1;
  const magicAttack = 1;
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