const ashEffect = new Effect(60, e => {
    Draw.color(Color.valueOf("606060"));
    Fill.circle(e.x, e.y, e.fout() * 2);
});

const ashen = new StatusEffect("ashen");
ashen.speedMultiplier = 0.5;
ashen.damage = 0.03;
ashen.color = Color.valueOf("808080");
ashen.effect = ashEffect;

const ashfall = new ParticleWeather("ashfall");
ashfall.attrs.set(Attribute.light, -0.9);
ashfall.attrs.set(Attribute.water, -0.5);
ashfall.attrs.set(Attribute.spores, -0.1);
ashfall.particleRegion = "particle";
ashfall.noiseScale = 1000;
ashfall.noisePath = "fog";
ashfall.force = 1.8;
ashfall.xspeed = 0.25;
ashfall.xspeed = 0.25;
ashfall.baseSpeed = 0.6;
ashfall.drawParticles = true;
ashfall.drawNoise = true;
ashfall.sizeMin = 4;
ashfall.sizeMax = 16;
ashfall.density = 2600;
ashfall.opacityMultiplier = 1;
ashfall.noiseLayers = 8;
ashfall.status = ashen;
ashfall.color = Color.valueOf("303030");
ashfall.noiseColor = Color.valueOf("303030");