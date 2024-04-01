class intro7 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'intro7' });
    }

    preload(){

        
        this.load.image("intro7", "assets/intro7.png");
        
    }


    create () {

        console.log("intro7")

        this.add.image(0, 0, 'intro7').setOrigin(0, 0);


        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function(){
            let playerPos={}
            playerPos.x=1020
            playerPos.y=1172
            playerPos.facing="down"
            this.scene.start("summerBeachMap", {player : playerPos})
            }, this );

            

    }

}
