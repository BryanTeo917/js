class iceCreamShop extends Phaser.Scene {
  constructor() {
    super({ key: "iceCreamShop" });
  }

  preload() {
    this.load.audio("collectmusic", "assets/collectmusic.wav");
    // Step 1, load JSON
    this.load.tilemapTiledJSON("iceCreamShop", "assets/iceCreamShop.tmj");

    // Step 2 : Preload any images here
    this.load.image("floorimg3", "assets/Carpet.png");
    this.load.image("wallimg1", "assets/allwall.png");
    this.load.image("itemimg2", "assets/24_Ice_Cream_Shop_32x32.png");
    this.load.image("itemimg5", "assets/14_Basement_32x32.png");
    this.load.image("itemimg4", "assets/16_Grocery_store_32x32.png");

    this.load.spritesheet("gen", "assets/gen.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    this.load.spritesheet("NPC1", "assets/NPC1.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    this.load.spritesheet("icecream", "assets/icecream.png", {
      frameWidth: 20,
      frameHeight: 37,
    });

    this.load.spritesheet("rottenapple", "assets/rottenapple.png", {
      frameWidth: 28,
      frameHeight: 33,
    });

    // this.load.spritesheet('gen', 'assets/char-blank-64x64.png',{ frameWidth:64, frameHeight:64 });
  } // end of preload //

  create() {
    console.log("iceCreamShop");

    // this.anims.create({
    //     key:'gen-up',
    //     frames:this.anims.generateFrameNumbers('gen',
    //     { start:105, end:112 }),
    //     frameRate:5,
    //     repeat:-1
    // });

    // this.anims.create({
    //     key:'gen-left',
    //     frames:this.anims.generateFrameNumbers('gen',
    //     { start:118, end:125 }),
    //     frameRate:5,
    //     repeat:-1
    // });

    // this.anims.create({
    //     key:'gen-down',
    //     frames:this.anims.generateFrameNumbers('gen',
    //     { start:131, end:138 }),
    //     frameRate:5,
    //     repeat:-1
    // });

    // this.anims.create({
    //     key:'gen-right',
    //     frames:this.anims.generateFrameNumbers('gen',
    //     { start:144, end:151 }),
    //     frameRate:5,
    //     repeat:-1
    // });

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "iceCreamShop" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload

    let CarpetTiles = map.addTilesetImage("Carpet", "floorimg3");
    let allwallTiles = map.addTilesetImage("allwall", "wallimg1");
    let Ice_CreamTiles = map.addTilesetImage(
      "24_Ice_Cream_Shop_32x32",
      "itemimg2"
    );
    let BasementTiles = map.addTilesetImage("14_Basement_32x32", "itemimg5");
    let GroceryTiles = map.addTilesetImage(
      "16_Grocery_store_32x32",
      "itemimg4"
    );

    //Step 5  create an array of tiles
    let tilesArray = [
      CarpetTiles,
      allwallTiles,
      Ice_CreamTiles,
      BasementTiles,
      GroceryTiles,
    ];

    // Step 6  Load in layers by layers

    this.floorLayer = map.createLayer("floorLayer", tilesArray, 0, 0);
    this.wallLayer = map.createLayer("wallLayer", tilesArray, 0, 0);
    this.itemLayer = map.createLayer("itemLayer", tilesArray, 0, 0);
    this.chairLayer = map.createLayer("chairLayer", tilesArray, 0, 0);
    this.chairLayer2 = map.createLayer("chairLayer2", tilesArray, 0, 0);

    this.collectmusic = this.sound.add("collectmusic");

    this.player = this.physics.add.sprite(140, 146, "NPC1");

    this.player.body
      .setSize(this.player.width * 0.3, this.player.height * 0.3)
      .setOffset(22, 42);

    this.cursors = this.input.keyboard.createCursorKeys();


    var key1Down = this.input.keyboard.addKey(49);
    var key3Down = this.input.keyboard.addKey(51);
    var key4Down = this.input.keyboard.addKey(52);

    key1Down.on(
      "down",
      function () {
        console.log("Key 1 pressed");
        this.scene.start("summerBeachMap");
      },
      this
    );

    key3Down.on(
      "down",
      function () {
        console.log("Key 3 pressed");
        this.scene.start("supermarket");
      },
      this
    );

    key4Down.on(
      "down",
      function () {
        console.log("Key 4 pressed");
        this.scene.start("farm");
      },
      this
    );

    this.player = this.physics.add.sprite(537, 565, "gen");
    window.player = this.player;

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // // camera follow player
    this.cameras.main.startFollow(this.player);

    this.wallLayer.setCollisionByExclusion(-1, true);
    this.chairLayer.setCollisionByExclusion(-1, true);
    this.chairLayer2.setCollisionByExclusion(-1, true);
    this.itemLayer.setCollisionByExclusion(-1, true);

    this.physics.add.collider(this.player, this.wallLayer);
    this.physics.add.collider(this.player, this.chairLayer);
    this.physics.add.collider(this.player, this.chairLayer2);
    this.physics.add.collider(this.player, this.itemLayer);

    this.player.body
      .setSize(this.player.width * 0.3, this.player.height * 0.3)
      .setOffset(22, 42);

    this.anims.create({
      key: "icecream_Anim",
      frames: this.anims.generateFrameNumbers("icecream", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    let icecream = map.findObject("objectLayer", (obj) => obj.name === "1");

    this.icecream = this.physics.add
      .sprite(icecream.x, icecream.y, "icecream")
      .play("icecream_Anim");

    this.anims.create({
      key: "rottenapple_Anim",
      frames: this.anims.generateFrameNumbers("rottenapple", {
        start: 0,
        end: 1,
      }),
      frameRate: 5,
      repeat: -1,
    });

    let rottenapple = map.findObject("objectLayer", (obj) => obj.name === "2");

    this.rottenapple = this.physics.add
      .sprite(rottenapple.x, rottenapple.y, "rottenapple")
      .play("rottenapple_Anim");

    this.physics.add.overlap(
      this.player,
      this.icecream,
      this.collectIcecream,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.rottenapple,
      this.hitrottenapple,
      null,
      this
    );
  } // end of create //

  update() {
    if (this.player.x > 425 && this.player.x < 600 && this.player.y > 600) {
      console.log("Door1");
      this.summerBeachMap();
    } // outside of update() but within the class

    if (
      window.lemon == 1 &&
      window.icecream == 1 &&
      window.ice == 1 &&
      window.tea == 1 &&
      window.coconut == 1 &&
      window.milk == 1 &&
      window.watermelon == 1
    ) {
      console.log("goto intro6");
      this.scene.start("intro6");
    }

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play("gen-left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play("gen-right", true);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-160);
      this.player.anims.play("gen-up", true);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(160);
      this.player.anims.play("gen-down", true);
    } else {
      this.player.setVelocity(0);
      this.player.anims.stop();
    }
  } // end of update //

  summerBeachMap(player, tile) {
    console.log("summerBeachMap");
    let playerPos = {};
    playerPos.x = 176;
    playerPos.y = 243;
    playerPos.facing = "down";
    this.scene.start("summerBeachMap", { player: playerPos });
  }

  collectIcecream(player, item) {
    console.log("collectIcecream");
    this.collectmusic.play();
    // this.cameras.main.shake(200);
    item.disableBody(true, true); // remove fire
    return false;
  }

  hitrottenapple(player, death) {
    console.log("hitrottenapple , goto intro5");
    // this.cameras.main.shake(200);
    this.scene.start("intro5")
    death.disableBody(true, true); // remove fire
    return false;
  }
}
