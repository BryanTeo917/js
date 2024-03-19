
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    backgroundColor: '#000000',

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    scene: [ preloadScene, summerBeachMap, iceCreamShop , supermarket , farm]
    

};

let game = new Phaser.Game(config);

window.lemon=0
window.icecream=0
window.ice=0
window.tea=0
window.coconut=0
window.milk=0
window.watermelon=0