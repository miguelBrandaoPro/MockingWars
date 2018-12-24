export default class Game{
    constructor(board, army1, army2, cursor){
        this.board = board;
        this.army1 = army1;
        this.army2 = army2;
        this.selectedArmy = army1;
        this.selectedUnit = null;
        this.cursor = cursor;
        
        this.setAllUnitsSelectable(army1);
    }

    fight(attacker, defender){
        defender.life -= attacker.fight.attack[defender.type];
        attacker.life -= defender.fight.defense[attacker.type];
    }

    selectUnit(position){
        for( let i=0; i<this.selectedArmy.units.length; i++){
            if(
                this.selectedArmy.units[i].position.x == position.x
                && this.selectedArmy.units[i].position.y == position.y
            ){
                if(this.selectedArmy.units[i]._selectable){
                    this.selectedUnit = this.selectedArmy.units[i];
                }
            }
        }
    }
    
    canCursorMoveTo(futurePosition){
        return futurePosition.x >=0 && futurePosition.x<this.board.width
          && futurePosition.y >=0 && futurePosition.y<this.board.height;
    }
    
    changePlayingArmy(){
        if(this.selectedArmy == this.army1){
            this.selectedArmy = this.army2;
        }
        else{
            this.selectedArmy = this.army1;
        }
    }
    
    setAllUnitsSelectable(army){
        for(let unit of army.units){
            unit.selectable(true);
        }
    }
    
    setAllUnitsUnselectable(army){
        for(let unit of army.units){
            unit.selectable(false);
        }
    }
    
}