import Block_P from '../images/block_p.png';
import Block_M from '../images/block_m.png';

export default class Board{
    constructor(config, ctx){
        this.blockSize = config.blockSize
        this.height = config.height;
        this.width = config.width;
        this.map = config.map;
        this.ctx = ctx;
    }

    draw(){
        for(let i=0; i<this.height; i++){
            for(let j=0; j<this.width; j++) {
                console.log(this.map[i][j]);
                console.log('');
                this.drawBlock( {x:j, y:i}, this.map[i][j]);
            }
        }
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
        const img = new Image();
        img.src = Block_P;
        this.ctx.drawImage(img, position.x*this.blockSize, position.y*this.blockSize, this.blockSize, this.blockSize);
    }

    drawRoadBlock(position){
        this.ctx.fillStyle = 'rgb(10, 10, 10)';
        this.ctx.fillRect(position.x*this.blockSize, position.y*this.blockSize, this.blockSize, this.blockSize);
    }

    drawMountainBlock(position){
        this.ctx.fillStyle = 'rgb(150, 128, 88)';
        const img = new Image();
        img.src = Block_M;
        console.log(img);
        this.ctx.drawImage(img, position.x*this.blockSize, position.y*this.blockSize, this.blockSize, this.blockSize);
        //this.ctx.drawImage(Block_M, position.x*this.blockSize, position.y*this.blockSize, this.blockSize, this.blockSize);
    }
}