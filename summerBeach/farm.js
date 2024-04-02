class farm extends Phaser.Scene {
  constructor() {
    super({ key: "farm" });
  }

  preload() {

    this.load.audio("collectmusic", "assets/collectmusic.wav");
    // Step 1, load JSON
    this.load.tilemapTiledJSON("farm", "assets/farm.tmj");

    // Step 2 : Preload any images here
    this.load.image("floorimg4", "assets/forest_tiles.png");
    this.load.image("itemimg3", "assets/Fence32x32.png");
    this.load.image("buildingimg4", "assets/7_Villas_32x32.png");

    this.load.spritesheet("gen", "assets/gen.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    this.load.spritesheet("milk", "assets/milk.png", {
      frameWidth: 16,
      frameHeight: 33,
    });

    // this.load.spritesheet('gen', 'assets/char-blank-64x64.png',{ frameWidth:64, frameHeight:64 });
  } // end of preload //

  create() {
    console.log("farm");

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
    let map = this.make.tilemap({ key: "farm" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload

    let carpetTiles = map.addTilesetImage("forest_tiles", "floorimg4");
    let FenceTiles = map.addTilesetImage("Fence32x32", "itemimg3");
    let VillasTiles = map.addTilesetImage("7_Villas_32x32", "buildingimg4");

    //Step 5  create an array of tiles
    let tilesArray = [carpetTiles, FenceTiles, VillasTiles];

    // Step 6  Load in layers by layers

    this.floorLayer = map.createLayer("floorLayer", tilesArray, 0, 0);
    this.wallLayer = map.createLayer("itemLayer", tilesArray, 0, 0);
    this.buildingLayer = map.createLayer("buildingLayer", tilesArray, 0, 0);

    this.collectmusic = this.sound.add("collectmusic")

    // this.player = this.physics.add.sprite(50,50,"gen");

    this.cursors = this.input.keyboard.createCursorKeys();


    

    var key1Down = this.input.keyboard.addKey(49);
    var key2Down = this.input.keyboard.addKey(50);
    var key3Down = this.input.keyboard.addKey(51);

    key1Down.on(
      "down",
      function () {
        console.log("Key 1 pressed");
        this.scene.start("summerBeachMap");
      },
      this
    );

    key2Down.on(
      "down",
      function () {
        console.log("Key 2 pressed");
        this.scene.start("iceCreamShop");
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

    this.player = this.physics.add.sprite(272, 528, "gen");
    window.player = this.player;

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // // camera follow player
    this.cameras.main.startFollow(this.player);

    this.buildingLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.buildingLayer);

    this.player.body
      .setSize(this.player.width * 0.3, this.player.height * 0.3)
      .setOffset(22, 42);

      this.anims.create({
        key: "milk_Anim",
        frames: this.anims.generateFrameNumbers("milk", { start: 0, end: 1 }),
        frameRate: 5,
        repeat: -1,
      });
  
      let milk = map.findObject("objectLayer", (obj) => obj.name === "1");
  
      this.milk = this.physics.add.sprite(milk.x, milk.y, "milk").play("milk_Anim");

      this.physics.add.overlap(this.player, this.milk, this.collectMilk, null, this);
  } // end of create //

  update() {

  

    if (this.player.x > 238 && this.player.x < 347 && this.player.y > 580) {
      console.log("Door1");
      this.summerBeachMap();
    }

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
    playerPos.x = 1273;
    playerPos.y = 686;
    playerPos.facing = "down";
    this.scene.start("summerBeachMap", { player: playerPos });
  }

  collectMilk(player, item) {
    console.log("collectMilk");
    this.collectmusic.play()
    // this.cameras.main.shake(200);
    item.disableBody(true, true); // remove fire
    return false;
  }
}
