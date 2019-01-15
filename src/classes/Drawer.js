import main_sprite from '../images/main_sprite.png';

export default class Drawer {
    constructor(config, armiesCtx, boardCtx, movesCtx, cursorCtx ) {
        this.config = config;
        this._sprite = '';
        this.armiesCtx = armiesCtx;
        this.boardCtx = boardCtx;
        this.movesCtx = movesCtx;
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
        
        //Si les points de vie inférieur au max on le dessine
        if(unit.life < 10){
            this.armiesCtx.beginPath();
            this.armiesCtx.arc(unit.position.x*this.config.blockSize+18, unit.position.y*this.config.blockSize+6, 6, 0, 2 * Math.PI, false);
            this.armiesCtx.fillStyle = 'white';
            this.armiesCtx.fill();
            this.armiesCtx.lineWidth = 1;
            this.armiesCtx.strokeStyle = 'black';
            this.armiesCtx.stroke();
            this.armiesCtx.fillStyle = 'black';
            this.armiesCtx.font = "11px Arial";
            this.armiesCtx.fillText(unit.life, unit.position.x*this.config.blockSize+15, unit.position.y*this.config.blockSize+10);
        }
        
        if (!unit._selectable){
            this.movesCtx.fillStyle = 'rgba(50, 50, 50, 0.3)';
            this.movesCtx.fillRect(unit.position.x*this.config.blockSize, unit.position.y*this.config.blockSize,
                         this.config.blockSize, this.config.blockSize);  
        }
    }
    
    drawCursor(position){
        this.cleanCursorCtx();
        this.cursorCtx.drawImage(this._sprite,
                                this.config.cursor.position.x, this.config.cursor.position.y,
                                this.config.cursor.size.w, this.config.cursor.size.h,
                                position.x*this.config.blockSize-3, position.y*this.config.blockSize-5,
                                this.config.cursor.size.w, this.config.cursor.size.h,
                                )
    }
    
    drawPossibleUnitMoves(positions){
        for(let position of positions){
            this.movesCtx.fillStyle = 'rgba(225,0,0,0.3)';
            this.movesCtx.fillRect(position.x*this.config.blockSize, position.y*this.config.blockSize,
                         this.config.blockSize, this.config.blockSize);
        }
    }
    
    drawPossibleTargets(positions){
        for(let position of positions){
            this.movesCtx.fillStyle = 'rgba(225,0,0,0.3)';
            this.movesCtx.fillRect(position.x*this.config.blockSize, position.y*this.config.blockSize,
                         this.config.blockSize, this.config.blockSize);
        }
    }
    
    
    cleanCtx(ctx){
        ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
    }
    
    cleanCursorCtx(){
        this.cleanCtx(this.cursorCtx);
    }
    
    cleanArmiesCtx(){
        this.cleanCtx(this.armiesCtx);
    }
    
    cleanMovesCtx(){
        this.cleanCtx(this.movesCtx);
    }

}