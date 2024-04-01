class intro3 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'intro3' });
    }

    preload(){

        
        this.load.image("intro3", "assets/intro3.png");
        
    }


    create () {

        console.log("intro3")

        this.add.image(0, 0, 'intro3').setOrigin(0, 0);


        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function(){
            let playerPos={}
            playerPos.x=1020
            playerPos.y=1172
            playerPos.facing="down"
            this.scene.start("intro4", {player : playerPos})
            }, this );

            

    }

}
