class intro9 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'intro9' });
    }

    preload(){

        
        this.load.image("intro9", "assets/intro9.png");
        
    }


    create () {

        console.log("intro9")

        this.add.image(0, 0, 'intro9').setOrigin(0, 0);


        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function(){
            let playerPos={}
            playerPos.x=1020
            playerPos.y=1172
            playerPos.facing="down"
            this.scene.start("startScene", {player : playerPos})
            }, this );

    }

}
