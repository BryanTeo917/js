class intro6 extends Phaser.Scene {
  constructor() {
    super({ key: "intro6" });
  }

  preload() {
    this.load.image("intro6", "assets/intro6.png");
  }

  create() {
    console.log("intro6");

    this.scene.stop("showInventory");

    this.add.image(0, 0, "intro6").setOrigin(0, 0);

    var spaceDown = this.input.keyboard.addKey("SPACE");

    spaceDown.on(
      "down",
      function () {
        console.log("Spacebar pressed, goto startScene");
        window.lemon = 0;
        window.icecream = 0;
        window.ice = 0;
        window.tea = 0;
        window.coconut = 0;
        window.milk = 0;
        window.watermelon = 0;
        this.scene.start("startScence", { player: playerPos });
      },
      this
    );
  }
}
