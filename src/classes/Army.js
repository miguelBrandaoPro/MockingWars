import main_sprite from '../images/main_sprite.png';

export default class Army {
    constructor(general, color, units, config, ctx){
        this.general = general;
        this.color = color;
        this.units = units;
        this.configArmies = config.armies;
        this.ctx = ctx;
        this.blockSize = config.blockSize;
        this.main_sprite = '';
    }
    
    draw(){
        this.promiseOfLoadedSprite().then((image) =>{
            this.main_sprite = image;
            for( let unit of this.units ){ 
                console.log(unit.type);
                console.log(this.configArmies[this.color][unit.type]);
                console.log(unit.position);
                console.log(unit.position.x*this.blockSize + ', ' + unit.position.y*this.blockSize);
                this.ctx.drawImage(this.main_sprite, 
                               this.configArmies[this.color][unit.type].x, this.configArmies[this.color][unit.type].y, 
                               this.blockSize, this.blockSize,
                               unit.position.x*this.blockSize, unit.position.y*this.blockSize, 
                               this.blockSize, this.blockSize);
            }
        });
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