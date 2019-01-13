export default class Army {
  constructor(general, color, units, drawer) {
   this.general = general;
   this.color = color;
   this.units = units;
   this.drawer = drawer;
  }

  draw() {
    for (let unit of this.units) {
      if (unit.life > 0) {
        this.drawer.drawUnit(this.color, unit);
      }
    }
  }

  removeDeadUnits() {
    for (let i = 0; i < this.units.length; i++) {
      if (unit.life <= 0) {
        delete( this.units[i] );
      }
    }  
  }
}