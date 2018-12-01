import block_m from '../images/block_m.png';
import block_p from '../images/block_p.png';
import block_r from '../images/block_r.png';

export default class Board{
    constructor(config, ctx){
        this.blockSize = config.blockSize
        this.height = config.height;
        this.width = config.width;
        this.map = config.map;
        this.ctx = ctx;
        this.blocks = config.blocks;
        this.images = [];
    }

    draw(){
        this.promiseOfLoadedImages().then((images) =>{         
            this.images = images;
            console.log(this.images);
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
        this.ctx.fillStyle = 'rgb(0, 160, 0)';
        const img = this.images[this.blocks.indexOf('block_p')];
         this.ctx.drawImage(img, 
                           0, 0, 
                           this.blockSize, this.blockSize,
                            position.x*this.blockSize, position.y*this.blockSize, 
                           this.blockSize, this.blockSize);
    }

    drawRoadBlock(position){
        this.ctx.fillStyle = 'rgb(10, 10, 10)';
        this.ctx.fillRect(position.x*this.blockSize, position.y*this.blockSize, this.blockSize, this.blockSize);
    }

    drawMountainBlock(position){
        this.ctx.fillStyle = 'rgb(150, 128, 88)';
        const img = this.images[this.blocks.indexOf('block_m')];
        this.ctx.drawImage(img, 
                           0, 0, 
                           this.blockSize, this.blockSize,
                            position.x*this.blockSize, position.y*this.blockSize, 
                           this.blockSize, this.blockSize);
        //this.ctx.drawImage(Block_M, position.x*this.blockSize, position.y*this.blockSize, this.blockSize, this.blockSize);
    }
    
    
    promiseOfLoadedImages(){
      // Wait until ALL images are loaded
      return Promise.all(
        this.blocks.map(function (block) {
          // Load each tile, and "resolve" when done
          return new Promise(function (resolve) {
            const img = new Image();
            img.src = block_m;
            img.onload = function () {
              // Image has loaded... resolve the promise!
              resolve(img);
            };
          });
        })
      );
    }
}