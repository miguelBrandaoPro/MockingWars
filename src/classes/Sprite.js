import main_sprite from '../images/main_sprite.png';

export default class Sprite {
    constructor(config, boardCtx, armiesCtx) {
        this.config = config;
        this._src = '';
        this.boardCtx = boardCtx;
        this.armiesCtx = armiesCtx;
    }

    promiseOfLoadedSprite(){
        return new Promise(function (resolve) {
            const img = new Image();
            img.src = main_sprite;
            img.onload = function () {
                // Image has loaded... resolve the promise!
                resolve(img);
            };
        });
    }

    set src(newSrc) {
        this._src = newSrc;
    }

    drawUnit( unit ){
        armiesCtx.drawImage(this._src,
            configBlockSprite.x, configBlockSprite.y,
            this.config.blockSize, this.config.blockSize,
            position.x*this.config.blockSize, position.y*this.config.blockSize,
            this.config.blockSize, this.config.blockSize);
    }

    drawBoardBlock( boardBlock ){

    }



}