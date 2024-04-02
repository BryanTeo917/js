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

    var spaceDown = this.input.keyboard.addKey("SPACE");

    spaceDown.on(
      "down",
      function () {
        let playerPos = {};
        playerPos.x = 1020;
        playerPos.y = 1172;
        playerPos.facing = "down";
        this.scene.start("startScence2", { player: playerPos });
      },
      this
    );
  }
}
