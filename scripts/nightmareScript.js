const nightmare = extendContent(UnitType, "t5-nightmare", {});
nightmare.constructor = function(){
  return extend(UnitEntity, {});
};
nightmare.abilities.add(new UnitSpawnAbility(UnitTypes.zenith, 1800, 0, 0), new UnitSpawnAbility(UnitTypes.zenith, 1800, 0, 0));