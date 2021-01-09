const defender = extendContent(UnitType, "defender", {});
defender.constructor = function(){
  return extend(PayloadUnit, {});
};
defender.abilities.add(new ForceFieldAbility(80, 5, 1000, 300), new RepairFieldAbility(25, 60, 80));

//Adamantite Air
const reliavent = extendContent(UnitType, "t1-reliavent", {});
reliavent.constructor = function(){
  return extend(UnitEntity, {});
};
reliavent.abilities.add(new RepairFieldAbility(100, 300, 16));

const siloArray = extendContent(UnitType, "t2-silo-array", {});
siloArray.constructor = function(){
  return extend(UnitEntity, {});
};
siloArray.abilities.add(new RepairFieldAbility(100, 240, 16));

const decimation = extendContent(UnitType, "t3-decimation", {});
decimation.constructor = function(){
  return extend(UnitEntity, {});
};
decimation.abilities.add(new RepairFieldAbility(100, 180, 16));

const carnage = extendContent(UnitType, "t4-carnage", {});
carnage.constructor = function(){
  return extend(UnitEntity, {});
};
carnage.abilities.add(new RepairFieldAbility(100, 120, 16));

const nightmare = extendContent(UnitType, "t5-nightmare", {});
nightmare.constructor = function(){
  return extend(UnitEntity, {});
};
nightmare.abilities.add(new UnitSpawnAbility(UnitTypes.zenith, 1800, 0, 0), new UnitSpawnAbility(UnitTypes.zenith, 1800, 0, 0), new RepairFieldAbility(25, 60, 80));

//Adamantite Ground
const melter = extendContent(UnitType, "t1-melter", {});
melter.constructor = function(){
  return extend(UnitEntity, {});
};
melter.abilities.add(new RepairFieldAbility(100, 300, 16));

const evasculator = extendContent(UnitType, "t2-evasculator", {});
evasculator.constructor = function(){
  return extend(UnitEntity, {});
};
evasculator.abilities.add(new RepairFieldAbility(100, 240, 16));

const blaster = extendContent(UnitType, "t3-blaster", {});
blaster.constructor = function(){
  return extend(UnitEntity, {});
};
blaster.abilities.add(new RepairFieldAbility(100, 180, 16));

const catastrophere = extendContent(UnitType, "t4-catastrophere", {});
catastrophere.constructor = function(){
  return extend(UnitEntity, {});
};
catastrophere.abilities.add(new RepairFieldAbility(100, 120, 16));

const death = extendContent(UnitType, "t5-death", {});
death.constructor = function(){
  return extend(UnitEntity, {});
};
death.abilities.add(new RepairFieldAbility(100, 60, 16));