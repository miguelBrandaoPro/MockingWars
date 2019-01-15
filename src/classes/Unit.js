export default class Unit {
    constructor(position, config){
        this.position = position;
        this.life = config.life;
        this.moveMax = config.moveMax;
        this.selected = false;
        this._selectable = false;
        this.fight = config.fight
    }

    moveTo(position){
        this.position = position;
    }

    select(){
        this.selected = this.selected?false:true;
    }
    
    selectable(status){
        this._selectable = status;
    }
    
}