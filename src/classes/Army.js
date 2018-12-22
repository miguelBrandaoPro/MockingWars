export default class Army {
    constructor(general, color, units, drawer){
        this.general = general;
        this.color = color;
        this.units = units;
        this.drawer = drawer;
    }
    
    draw(){
        for( let unit of this.units ){
            this.drawer.drawUnit(this.color, unit);
        }
    }
}