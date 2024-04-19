class summerBeachMap extends Phaser.Scene {
  constructor() {
    super({ key: "summerBeachMap" });
  }

  //incoming data from scene below
  init(data) {
    this.playerPos = data.player;
  }

  preload() {
    this.load.audio("collectmusic", "assets/collectmusic.wav");
    // Step 1, load JSON
    this.load.tilemapTiledJSON("summerBeachMap", "assets/summerBeachMap.tmj");

    // Step 2 : Preload any images here
    this.load.image("floorimg1", "assets/Street32x32.png");
    this.load.image("floorimg2", "assets/tuxmon-32x32.png");
    this.load.image("floorimg4", "assets/forest_tiles.png");
    this.load.image("itemimg1", "assets/food.png");
    this.load.image("itemimg2", "assets/24_Ice_Cream_Shop_32x32.png");
    this.load.image("itemimg3", "assets/Fence32x32.png");
    this.load.image("grassimg", "assets/desert1.png");
    this.load.image("grassimg2", "assets/defimon2.png");
    this.load.image("buildingimg", "assets/defimon3.png");
    this.load.image("buildingimg2", "assets/Buildings32x32.png");
    this.load.image(
      "buildingimg3",
      "assets/9_Shopping_Center_and_Markets_32x32.png"
    );
    this.load.image("buildingimg4", "assets/7_Villas_32x32.png");

    this.load.spritesheet("gen", "assets/gen.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    this.load.spritesheet("tea", "assets/tea.png", {
      frameWidth: 20,
      frameHeight: 37,
    });

    this.load.spritesheet("watermelon", "assets/watermelon.png", {
      frameWidth: 34,
      frameHeight: 35,
    });

    this.load.spritesheet("coconut", "assets/coconut.png", {
      frameWidth: 32,
      frameHeight: 25,
    });

    this.load.spritesheet("lemon", "assets/lemon.png", {
      frameWidth: 40,
      frameHeight: 37,
    });

    this.load.spritesheet("moldbread", "assets/moldbread.png", {
      frameWidth: 46,
      frameHeight: 48,
    });

    this.load.spritesheet("shit", "assets/shit.png", {
      frameWidth: 42,
      frameHeight: 39,
    });

    this.load.spritesheet("burger", "assets/burger.png", {
      frameWidth: 36,
      frameHeight: 29,
    });

    this.load.spritesheet("cola", "assets/cola.png", {
      frameWidth: 29,
      frameHeight: 57,
    });

    this.load.spritesheet("frenchfried", "assets/frenchfried.png", {
      frameWidth: 31,
      frameHeight: 40,
    });

    this.load.spritesheet("MC", "assets/MC.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    this.load.spritesheet("exit", "assets/exit.png", {
      frameWidth: 30,
      frameHeight: 34,
    });

    // this.load.spritesheet('gen', 'assets/char-blank-64x64.png',{ frameWidth:64, frameHeight:64 });
  } // end of preload //

  create() {
    console.log("summerBeachMap");

    this.anims.create({
      key: "gen-up",
      frames: this.anims.generateFrameNumbers("gen", { start: 105, end: 112 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "gen-left",
      frames: this.anims.generateFrameNumbers("gen", { start: 118, end: 125 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "gen-down",
      frames: this.anims.generateFrameNumbers("gen", { start: 131, end: 138 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "gen-right",
      frames: this.anims.generateFrameNumbers("gen", { start: 144, end: 151 }),
      frameRate: 5,
      repeat: -1,
    });

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "summerBeachMap" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload

    let StreetTiles = map.addTilesetImage("Street32x32", "floorimg1");
    let tuxmonTiles = map.addTilesetImage("tuxmon-32x32", "floorimg2");
    let forestTiles = map.addTilesetImage("forest_tiles", "floorimg4");
    let foodTiles = map.addTilesetImage("food", "itemimg1");
    let Ice_CreamTiles = map.addTilesetImage(
      "24_Ice_Cream_Shop_32x32",
      "itemimg2"
    );
    let FenceTiles = map.addTilesetImage("Fence32x32", "itemimg3");
    let desertTiles = map.addTilesetImage("desert1", "grassimg");
    let defimon2Tiles = map.addTilesetImage("defimon2", "grassimg2");
    let defimon3Tiles = map.addTilesetImage("defimon3", "buildingimg");
    let BuildingsTiles = map.addTilesetImage("Buildings32x32", "buildingimg2");
    let Shopping_CenterTiles = map.addTilesetImage(
      "9_Shopping_Center_and_Markets_32x32",
      "buildingimg3"
    );
    let VillasTiles = map.addTilesetImage("7_Villas_32x32", "buildingimg4");

    //Step 5  create an array of tiles
    let tilesArray = [
      StreetTiles,
      tuxmonTiles,
      forestTiles,
      foodTiles,
      Ice_CreamTiles,
      foodTiles,
      FenceTiles,
      desertTiles,
      defimon2Tiles,
      defimon3Tiles,
      BuildingsTiles,
      Shopping_CenterTiles,
      VillasTiles,
    ];

    // Step 6  Load in layers by layers

    this.floorLayer = map.createLayer("floorLayer", tilesArray, 0, 0);
    this.wallLayer = map.createLayer("wallLayer", tilesArray, 0, 0);
    this.chairLayer = map.createLayer("chairLayer", tilesArray, 0, 0);
    this.grassLayer = map.createLayer("grassLayer", tilesArray, 0, 0);
    this.itemLayer = map.createLayer("itemLayer", tilesArray, 0, 0);
    this.buildingLayer = map.createLayer("buildingLayer", tilesArray, 0, 0);
    this.otherLayer = map.createLayer("otherLayer", tilesArray, 0, 0);

    this.collectmusic = this.sound.add("collectmusic");

    // this.player = this.physics.add.sprite(50,50,"gen");

    this.cursors = this.input.keyboard.createCursorKeys();


    //this.input.once('pointerdown', function(){
    

    var key2Down = this.input.keyboard.addKey(50);
    var key3Down = this.input.keyboard.addKey(51);
    var key4Down = this.input.keyboard.addKey(52);

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

    key4Down.on(
      "down",
      function () {
        console.log("Key 4 pressed");
        this.scene.start("farm");
      },
      this
    );

    this.player = this.physics.add.sprite(
      this.playerPos.x,
      this.playerPos.y,
      "gen"
    );
    window.player = this.player;

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // // camera follow player
    this.cameras.main.startFollow(this.player);

    this.buildingLayer.setCollisionByExclusion(-1, true);
    this.otherLayer.setCollisionByExclusion(-1, true);

    this.physics.add.collider(this.player, this.buildingLayer);
    this.physics.add.collider(this.player, this.otherLayer);

    this.player.body
      .setSize(this.player.width * 0.3, this.player.height * 0.3)
      .setOffset(22, 42);

    let MC = map.findObject("objectLayer", (obj) => obj.name === "5");
    this.MC = this.physics.add.sprite(MC.x, MC.y, "MC");

    this.anims.create({
      key: "tea_Anim",
      frames: this.anims.generateFrameNumbers("tea", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    let tea = map.findObject("objectLayer", (obj) => obj.name === "1");

    this.tea = this.physics.add.sprite(tea.x, tea.y, "tea").play("tea_Anim");

    this.anims.create({
      key: "moldbread_Anim",
      frames: this.anims.generateFrameNumbers("moldbread", {
        start: 0,
        end: 1,
      }),
      frameRate: 5,
      repeat: -1,
    });

    let moldbread = map.findObject("objectLayer", (obj) => obj.name === "6");

    this.moldbread = this.physics.add
      .sprite(moldbread.x, moldbread.y, "moldbread")
      .play("moldbread_Anim");

    this.anims.create({
      key: "shit_Anim",
      frames: this.anims.generateFrameNumbers("shit", {
        start: 0,
        end: 1,
      }),
      frameRate: 5,
      repeat: -1,
    });

    let shit = map.findObject("objectLayer", (obj) => obj.name === "7");

    this.shit = this.physics.add
      .sprite(shit.x, shit.y, "shit")
      .play("shit_Anim");

    this.anims.create({
      key: "watermelon_Anim",
      frames: this.anims.generateFrameNumbers("watermelon", {
        start: 0,
        end: 1,
      }),
      frameRate: 5,
      repeat: -1,
    });

    let watermelon = map.findObject("objectLayer", (obj) => obj.name === "2");

    this.watermelon = this.physics.add
      .sprite(watermelon.x, watermelon.y, "watermelon")
      .play("watermelon_Anim");

    this.anims.create({
      key: "coconut_Anim",
      frames: this.anims.generateFrameNumbers("coconut", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    let coconut = map.findObject("objectLayer", (obj) => obj.name === "3");

    this.coconut = this.physics.add
      .sprite(coconut.x, coconut.y, "coconut")
      .play("coconut_Anim");

    this.anims.create({
      key: "lemon_Anim",
      frames: this.anims.generateFrameNumbers("lemon", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    let lemon = map.findObject("objectLayer", (obj) => obj.name === "4");

    this.lemon = this.physics.add
      .sprite(lemon.x, lemon.y, "lemon")
      .play("lemon_Anim");

      this.anims.create({
        key: "burger_Anim",
        frames: this.anims.generateFrameNumbers("burger", { start: 0, end: 1 }),
        frameRate: 5,
        repeat: -1,
      });
  
      let burger = map.findObject("objectLayer", (obj) => obj.name === "8");
  
      this.burger = this.physics.add
        .sprite(burger.x, burger.y, "burger")
        .play("burger_Anim");

        this.anims.create({
          key: "cola_Anim",
          frames: this.anims.generateFrameNumbers("cola", { start: 0, end: 1 }),
          frameRate: 5,
          repeat: -1,
        });
    
        let cola = map.findObject("objectLayer", (obj) => obj.name === "9");
    
        this.cola = this.physics.add
          .sprite(cola.x, cola.y, "cola")
          .play("cola_Anim");

          this.anims.create({
            key: "frenchfried_Anim",
            frames: this.anims.generateFrameNumbers("frenchfried", { start: 0, end: 1 }),
            frameRate: 5,
            repeat: -1,
          });
      
          let frenchfried = map.findObject("objectLayer", (obj) => obj.name === "10");
      
          this.frenchfried = this.physics.add
            .sprite(frenchfried.x, frenchfried.y, "frenchfried")
            .play("frenchfried_Anim");

            this.anims.create({
              key: "exit_Anim",
              frames: this.anims.generateFrameNumbers("exit", { start: 0, end: 1 }),
              frameRate: 5,
              repeat: -1,
            });
        
            let exit = map.findObject("objectLayer", (obj) => obj.name === "11");
        
            this.exit = this.physics.add
              .sprite(exit.x, exit.y, "exit")
              .play("exit_Anim");

    this.physics.add.overlap(
      this.player,
      this.tea,
      this.collectTea,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.watermelon,
      this.collectWatermelon,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.coconut,
      this.collectCoconut,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.lemon,
      this.collectLemon,
      null,
      this
    );

    this.physics.add.overlap(this.player, this.shit, this.hitshit, null, this);

    this.physics.add.overlap(
      this.player,
      this.moldbread,
      this.hitmoldbread,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.burger,
      this.hitburger,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.cola,
      this.hitcola,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.frenchfried,
      this.hitfrenchfried,
      null,
      this
    );
    
    this.physics.add.overlap(
      this.player,
      this.exit,
      this.hitexit,
      null,
      this
    );

    this.physics.add.overlap(this.player, this.MC, this.talktoMC, null, this);
  } // end of create //

  update() {
    if (
      this.player.x > 476 &&
      this.player.x < 554 &&
      this.player.y < 887 &&
      this.player.y > 814
    ) {
      console.log("Door1");
      this.supermarket();
    }

    if (
      this.player.x > 132 &&
      this.player.x < 216 &&
      this.player.y < 234 &&
      this.player.y > 155
    ) {
      console.log("Door2");
      this.iceCreamShop();
    }

    if (
      this.player.x > 1200 &&
      this.player.x < 1372 &&
      this.player.y < 664 &&
      this.player.y > 584
    ) {
      console.log("farm");
      this.farm();
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

  supermarket(player, tile) {
    console.log("supermarket function");
    this.scene.start("supermarket");
  }

  iceCreamShop(player, tile) {
    console.log("iceCreamShop function");
    this.scene.start("iceCreamShop");
  }

  farm(player, tile) {
    console.log("farm function");
    this.scene.start("farm");
  }

  collectLemon(player, item) {
    console.log("collectLemon");
    this.collectmusic.play();
    window.lemon=1
    // this.cameras.main.shake(200);
    item.disableBody(true, true); // remove fire
    return false;
  }

  collectTea(player, item) {
    console.log("collectTea");
    this.collectmusic.play();
    // this.cameras.main.shake(200);
    window.tea=1
    item.disableBody(true, true); // remove fire
    return false;
  }

  collectWatermelon(player, item) {
    console.log("collectWatermelon");
    this.collectmusic.play();
    // this.cameras.main.shake(200);
    window.watermelon=1
    item.disableBody(true, true); // remove fire
    return false;
  }

  collectCoconut(player, item) {
    console.log("collectCoconut");
    this.collectmusic.play();
    window.coconut=1
    // this.cameras.main.shake(200);
    item.disableBody(true, true); // remove fire
    return false;
  }

  talktoMC(player, MC) {
    console.log("talktoMC");
    //display image
    //start timer
  }

  hitshit(player, death) {
    console.log("hitshit , goto intro5");
    // this.cameras.main.shake(200);
    this.scene.start("intro5");
    death.disableBody(true, true); // remove fire
    return false;
  }

  hitmoldbread(player, death) {
    console.log("hitmoldbread , goto intro5");
    // this.cameras.main.shake(200);
    this.scene.start("intro5");
    death.disableBody(true, true); // remove fire
    return false;
  }

  hitburger(player, death) {
    console.log("burger , goto intro5");
    // this.cameras.main.shake(200);
    this.scene.start("intro5");
    death.disableBody(true, true); // remove fire
    return false;
  }

  hitcola(player, death) {
    console.log("cola , goto intro5");
    // this.cameras.main.shake(200);
    this.scene.start("intro5");
    death.disableBody(true, true); // remove fire
    return false;
  }

  hitfrenchfried(player, death) {
    console.log("frenchfried , goto intro5");
    // this.cameras.main.shake(200);
    this.scene.start("intro5");
    death.disableBody(true, true); // remove fire
    return false;
  }

  hitexit(player, death) {
    console.log("exit , goto intro6");
    // this.cameras.main.shake(200);
    this.scene.start("intro6");
    death.disableBody(true, true); // remove fire
    return false;
  }
}
