export default class Game{
  constructor(board, army1, army2, cursor) {
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

  fight(attacker, defender) {
    defender.life -= attacker.fight.attack[defender.type];
    attacker.life -= defender.fight.defense[attacker.type];
    attacker.selectable(false);
  }

  selectUnit(position) {
    let color, unit;
    [color, unit] = this.getUnitByPosition(position);
    if (unit != null && unit._selectable) {
      this.selectedUnit = unit;
    }
  }
  
  canCursorMoveTo(futurePosition) {
    return futurePosition.x >=0 && futurePosition.x<this.board.width
      && futurePosition.y >=0 && futurePosition.y<this.board.height;
  }
  
  changePlayingArmy() {
    if (this.selectedArmy == this.army1) {
      this.setAllUnitsUnselectable(this.army1);
      this.selectedArmy = this.army2;
      this.setAllUnitsSelectable(this.army2);    
    }
    else {
      this.setAllUnitsUnselectable(this.army2);
      this.selectedArmy = this.army1;
      this.setAllUnitsSelectable(this.army1);
    }
  }
  
  setAllUnitsSelectable(army) {
    for (let unit of army.units) {
      unit.selectable(true);
    }
  }
  
  setAllUnitsUnselectable(army) {
    for (let unit of army.units) {
      unit.selectable(false);
    }
  }
  
  getUnitByPosition(position) {
    for (let army of [this.army1, this.army2]) {
      for (let i=0; i<army.units.length; i++) {
    if (
      army.units[i].position.x == position.x
      && army.units[i].position.y == position.y
       ) {
      return [army.color,army.units[i]];
    }
      }
    }  
    return ['', null]; 
  }
  
  loadPossibleTargets() {
    const positions = [];
    let color, possibleTarget;
    if (this.selectedUnit != null) {
      for (let add of [[-1, 0], [0, -1], [1, 0], [0, 1]]) {
    if (this.selectedUnit.position.x+add[0] >= 0
       && this.selectedUnit.position.x+add[0] <= this.board.width
       && this.selectedUnit.position.y+add[1] >= 0
       && this.selectedUnit.position.y+add[1] <= this.board.height) {
      [color, possibleTarget] = this.getUnitByPosition({ x: this.selectedUnit.position.x+add[0], 
                                 y: this.selectedUnit.position.y+add[1] });
      if (possibleTarget != null && color != this.selectedUnit.color) {
        positions.push(possibleTarget.position);
      } 
    }      
      }  
    }
    this.possibleTargets = positions;
  }
  
  getOtherTargetPosition(mode = 'clockwise') {
    if (this.possibleTargets.length > 0) {
      this.changePossibleTargets(mode);
      return this.possibleTargets[0];
    }
    return null;
  }
  
  changePossibleTargets(mode = 'clockwise') {
    if ('clockwise' == mode) {
      this.possibleTargets.push(this.possibleTargets.shift());
    }
    else {
      this.possibleTargets.unshift(this.possibleTargets.pop());
    }
  }

  cleanArmies() {
    this.army1.removeDeadUnits();
    this.army2.removeDeadUnits();
  }
    
  selectedUnitCanMoveTo(){
    const positions = [];
    const minX = this.selectedUnit.position.x - this.selectedUnit.moveMax;
    const minY = this.selectedUnit.position.y - this.selectedUnit.moveMax;
    const maxX = this.selectedUnit.position.x + this.selectedUnit.moveMax;
    const maxY = this.selectedUnit.position.y + this.selectedUnit.moveMax;

    //Boucle du plus petit X au plus grand possible pour l'unité
    for (let iX = Math.max(minX, 0);
        iX <= Math.min(maxX, this.board.width);
        iX++) {

        //On ajoute la position iX, y courant de l'unité
        if (iX != this.selectedUnit.position.x 
            && this.getUnitByPosition({x:iX, y:this.selectedUnit.position.y})[1] == null) {
          positions.push({x:iX, y:this.selectedUnit.position.y});
        }

        const movesLeft = this.selectedUnit.moveMax - (Math.abs(this.selectedUnit.position.x - iX));

        //si on n'utilise pas tous les mouvements possibles pour aller à ce X on peut bouger sur Y
        if (iX > minX) {
          //Du y - mouvement restant au y + mouvement restant
          for (let iY = Math.max( this.selectedUnit.position.y - movesLeft, 0);
              iY <= Math.min(this.selectedUnit.position.y + movesLeft, this.board.height);
              iY++) {
              //Si iY = y courant de l'Unité on n'ajoute pas au tableau, déjà fait.
              if (iY == this.selectedUnit.position.y) {
                continue;
              }
              else if(this.getUnitByPosition({x:iX, y:iY})[1] == null) {
                positions.push({x:iX, y:iY});
              }
          }
        }
    }

    return positions;
  }
   
}

