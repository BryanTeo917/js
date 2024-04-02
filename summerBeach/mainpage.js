class mainpage extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'mainpage' });
    }

    preload(){

        
        this.load.image("mainpage", "assets/mainpage.png");
        
    }


    create () {

        console.log("mainpage")

        this.add.image(0, 0, 'mainpage').setOrigin(0, 0);


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
