import main_sprite from '../images/main_sprite.png';

export default class Board{
    constructor(config, ctx){
        this.blockSize = config.blockSize
        this.height = config.height;
        this.width = config.width;
        this.map = config.map;
        this.main_sprite = '';
        this.blocks = config.blocks;
        this.ctx = ctx;
    }

    draw(){
        this.promiseOfLoadedSprite().then((image) =>{
            this.main_sprite = image;
            for(let i=0; i<this.height; i++){
                for(let j=0; j<this.width; j++) {
                    this.drawBlock( {x:j, y:i}, this.map[i][j]);
                }
            }
        });
    }

    drawBlock(position, type){
        switch(type){
            case 'M':
                this.drawMountainBlock(position);
                break;
            case 'R':
                this.drawRoadBlock(position);
                break;
            case 'P':
            default:
                this.drawPlainBlock(position);
                break;
        }
    }

    drawPlainBlock(position){
        const block = this.blocks.block_p;
        this.ctx.drawImage(this.main_sprite, 
                           block.x, block.y, 
                           this.blockSize, this.blockSize,
                           position.x*this.blockSize, position.y*this.blockSize, 
                           this.blockSize, this.blockSize);
    }

    drawRoadBlock(position){
        let block = this.blocks.block_r.default;

        //test 4 cases R
        if(this.map[position.y][position.x-1] == 'R'
          && this.map[position.y][position.x+1] == 'R'
           && this.map[position.y-1][position.x] == 'R'
           && this.map[position.y+1][position.x-1] == 'R'
          ){
            block = this.blocks.block_r.crossroad;
        }
        //Tests 3 cases R
        else if(this.map[position.y-1][position.x] == 'R'
               && this.map[position.y+1][position.x] == 'R'
                && this.map[position.y][position.x+1] == 'R'
               ){
            block = this.blocks.block_r.tSection1;
        }
        else if(this.map[position.y-1][position.x] == 'R'
               && this.map[position.y+1][position.x] == 'R'
                && this.map[position.y][position.x-1] == 'R'
               ){
            block = this.blocks.block_r.tSection3;
        }
        else if(this.map[position.y][position.x-1] == 'R'
                && this.map[position.y][position.x+1] == 'R'
                && this.map[position.y+1][position.x] == 'R'
               ){
            block = this.blocks.block_r.tSection2;
        }
        else if(this.map[position.y][position.x-1] == 'R'
                && this.map[position.y][position.x+1] == 'R'
                && this.map[position.y-1][position.x] == 'R'
               ){
            block = this.blocks.block_r.tSection4;
        }
        // Tests 2 cases R
        else if(
            this.map[position.y][position.x+1] == 'R'
           && this.map[position.y+1][position.x] == 'R'
          ){
            block = this.blocks.block_r.rightTurn1;
        }
        else if(
            this.map[position.y][position.x-1] == 'R'
           && this.map[position.y+1][position.x] == 'R'
          ){
            block = this.blocks.block_r.rightTurn2;
        }
        else if(
            this.map[position.y][position.x-1] == 'R'
           && this.map[position.y-1][position.x] == 'R'
          ){
            block = this.blocks.block_r.rightTurn3;
        }
        else if(
            this.map[position.y][position.x+1] == 'R'
           && this.map[position.y-1][position.x] == 'R'
          ){
            block = this.blocks.block_r.rightTurn4;
        }
        else if(this.map[position.y][position.x-1] == 'R'){
            block = this.blocks.block_r.horizontal;
        }
        else if(this.map[position.y-1][position.x] == 'R'){
            block = this.blocks.block_r.vertical;
        }
        this.ctx.drawImage(this.main_sprite, 
                           block.x, block.y, 
                           this.blockSize, this.blockSize,
                           position.x*this.blockSize, position.y*this.blockSize, 
                           this.blockSize, this.blockSize);
    }

    drawMountainBlock(position){
        const block = this.blocks.block_m;
        this.ctx.drawImage(this.main_sprite, 
                           block.x, block.y, 
                           this.blockSize, this.blockSize,
                           position.x*this.blockSize, position.y*this.blockSize, 
                           this.blockSize, this.blockSize);
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
}