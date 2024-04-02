class intro8 extends Phaser.Scene {
  constructor() {
    super({ key: "intro8" });
  }

  preload() {
    this.load.image("intro8", "assets/intro8.png");
  }

  create() {
    console.log("intro8");

    this.scene.stop("showInventory");

    this.add.image(0, 0, "intro8").setOrigin(0, 0);

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
