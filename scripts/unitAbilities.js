const defender = extendContent(UnitType, "defender", {});
defender.constructor = function(){
  return extend(PayloadUnit, {});
};
defender.abilities.add(new ForceFieldAbility(80, 3, 2000, 900), new RepairFieldAbility(150, 180, 80));