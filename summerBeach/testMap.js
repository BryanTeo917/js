class testMap extends Phaser.Scene {
  constructor() {
    super({ key: "testMap" });
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("world", "assets/MAP2.tmj");

    // Step 2 : Preload any images here
    this.load.image("building", "assets/Buildings32x32.png");
    this.load.image("street", "assets/Street32x32.png");
    this.load.image("forest", "assets/forest_tiles.png");

    this.load.spritesheet("fire", "assets/fire.png", {
      frameWidth: 40,
      frameHeight: 70,
    });

    this.load.spritesheet('gen', 'assets/char-blank-64x64.png',{ frameWidth:64, frameHeight:64 });
  } // end of preload //

  create() {
    console.log("animationScene");

    this.anims.create({
        key:'gen-up',
        frames:this.anims.generateFrameNumbers('gen',
        { start:105, end:112 }),
        frameRate:5,
        repeat:-1
    });

    this.anims.create({
        key:'gen-left',
        frames:this.anims.generateFrameNumbers('gen',
        { start:118, end:125 }),
        frameRate:5,
        repeat:-1
    });

    this.anims.create({
        key:'gen-down',
        frames:this.anims.generateFrameNumbers('gen',
        { start:131, end:138 }),
        frameRate:5,
        repeat:-1
    });

    this.anims.create({
        key:'gen-right',
        frames:this.anims.generateFrameNumbers('gen',
        { start:144, end:151 }),
        frameRate:5,
        repeat:-1
    });

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "world" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload

    let buildingTiles = map.addTilesetImage("Buildings32x32", "building");
    let streetTiles = map.addTilesetImage("Street32x32", "street");
    let forestTiles = map.addTilesetImage("forest_tiles", "forest");

    //Step 5  create an array of tiles
    let tilesArray = [buildingTiles, streetTiles, forestTiles];

    // Step 6  Load in layers by layers

    this.groundLayer = map.createLayer("ground", tilesArray, 0, 0);
    this.groundLayer = map.createLayer("Tile Layer 4", tilesArray, 0, 0);

    this.anims.create({
      key: "flame",
      frames: this.anims.generateFrameNumbers("fire", { start: 0, end: 3 }),
      frameRate: 20,
      repeat: -1,
    });

    let h1 = map.findObject("objectlayer", (obj) => obj.name === "h1");
    let h2 = map.findObject("objectlayer", (obj) => obj.name === "h2");

    this.add.sprite(h1.x, h1.y, "fire").play("flame");
    this.add.sprite(h2.x, h2.y, "fire").play("flame");


    this.streetLayer = map.createLayer("Tile Layer 3", tilesArray, 0, 0);
    this.buildingLayer = map.createLayer("building", tilesArray, 0, 0);

    this.player = this.physics.add.sprite(50,50,"gen");

    this.cursors = this.input.keyboard.createCursorKeys();

    // make the camera follow the player
    this.cameras.main.startFollow(this.player);
  } // end of create //

  update() {
    if (this.cursors.left.isDown)
    {
        this.player.setVelocityX(-160);
        this.player.anims.play('gen-left', true);
    }
    else if (this.cursors.right.isDown)
    {
        this.player.setVelocityX(160);
        this.player.anims.play('gen-right', true);
    } else if (this.cursors.up.isDown)
    {
        this.player.setVelocityY(-160);
        this.player.anims.play('gen-up', true);
    } else if (this.cursors.down.isDown)
    {
        this.player.setVelocityY(160);
        this.player.anims.play('gen-down', true);
    } else {
        this.player.setVelocity(0);
        this.player.anims.stop();
    }
  } // end of update //
}
