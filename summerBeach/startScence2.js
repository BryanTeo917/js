class startScence2 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'startScence2' });
    }

    preload(){

        
        this.load.image("startScence2", "assets/startScence.png");
        
    }


    create () {

        console.log("startScence2")


        this.add.image(0, 0, 'startScence2').setOrigin(0, 0);


        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function(){
            let playerPos={}
            playerPos.x=1020
            playerPos.y=1172
            playerPos.facing="down"
            this.scene.start("intro1", {player : playerPos})
            }, this );


    }

}
