class intro5 extends Phaser.Scene {
  constructor() {
    super({ key: "intro5" });
  }

  preload() {
    this.load.image("intro5", "assets/intro5.png");
    this.load.audio("gameover", "assets/gameover.wav");
  }

  create() {
    console.log("intro5");
    
    this.gameoverSnd = this.sound.add("gameover").setVolume(0.4);

    window.island.stop()

    this.scene.stop("showInventory");

    

    this.add.image(0, 0, "intro5").setOrigin(0, 0);

    var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function(){
            let playerPos={}
            playerPos.x=1020
            playerPos.y=1172
            playerPos.facing="down"
            this.scene.start("startScence2", {player : playerPos})
            }, this );

            this.gameoverSnd.play();
  }
}
