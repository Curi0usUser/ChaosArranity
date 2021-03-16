// Config
var fragAmount = 3;
var fragDamage = 8;
var fragChance = 20;
var fragSpread = 10;
var meltSpeed = 1;

const iceBlock = extendContent(Wall, "ice-block", {});
const iceBlockLarge = extendContent(Wall, "ice-block-large", {});

const icefrag = extend(BasicBulletType, {
  speed: 3,
  damage: fragDamage,
  lifetime: 20,
  width: 10,
  height: 10,
  frontColor: Color.valueOf("b7cbf4"),
  backColor: Color.valueOf("9db5e5"),
  shrinkX: 0.6,
  hitEffect: Fx.freezing,
  despawnEffect: Fx.freezing
});

var h = 0;
iceBlock.buildType = () => extendContent(Wall.WallBuild, iceBlock, {
  collision(bullet) {
    this.super$collision(bullet);
    if(bullet.team != this.team && Math.random()*100 <= fragChance){
      while (h < fragAmount) {
          icefrag.create(this, this.team, this.x, this.y, (bullet.rotation() + 180) + ((Math.random() -0.5) * fragSpread) * 2);
          h++
      }
      h = 0;
    }
  },
  updateTile(){
    if (this.timer.get(0, 60)){
      var tileHeat = this.floor().sumAttribute(Attribute.heat, this.tile.x, this.tile.y);
      var tileWater =this.floor().sumAttribute(Attribute.water, this.tile.x, this.tile.y);
      if (Weathers.snow.isActive()) {
        meltSpeed = 0 
      } else {
        meltSpeed = 1
      };
      var meltAmount = meltSpeed + (tileHeat*1.5) - (tileWater*1.2);
      this.damage(meltAmount);
      Puddles.deposit(this.tile, Liquids.water, 4 + (meltAmount));
    }
  }
});

iceBlockLarge.buildType = () => extendContent(Wall.WallBuild, iceBlockLarge, {
  collision(bullet) {
    this.super$collision(bullet);
    if(bullet.team != this.team && Math.random()*100 <= fragChance){
      while (h < fragAmount) {
          icefrag.create(this, this.team, this.x, this.y, (bullet.rotation() + 180) + ((Math.random() -0.5) * fragSpread) * 2);
          h++
      }
      h = 0;
    }
  },
  updateTile(){
    if (this.timer.get(0, 60)){
      var tileHeatL = this.floor().sumAttribute(Attribute.heat, this.tile.x, this.tile.y);
      var tileWaterL =this.floor().sumAttribute(Attribute.water, this.tile.x, this.tile.y);
      var meltAmountL = meltSpeed + (tileHeatL*1.5) - (tileWaterL*1.2);
      this.damage(meltAmountL);
      Puddles.deposit(this.tile, Liquids.water, 6 + (meltAmountL*1.2));
    }
  }
});