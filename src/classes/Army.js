export default class Army {
    constructor(general, color, units, config, ctx, sprite){
        this.general = general;
        this.color = color;
        this.units = units;
        this.config = config;
        this.ctx = ctx;
        this.blockSize = config.blockSize;
        this.sprite = sprite;
    }
    
    draw(){
        for( let unit of this.units ){
            this.ctx.drawImage(this.sprite,
                           this.config[this.color][unit.type].x, this.config[this.color][unit.type].y,
                           this.blockSize, this.blockSize,
                           unit.position.x*this.blockSize, unit.position.y*this.blockSize,
                           this.blockSize, this.blockSize);
        }
    }
}