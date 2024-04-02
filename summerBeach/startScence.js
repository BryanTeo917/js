class startScence extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'startScence' });
    }

    preload(){

        
        this.load.image("startScence", "assets/intro9.png");
        this.load.audio("island", "assets/island.mp3");
        
    }


    create () {

        console.log("startScence")

        window.island= this.sound.add("island", {loop:true}).setVolume(0.1)
       window.island.play();

        this.add.image(0, 0, 'startScence').setOrigin(0, 0);


        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function(){
            let playerPos={}
            playerPos.x=1020
            playerPos.y=1172
            playerPos.facing="down"
            this.scene.start("intro9", {player : playerPos})
            }, this );

            this.island = this.sound.add("island",{loop: true}).setVolume(0.2);
            this.island.play();

    }

}
