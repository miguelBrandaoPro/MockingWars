export default class Cursor {
    constructor(position, drawer){
        this.position = position;
        this.drawer = drawer;
    }

    moveTo(position){
        this.position = position;
    }
    
    draw(){
        this.drawer.drawCursor(this.position);
    }
}