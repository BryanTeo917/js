class intro1 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'intro1' });
    }

    preload(){

        
        this.load.image("intro1", "assets/intro1.png");
        
    }


    create () {

        console.log("intro1")

        this.add.image(0, 0, 'intro1').setOrigin(0, 0);


        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function(){
            let playerPos={}
            playerPos.x=1020
            playerPos.y=1172
            playerPos.facing="down"
            this.scene.start("intro2", {player : playerPos})
            }, this );

    }

}
