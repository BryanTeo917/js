class supermarket extends Phaser.Scene {
  constructor() {
    super({ key: "supermarket" });
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("supermarket", "assets/supermarket.tmj");

    // Step 2 : Preload any images here
    this.load.image("floorimg3", "assets/Carpet.png");
    this.load.image("wallimg2", "assets/18_Jail_32x32.png");
    this.load.image("itemimg4", "assets/16_Grocery_store_32x32.png");
    this.load.image("itemimg2", "assets/24_Ice_Cream_Shop_32x32.png");
    this.load.image("bridgeimg1", "assets/misc_atlas.png");

    this.load.spritesheet("gen", "assets/gen.png", {
      frameWidth: 64,
      frameHeight: 64,
    });


    this.load.spritesheet("ice", "assets/ice.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
  } // end of preload //

  create() {
    console.log("supermarket");

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
    let map = this.make.tilemap({ key: "supermarket" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload

    let CarpetTiles = map.addTilesetImage("Carpet", "floorimg3");
    let JailTiles = map.addTilesetImage("18_Jail_32x32", "wallimg2");
    let GroceryTiles = map.addTilesetImage(
      "16_Grocery_store_32x32",
      "itemimg4"
    );
    let Ice_CreamTiles = map.addTilesetImage(
      "24_Ice_Cream_Shop_32x32",
      "itemimg2"
    );
    let miscTiles = map.addTilesetImage("misc_atlas", "bridgeimg1");

    //Step 5  create an array of tiles
    let tilesArray = [
      CarpetTiles,
      JailTiles,
      Ice_CreamTiles,
      GroceryTiles,
      miscTiles,
    ];

    // Step 6  Load in layers by layers

    this.floorLayer = map.createLayer("floorLayer", tilesArray, 0, 0);
    this.wallLayer = map.createLayer("wallLayer", tilesArray, 0, 0);
    this.itemLayer = map.createLayer("itemLayer", tilesArray, 0, 0);
    this.itemLayer2 = map.createLayer("itemLayer2", tilesArray, 0, 0);

    // this.player = this.physics.add.sprite(50,50,"gen");

    this.cursors = this.input.keyboard.createCursorKeys();

    var spaceDown = this.input.keyboard.addKey("SPACE");

    spaceDown.on(
      "down",
      function () {
        console.log("Space pressed, goto iceCreamShop");
        this.scene.start("iceCreamShop");
      },
      this
    );

    var key1Down = this.input.keyboard.addKey(49);
    var key2Down = this.input.keyboard.addKey(50);
    var key4Down = this.input.keyboard.addKey(52);

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

    key4Down.on(
      "down",
      function () {
        console.log("Key 4 pressed");
        this.scene.start("farm");
      },
      this
    );

    this.player = this.physics.add.sprite(174, 546, "gen");
    window.player = this.player;

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // // camera follow player
    this.cameras.main.startFollow(this.player);

    this.wallLayer.setCollisionByExclusion(-1, true);
    this.itemLayer.setCollisionByExclusion(-1, true);
    this.itemLayer2.setCollisionByExclusion(-1, true);

    this.physics.add.collider(this.player, this.wallLayer);
    this.physics.add.collider(this.player, this.itemLayer);
    this.physics.add.collider(this.player, this.itemLayer2);

    this.player.body
      .setSize(this.player.width * 0.3, this.player.height * 0.3)
      .setOffset(22, 42);

      this.anims.create({
        key: "ice_Anim",
        frames: this.anims.generateFrameNumbers("ice", { start: 0, end: 1 }),
        frameRate: 5,
        repeat: -1,
      });
  
      let item1 = map.findObject("objectLayer", (obj) => obj.name === "1");
  
      this.item1 = this.physics.add.sprite(item1.x, item1.y, "ice").play("ice_Anim");
  } // end of create //

  update() {
    if (this.player.x > 406 && this.player.x < 537 && this.player.y > 346) {
      console.log("Door1");
      this.summerBeachMap();
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
    playerPos.x = 699;
    playerPos.y = 899;
    playerPos.facing = "down";
    this.scene.start("summerBeachMap", { player: playerPos });
  }
}
