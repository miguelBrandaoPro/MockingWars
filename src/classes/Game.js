export default class Game{
    constructor(board, army1, army2, cursor){
        this.board = board;
        this.army1 = army1;
        this.army2 = army2;
        this.selectedArmy = army1;
        this.selectedUnit = null;
        this.cursor = cursor;
        this.mode = 'chooseUnit';
        
        this.setAllUnitsSelectable(army1);
        this.possibleTargets = [];
    }

    fight(attacker, defender){
        defender.life -= attacker.fight.attack[defender.type];
        attacker.life -= defender.fight.defense[attacker.type];
    }

    selectUnit(position){
        let color, unit;
        [color, unit] = this.getUnitByPosition(position);
        if( unit != null && unit._selectable ){
            this.selectedUnit = unit;
        }
    }
    
    canCursorMoveTo(futurePosition){
        return futurePosition.x >=0 && futurePosition.x<this.board.width
          && futurePosition.y >=0 && futurePosition.y<this.board.height;
    }
    
    changePlayingArmy(){
        if(this.selectedArmy == this.army1){
            this.setAllUnitsUnselectable(this.army1);
            this.selectedArmy = this.army2;
            this.setAllUnitsSelectable(this.army2);
            
        }
        else{
            this.setAllUnitsUnselectable(this.army2);
            this.selectedArmy = this.army1;
            this.setAllUnitsSelectable(this.army1);
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
    
    getUnitByPosition(position){
      for( let army of [this.army1, this.army2] ){
          for( let i=0; i<army.units.length; i++){
                if(
                    army.units[i].position.x == position.x
                    && army.units[i].position.y == position.y
                ){
                    return [army.color,army.units[i]];
                }
            }
        }  
        return ['', null]; 
    }
    
    loadPossibleTargets(){
        console.log('call load possible targets');
        const positions = [];
        let color, possibleTarget;
        if( this.selectedUnit != null ){
            if( this.selectedUnit.position.x-1 >= 0 ){
                [color, possibleTarget] = this.getUnitByPosition({x: this.selectedUnit.position.x-1, y: this.selectedUnit.position.y });
                if( possibleTarget != null && color != this.selectedUnit.color ){
                    positions.push( possibleTarget.position );
                } 
            }
            if( this.selectedUnit.position.x+1 <= this.board.width ){
                [color, possibleTarget] = this.getUnitByPosition({x: this.selectedUnit.position.x+1, y: this.selectedUnit.position.y });
                if( possibleTarget != null && color != this.selectedUnit.color ){
                    positions.push( possibleTarget.position );
                } 
            }
            if( this.selectedUnit.position.y-1 >= 0 ){
                [color, possibleTarget] = this.getUnitByPosition({x: this.selectedUnit.position.x, y: this.selectedUnit.position.y-1 });
                if( possibleTarget != null && color != this.selectedUnit.color ){
                    positions.push( possibleTarget.position );
                } 
            }
            if( this.selectedUnit.position.y+1 <= this.board.height ){
                [color, possibleTarget] = this.getUnitByPosition({x: this.selectedUnit.position.x, y: this.selectedUnit.position.y+1 });
                if( possibleTarget != null && color != this.selectedUnit.color ){
                    positions.push( possibleTarget.position );
                } 
            }  
        }
        this.possibleTargets = positions;
    }
    
}

