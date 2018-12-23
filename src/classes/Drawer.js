import main_sprite from '../images/main_sprite.png';

export default class Drawer {
    constructor(config, armiesCtx, boardCtx, cursorCtx ) {
        this.config = config;
        this._sprite = '';
        this.armiesCtx = armiesCtx;
        this.boardCtx = boardCtx;
        this.cursorCtx = cursorCtx;
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

    sprite(newSprite) {
        this._sprite = newSprite;
    }
    
    draw(ctx, inSpritePosition, objectPosition){
        ctx.drawImage(this._sprite,
                            inSpritePosition.x, inSpritePosition.y,
                            this.config.blockSize, this.config.blockSize,
                            objectPosition.x*this.config.blockSize, objectPosition.y*this.config.blockSize,
                            this.config.blockSize, this.config.blockSize);
    }
    
    drawBlock(configBlockSprite, position){  
        const tmp = configBlockSprite.split('.');
        if(tmp.length == 1){
            this.draw(this.boardCtx, this.config.board[tmp[0]], position);
        }
        else if(tmp.length == 2){
            this.draw(this.boardCtx, this.config.board[tmp[0]][tmp[1]], position);
        }
    }
    
    drawUnit(color, unit){
        this.draw(this.armiesCtx, this.config.armies[color][unit.type], unit.position); 
    }
    
    drawCursor(position){
        this.cursorCtx.clearRect(0, 0, this.cursorCtx.canvas.clientWidth, this.cursorCtx.canvas.clientHeight);
        this.cursorCtx.drawImage(this._sprite,
                                this.config.cursor.position.x, this.config.cursor.position.y,
                                this.config.cursor.size.w, this.config.cursor.size.h,
                                position.x*this.config.blockSize-3, position.y*this.config.blockSize-5,
                                this.config.cursor.size.w, this.config.cursor.size.h,
                                )
        
    }

}