class intro4 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'intro4' });
    }

    preload(){

        
        this.load.image("intro4", "assets/intro4.png");
        
    }


    create () {

        console.log("intro4")

        this.add.image(0, 0, 'intro4').setOrigin(0, 0);


        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function(){
            let playerPos={}
            playerPos.x=1020
            playerPos.y=1172
            playerPos.facing="down"
            this.scene.start("intro7", {player : playerPos})
        }, this );

            

    }

}
