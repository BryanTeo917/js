class voucher extends Phaser.Scene {
  constructor() {
    super({ key: "voucher" });
  }

  preload() {
    this.load.image("voucher", "assets/voucher.png");
  }

  create() {
    console.log("voucher");

    this.scene.stop("showInventory");

    this.add.image(0, 0, "voucher").setOrigin(0, 0);

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
