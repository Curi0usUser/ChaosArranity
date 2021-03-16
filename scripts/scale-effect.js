const scaleBubble = new Effect(90, e => {
    Draw.color(Color.valueOf("B83DBA"));
    Fill.circle(e.x, e.y, e.fin() * 1);
    Lines.stroke(e.fout() * 2);
    Lines.circle(e.x, e.y, e.fin() * 3);
});

const scaleDrip = new Effect(60, e => {
    Draw.color(Color.valueOf("B83DBA"));
    Fill.circle(e.x, e.y, e.fout() * 2);
});

const infect = new StatusEffect("infected");
infect.speedMultiplier = 0.8;
infect.reloadMultiplier = 0.6;
infect.damageMultiplier = 0.8;
infect.color = Color.valueOf("B83DBA");
infect.effect = scaleBubble;

const scaleWet = new StatusEffect("scale-wet");
scaleWet.speedMultiplier = 0.75;
scaleWet.reloadMultiplier = 0.5;
scaleWet.damageMultiplier = 0.8;
scaleWet.color = Color.valueOf("B83DBA");
scaleWet.effect = scaleDrip;

const scale = extend(Liquid, "scale", {});
scale.effect = infect;

const scaleP = extend(Floor, "scale-pool", {});
scaleP.status = infect;

const scaleShot = extend(LiquidBulletType, {
    knockback: 0.8,
    liquid: scale,
    status: infect
});

const heavyScaleShot = extend(LiquidBulletType, {
    knockback: 0.5,
    damage: 0.3,
    lifetime: 50,
    speed: 4,
    puddleSize: 8,
    orbSize: 4,
    liquid: scale,
    status: infect,
    statusDuration: 240
});

Blocks.wave.ammoTypes.put(
    scale, scaleShot
);

Blocks.tsunami.ammoTypes.put(
    scale, heavyScaleShot
);

const scalestorm = new RainWeather("scalestorm");
scalestorm.attrs.set(Attribute.light, -0.2);
scalestorm.attrs.set(Attribute.water, 0.2);
scalestorm.sound = Sounds.rain;
scalestorm.soundVol = 0.25;
scalestorm.liquid = scale;
scalestorm.status = scaleWet;
scalestorm.stroke = 2;
scalestorm.color = Color.valueOf("B83DBA");

const scaleCollector = extendContent(SolidPump, "scale-collector", {});

scaleCollector.buildType = () => extendContent(SolidPump.SolidPumpBuild, scaleCollector, {
    updateTile(){
        if(this.liquids.total() > 0.001){
            this.dumpLiquid(this.liquids.current());
        }
        if (scalestorm.isActive() && this.timer.get(0, 60)) {
            this.liquids.add(scale, 6);
        }
    }
});

module.exports = {
    infect:infect
  }