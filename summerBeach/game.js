
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