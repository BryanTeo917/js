let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  backgroundColor: "#000000",

  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },

  scene: [
    startScence,
    startScence2,
    intro1,
    intro2,
    intro3,
    intro4,
    intro5,
    intro6,
    intro7,
    summerBeachMap,
    iceCreamShop,
    supermarket,
    farm,
    voucher,
    mainpage
    
  ],
};

let game = new Phaser.Game(config);

window.lemon = 0;
window.icecream = 0;
window.ice = 0;
window.tea = 0;
window.coconut = 0;
window.milk = 0;
window.watermelon = 0;
