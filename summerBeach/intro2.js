class intro2 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'intro2' });
    }

    preload(){

        
        this.load.image("intro2", "assets/intro2.png");
        
    }


    create () {

        console.log("intro2")

        this.add.image(0, 0, 'intro2').setOrigin(0, 0);


        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function(){
            let playerPos={}
            playerPos.x=1020
            playerPos.y=1172
            playerPos.facing="down"
            this.scene.start("intro3", {player : playerPos})
            }, this );

            

    }

}
