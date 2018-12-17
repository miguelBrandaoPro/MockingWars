export default class Board{
    constructor(config, ctx, sprite){
        this.blockSize = config.blockSize
        this.height = config.height;
        this.width = config.width;
        this.map = config.map;
        this.sprite = sprite;
        this.blocks = config.blocks;
        this.ctx = ctx;
    }

    draw(){
        for(let i=0; i<this.height; i++){
            for(let j=0; j<this.width; j++) {
                switch(this.map[i][j]){
                    case 'M':
                        this.drawMountainBlock({x:j, y:i});
                        break;
                    case 'R':
                        this.drawRoadBlock({x:j, y:i});
                        break;
                    case 'P':
                    default:
                        this.drawPlainBlock({x:j, y:i});
                        break;

                }
            }
        }
    }

    drawPlainBlock(position){
        const configBlockSprite = this.blocks.block_p;
        this.drawBlock(configBlockSprite, position);
    }

    drawMountainBlock(position){
        const configBlockSprite = this.blocks.block_m;
        this.drawBlock(configBlockSprite, position);
    }

    drawRoadBlock(position){
        let configBlockSprite = this.blocks.block_r.default;

        //test 4 cases R
        if(this.map[position.y][position.x-1] == 'R'
          && this.map[position.y][position.x+1] == 'R'
           && this.map[position.y-1][position.x] == 'R'
           && this.map[position.y+1][position.x-1] == 'R'
          ){
            configBlockSprite = this.blocks.block_r.crossroad;
        }
        //Tests 3 cases R
        else if(this.map[position.y-1][position.x] == 'R'
               && this.map[position.y+1][position.x] == 'R'
               ){
            if(this.map[position.y][position.x+1] == 'R'){
                configBlockSprite = this.blocks.block_r.tSection1;
            }
            else if (this.map[position.y][position.x-1] == 'R'){
                configBlockSprite = this.blocks.block_r.tSection3;
            }
        }
        else if(this.map[position.y][position.x-1] == 'R'
                && this.map[position.y][position.x+1] == 'R'
               ){
            if(this.map[position.y+1][position.x] == 'R'){
                configBlockSprite = this.blocks.block_r.tSection2;
            }
            else if(this.map[position.y-1][position.x] == 'R'){
                configBlockSprite = this.blocks.block_r.tSection4;
            }
        }
        // Tests 2 cases R
        else if( this.map[position.y+1][position.x] == 'R' ){
            if( this.map[position.y][position.x+1] == 'R' ) {
                configBlockSprite = this.blocks.block_r.rightTurn1;
            }
            else if( this.map[position.y][position.x-1] == 'R' ){
                configBlockSprite = this.blocks.block_r.rightTurn2;
            }
        }
        else if( this.map[position.y-1][position.x] == 'R' ){
            if(this.map[position.y][position.x-1] == 'R'){
                configBlockSprite = this.blocks.block_r.rightTurn3;
            }
            else if( this.map[position.y][position.x+1] == 'R' ){
                configBlockSprite = this.blocks.block_r.rightTurn4;
            }
        }
        // Tests 1 case R
        else if(this.map[position.y][position.x-1] == 'R'){
            configBlockSprite = this.blocks.block_r.horizontal;
        }
        else if(this.map[position.y-1][position.x] == 'R'){
            configBlockSprite = this.blocks.block_r.vertical;
        }

        this.drawBlock(configBlockSprite, position);
    }

    drawBlock(configBlockSprite, position){
        this.ctx.drawImage(this.sprite,
                            configBlockSprite.x, configBlockSprite.y,
                            this.blockSize, this.blockSize,
                            position.x*this.blockSize, position.y*this.blockSize,
                            this.blockSize, this.blockSize);
    }

}