const defender = extendContent(UnitType, "defender", {});
defender.constructor = function(){
  return extend(PayloadUnit, {});
};
defender.abilities.add(new ForceFieldAbility(80, 5, 1000, 300), new RepairFieldAbility(25, 60, 80));