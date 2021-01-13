const incinerating = new StatusEffect("incinerating");
incinerating.damage = 65;
incinerating.effect = Fx.melting;

const lava = extend(Floor, "lava", {});
lava.status = incinerating;


//Core and Support
const defender = extendContent(UnitType, "defender", {});
defender.constructor = function(){
  return extend(PayloadUnit, {});
};
defender.abilities.add(new ForceFieldAbility(80, 5, 1000, 300), new RepairFieldAbility(25, 60, 80));

const fireburster = extendContent(UnitType, "fireburster", {});
fireburster.constructor = function(){
  return extend(PayloadUnit, {});
};


//Adamantite Air
const reliavent = extendContent(UnitType, "t1-reliavent", {});
reliavent.constructor = function(){
  return extend(UnitEntity, {});
};
reliavent.abilities.add(new RepairFieldAbility(100, 300, 16));
reliavent.immunities.add(incinerating);
reliavent.immunities.add(StatusEffects.wet);
reliavent.immunities.add(StatusEffects.melting);
reliavent.immunities.add(StatusEffects.burning);
reliavent.immunities.add(StatusEffects.muddy);
reliavent.immunities.add(StatusEffects.sapped);
reliavent.immunities.add(StatusEffects.sporeSlowed);
reliavent.immunities.add(StatusEffects.tarred);
reliavent.immunities.add(StatusEffects.shocked);
reliavent.immunities.add(StatusEffects.corroded);

const siloArray = extendContent(UnitType, "t2-silo-array", {});
siloArray.constructor = function(){
  return extend(UnitEntity, {});
};
siloArray.abilities.add(new RepairFieldAbility(100, 240, 16));
siloArray.abilities.add(new RepairFieldAbility(100, 300, 16));
siloArray.immunities.add(incinerating);
siloArray.immunities.add(StatusEffects.wet);
siloArray.immunities.add(StatusEffects.melting);
siloArray.immunities.add(StatusEffects.burning);
siloArray.immunities.add(StatusEffects.muddy);
siloArray.immunities.add(StatusEffects.sapped);
siloArray.immunities.add(StatusEffects.sporeSlowed);
siloArray.immunities.add(StatusEffects.tarred);
siloArray.immunities.add(StatusEffects.shocked);
siloArray.immunities.add(StatusEffects.corroded);

const decimation = extendContent(UnitType, "t3-decimation", {});
decimation.constructor = function(){
  return extend(UnitEntity, {});
};
decimation.abilities.add(new RepairFieldAbility(100, 180, 16));
decimation.immunities.add(incinerating);
decimation.immunities.add(StatusEffects.wet);
decimation.immunities.add(StatusEffects.melting);
decimation.immunities.add(StatusEffects.burning);
decimation.immunities.add(StatusEffects.muddy);
decimation.immunities.add(StatusEffects.sapped);
decimation.immunities.add(StatusEffects.sporeSlowed);
decimation.immunities.add(StatusEffects.tarred);
decimation.immunities.add(StatusEffects.shocked);
decimation.immunities.add(StatusEffects.corroded);

const carnage = extendContent(UnitType, "t4-carnage", {});
carnage.constructor = function(){
  return extend(UnitEntity, {});
};
carnage.abilities.add(new RepairFieldAbility(100, 120, 16));
carnage.immunities.add(incinerating);
carnage.immunities.add(StatusEffects.wet);
carnage.immunities.add(StatusEffects.melting);
carnage.immunities.add(StatusEffects.burning);
carnage.immunities.add(StatusEffects.muddy);
carnage.immunities.add(StatusEffects.sapped);
carnage.immunities.add(StatusEffects.sporeSlowed);
carnage.immunities.add(StatusEffects.tarred);
carnage.immunities.add(StatusEffects.shocked);
carnage.immunities.add(StatusEffects.corroded);

const destruction = extendContent(UnitType, "t5-destruction", {});
destruction.constructor = function(){
  return extend(UnitEntity, {});
};
destruction.abilities.add(new UnitSpawnAbility(UnitTypes.zenith, 1800, 0, 0), new UnitSpawnAbility(UnitTypes.zenith, 1800, 0, 0), new RepairFieldAbility(25, 60, 80));
destruction.immunities.add(incinerating);
destruction.immunities.add(StatusEffects.wet);
destruction.immunities.add(StatusEffects.melting);
destruction.immunities.add(StatusEffects.burning);
destruction.immunities.add(StatusEffects.muddy);
destruction.immunities.add(StatusEffects.sapped);
destruction.immunities.add(StatusEffects.sporeSlowed);
destruction.immunities.add(StatusEffects.tarred);
destruction.immunities.add(StatusEffects.shocked);
destruction.immunities.add(StatusEffects.corroded);

//Adamantite Ground
const melter = extendContent(UnitType, "t1-melter", {});
melter.constructor = function(){
  return extend(UnitEntity, {});
};
melter.abilities.add(new RepairFieldAbility(100, 300, 16));
melter.immunities.add(incinerating);
melter.immunities.add(StatusEffects.wet);
melter.immunities.add(StatusEffects.melting);
melter.immunities.add(StatusEffects.burning);
melter.immunities.add(StatusEffects.muddy);
melter.immunities.add(StatusEffects.sapped);
melter.immunities.add(StatusEffects.sporeSlowed);
melter.immunities.add(StatusEffects.tarred);
melter.immunities.add(StatusEffects.shocked);
melter.immunities.add(StatusEffects.corroded);

const evasculator = extendContent(UnitType, "t2-evasculator", {});
evasculator.constructor = function(){
  return extend(UnitEntity, {});
};
evasculator.abilities.add(new RepairFieldAbility(100, 240, 16));
evasculator.immunities.add(incinerating);
evasculator.immunities.add(StatusEffects.wet);
evasculator.immunities.add(StatusEffects.melting);
evasculator.immunities.add(StatusEffects.burning);
evasculator.immunities.add(StatusEffects.muddy);
evasculator.immunities.add(StatusEffects.sapped);
evasculator.immunities.add(StatusEffects.sporeSlowed);
evasculator.immunities.add(StatusEffects.tarred);
evasculator.immunities.add(StatusEffects.shocked);
evasculator.immunities.add(StatusEffects.corroded);

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
catastrophere.immunities.add(incinerating);
catastrophere.immunities.add(StatusEffects.wet);
catastrophere.immunities.add(StatusEffects.melting);
catastrophere.immunities.add(StatusEffects.burning);
catastrophere.immunities.add(StatusEffects.muddy);
catastrophere.immunities.add(StatusEffects.sapped);
catastrophere.immunities.add(StatusEffects.sporeSlowed);
catastrophere.immunities.add(StatusEffects.tarred);
catastrophere.immunities.add(StatusEffects.shocked);
catastrophere.immunities.add(StatusEffects.corroded);

const death = extendContent(UnitType, "t5-death", {});
death.constructor = function(){
  return extend(UnitEntity, {});
};
death.abilities.add(new RepairFieldAbility(100, 60, 16));
death.immunities.add(incinerating);
death.immunities.add(StatusEffects.wet);
death.immunities.add(StatusEffects.melting);
death.immunities.add(StatusEffects.burning);
death.immunities.add(StatusEffects.muddy);
death.immunities.add(StatusEffects.sapped);
death.immunities.add(StatusEffects.sporeSlowed);
death.immunities.add(StatusEffects.tarred);
death.immunities.add(StatusEffects.shocked);
death.immunities.add(StatusEffects.corroded);

//Adamantite Naval
const paralysis = extendContent(UnitType, "t1-paralysis", {});
paralysis.constructor = function(){
  return extend(UnitWaterMove, {});
};
paralysis.abilities.add(new RepairFieldAbility(100, 300, 16));
paralysis.immunities.add(incinerating);
paralysis.immunities.add(StatusEffects.wet);
paralysis.immunities.add(StatusEffects.melting);
paralysis.immunities.add(StatusEffects.burning);
paralysis.immunities.add(StatusEffects.muddy);
paralysis.immunities.add(StatusEffects.sapped);
paralysis.immunities.add(StatusEffects.sporeSlowed);
paralysis.immunities.add(StatusEffects.tarred);
paralysis.immunities.add(StatusEffects.shocked);
paralysis.immunities.add(StatusEffects.corroded);

const ravager = extendContent(UnitType, "t2-ravager", {});
ravager.constructor = function(){
  return extend(UnitWaterMove, {});
};
ravager.abilities.add(new ForceFieldAbility(101.7, 10, 3000, 600), new RepairFieldAbility(100, 240, 16));
ravager.immunities.add(incinerating);
ravager.immunities.add(StatusEffects.wet);
ravager.immunities.add(StatusEffects.melting);
ravager.immunities.add(StatusEffects.burning);
ravager.immunities.add(StatusEffects.muddy);
ravager.immunities.add(StatusEffects.sapped);
ravager.immunities.add(StatusEffects.sporeSlowed);
ravager.immunities.add(StatusEffects.tarred);
ravager.immunities.add(StatusEffects.shocked);
ravager.immunities.add(StatusEffects.corroded);

const abolisher = extendContent(UnitType, "t3-abolisher", {});
abolisher.constructor = function(){
  return extend(UnitWaterMove, {});
};
abolisher.abilities.add(new RepairFieldAbility(100, 180, 16), new UnitSpawnAbility(fireburster, 1200, 0, 14));
abolisher.immunities.add(incinerating);
abolisher.immunities.add(StatusEffects.wet);
abolisher.immunities.add(StatusEffects.melting);
abolisher.immunities.add(StatusEffects.burning);
abolisher.immunities.add(StatusEffects.muddy);
abolisher.immunities.add(StatusEffects.sapped);
abolisher.immunities.add(StatusEffects.sporeSlowed);
abolisher.immunities.add(StatusEffects.tarred);
abolisher.immunities.add(StatusEffects.shocked);
abolisher.immunities.add(StatusEffects.corroded);

const warmonger = extendContent(UnitType, "t4-warmonger", {});
warmonger.constructor = function(){
  return extend(UnitWaterMove, {});
};
warmonger.abilities.add(new RepairFieldAbility(100, 120, 16));
warmonger.immunities.add(incinerating);
warmonger.immunities.add(StatusEffects.wet);
warmonger.immunities.add(StatusEffects.melting);
warmonger.immunities.add(StatusEffects.burning);
warmonger.immunities.add(StatusEffects.muddy);
warmonger.immunities.add(StatusEffects.sapped);
warmonger.immunities.add(StatusEffects.sporeSlowed);
warmonger.immunities.add(StatusEffects.tarred);
warmonger.immunities.add(StatusEffects.shocked);
warmonger.immunities.add(StatusEffects.corroded);

const demise = extendContent(UnitType, "t5-demise", {});
demise.constructor = function(){
  return extend(UnitWaterMove, {});
};
demise.abilities.add(new RepairFieldAbility(100, 60, 16), new UnitSpawnAbility(UnitTypes.horizon, 300, 0, -7));
demise.immunities.add(incinerating);
demise.immunities.add(StatusEffects.wet);
demise.immunities.add(StatusEffects.melting);
demise.immunities.add(StatusEffects.burning);
demise.immunities.add(StatusEffects.muddy);
demise.immunities.add(StatusEffects.sapped);
demise.immunities.add(StatusEffects.sporeSlowed);
demise.immunities.add(StatusEffects.tarred);
demise.immunities.add(StatusEffects.shocked);
demise.immunities.add(StatusEffects.corroded);