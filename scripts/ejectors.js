const multiLib = require("multilib");

const multititanium = multiLib.MultiCrafter(GenericSmelter, GenericSmelter.SmelterBuild, "titanium-ejector",[
  {
    input:{
        items:["titanium/6"],
        power:5,
    },
    output:{
        items:["silicon/4"],
    },
    craftTime:60,
},
{
  input:{
      items:["titanium/6"],
      power:5,
  },
  output:{
      items:["metaglass/4"],
  },
  craftTime:60,
},
]);

const multithorium = multiLib.MultiCrafter(GenericSmelter, GenericSmelter.SmelterBuild, "thorium-ejector",[
    {
      input:{
          items:["thorium/6"],
          power:10,
      },
      output:{
          items:["silicon/8"],
      },
      craftTime:60,
  },
  {
    input:{
        items:["thorium/6"],
        power:10,
    },
    output:{
        items:["metaglass/8"],
    },
    craftTime:60,
  },
  ]);