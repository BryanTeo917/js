class preloadScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'preloadScene' });
    }

    preload(){

        this.load.audio("bgmusic", "assets/bgmusic.mp3");
    }


    create () {

        console.log("preloadScene")
        this.add.text(10,500, 'Animation labs, press spacebar to continue', 
            { font: '24px Courier', fill: '#ffffff' });

        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function(){
            let playerPos={}
            playerPos.x=1020
            playerPos.y=1172
            playerPos.facing="down"
            this.scene.start("summerBeachMap", {player : playerPos})
            }, this );

            this.bgmusic = this.sound.add("bgmusic",{loop: true}).setVolume(0.2);
            this.bgmusic.play();

    }

}
