const defender = extendContent(UnitType, "defender", {});
defender.constructor = function(){
  return extend(PayloadUnit, {});
};
defender.abilities.add(new ForceFieldAbility(80, 5, 3000, 300), new RepairFieldAbility(20, 60, 80));