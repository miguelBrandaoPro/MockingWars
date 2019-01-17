/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f939e36fa877055a95f8987a7b7ba59b.png";

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/config/map1.js
const configMap ={
    width:20,
    height:20,
    map: [
        ['M', 'P', 'P', 'P', 'P', 'P', 'M', 'M', 'M', 'M', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'M', 'P', 'P', 'P', 'P', 'M', 'M'],
        ['P', 'P', 'P', 'P', 'P', 'P', 'M', 'M', 'M', 'M', 'M', 'P', 'P', 'P', 'P', 'P', 'M', 'M', 'M', 'R', 'R', 'R', 'R', 'M'],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'M', 'M', 'M', 'P', 'P', 'P', 'P', 'P', 'M', 'M', 'M', 'R', 'P', 'P', 'P', 'P'],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'M', 'M', 'M', 'P', 'P', 'P', 'P', 'P', 'M', 'M', 'M', 'R', 'P', 'P', 'P', 'P'],
        ['P', 'P', 'P', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'P', 'P', 'P', 'P', 'P', 'M', 'M', 'P', 'R', 'P', 'P', 'P', 'P'],
        ['P', 'P', 'P', 'R', 'P', 'P', 'P', 'M', 'M', 'M', 'R', 'R', 'P', 'P', 'P', 'P', 'M', 'M', 'P', 'R', 'P', 'P', 'P', 'P'],
        ['P', 'P', 'P', 'R', 'P', 'P', 'P', 'M', 'M', 'M', 'M', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'P', 'P', 'P', 'P'],
        ['P', 'P', 'P', 'R', 'P', 'P', 'M', 'M', 'M', 'M', 'M', 'P', 'P', 'P', 'P', 'P', 'M', 'M', 'P', 'R', 'P', 'P', 'P', 'P'],
        ['P', 'P', 'P', 'R', 'P', 'P', 'M', 'M', 'M', 'M', 'M', 'P', 'P', 'P', 'P', 'M', 'M', 'M', 'M', 'R', 'P', 'P', 'P', 'P'],
        ['P', 'P', 'P', 'R', 'P', 'M', 'M', 'M', 'M', 'M', 'P', 'P', 'P', 'P', 'P', 'M', 'M', 'M', 'M', 'R', 'P', 'P', 'P', 'P'],
        ['P', 'P', 'P', 'R', 'P', 'M', 'M', 'M', 'M', 'M', 'P', 'P', 'P', 'P', 'P', 'M', 'M', 'M', 'M', 'R', 'P', 'P', 'P', 'P'],
        ['P', 'P', 'P', 'R', 'P', 'M', 'M', 'M', 'M', 'M', 'P', 'P', 'P', 'P', 'P', 'P', 'M', 'M', 'P', 'R', 'P', 'P', 'P', 'P'],
        ['P', 'P', 'P', 'R', 'P', 'P', 'M', 'M', 'M', 'M', 'M', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'R', 'P', 'P', 'P', 'P'],
        ['P', 'P', 'P', 'R', 'P', 'P', 'M', 'M', 'M', 'M', 'M', 'P', 'P', 'P', 'P', 'P', 'M', 'M', 'P', 'R', 'P', 'P', 'P', 'P'],
        ['P', 'P', 'P', 'R', 'P', 'P', 'M', 'M', 'M', 'M', 'M', 'P', 'P', 'P', 'P', 'M', 'M', 'M', 'M', 'R', 'P', 'P', 'P', 'P'],
        ['P', 'P', 'P', 'R', 'P', 'P', 'M', 'M', 'M', 'M', 'P', 'P', 'P', 'P', 'P', 'M', 'M', 'M', 'M', 'R', 'P', 'P', 'P', 'P'],
        ['P', 'P', 'P', 'R', 'P', 'P', 'M', 'M', 'M', 'M', 'P', 'P', 'P', 'P', 'P', 'P', 'M', 'M', 'P', 'R', 'P', 'P', 'P', 'P'],
        ['P', 'R', 'R', 'R', 'P', 'P', 'P', 'M', 'M', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'M', 'M', 'P', 'R', 'P', 'P', 'P', 'P'],
        ['M', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'P', 'P', 'P', 'P'],
        ['M', 'M', 'P', 'P', 'P', 'P', 'M', 'M', 'M', 'M', 'P', 'P', 'P', 'P', 'P', 'P', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'P']
    ]
};

/* harmony default export */ var map1 = (configMap);
// CONCATENATED MODULE: ./src/config/armies.js
const configArmies ={
    'Red' : {
        'Infantry': {x: 374, y: 9},
        'Bazooka': {x: 399, y: 9},
        'Tank': {x: 482, y: 9}
    },
    'Blue' : {
        'Infantry': {x: 374, y: 36},
        'Bazooka': {x: 399, y: 36},
        'Tank': {x: 482, y: 36}
    }
};

/* harmony default export */ var armies = (configArmies);
// CONCATENATED MODULE: ./src/config/sprite.js
const configSprite={
    blockSize:24,
    board: {
        'block_m' : {x: 377, y: 165},
        'block_p' : {x: 377, y: 224},
        'block_r' : {
            default:    {x: 900, y: 170},
            vertical:   {x: 900, y: 220},
            horizontal: {x: 900, y: 195},
            crossroad:  {x: 952, y: 195},
            rightTurn1: {x: 927, y: 170},
            rightTurn2: {x: 978, y: 170},
            rightTurn3: {x: 978, y: 220},
            rightTurn4: {x: 927, y: 220},
            tSection1:  {x: 927, y: 195},
            tSection2:  {x: 952, y: 170},
            tSection3:  {x: 978, y: 195},
            tSection4:  {x: 952, y: 220},
        }
    },
    armies : {
        'Red' : {
            'Infantry': {x: 374, y: 9},
            'Bazooka': {x: 399, y: 9},
            'Tank': {x: 482, y: 9}
        },
        'Blue' : {
            'Infantry': {x: 374, y: 36},
            'Bazooka': {x: 399, y: 36},
            'Tank': {x: 482, y: 36}
        }
    },
    cursor : {
        position : {x:104, y:369},
        size : {w:43, h:48}
    }
};
/* harmony default export */ var sprite = (configSprite);
// CONCATENATED MODULE: ./src/classes/Unit.js
class Unit {
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
// CONCATENATED MODULE: ./src/classes/Bazooka.js


class Bazooka_Bazooka extends Unit{

    constructor(position, config){
        super(position, config);
        this.type = 'Bazooka';
    }

}
// CONCATENATED MODULE: ./src/classes/Infantry.js


class Infantry_Infantry extends Unit{

    constructor(position, config){
        super(position, config);
        this.type = 'Infantry';
    }

}
// CONCATENATED MODULE: ./src/classes/Tank.js


class Tank_Tank extends Unit{
    constructor(position, config){
        super(position, config);
        this.type = 'Tank';
    }

}
// CONCATENATED MODULE: ./src/classes/Army.js
class Army {
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
// CONCATENATED MODULE: ./src/classes/Cursor.js
class Cursor {
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
// CONCATENATED MODULE: ./src/classes/Board.js
class Board{
    constructor(config, drawer){
        this.height = config.height;
        this.width = config.width;
        this.map = config.map;
        this.drawer = drawer;
    }

    draw(){
        for(let i=0; i<this.height; i++){
            for(let j=0; j<this.width; j++) {
                switch(this.map[i][j]){
                    case 'M':
                        this.drawer.drawBlock('block_m', {x:j, y:i});
                        break;
                    case 'R':
                        this.drawer.drawBlock('block_r.'+this.getRoadBlockConfig({x:j, y:i}), {x:j, y:i});
                        break;
                    case 'P':
                    default:
                        this.drawer.drawBlock('block_p', {x:j, y:i});
                        break;

                }
            }
        }
    }


    getRoadBlockConfig(position){
        
        //test 4 cases R
        if(this.map[position.y][position.x-1] == 'R'
          && this.map[position.y][position.x+1] == 'R'
           && this.map[position.y-1][position.x] == 'R'
           && this.map[position.y+1][position.x-1] == 'R'
          ){
            return 'crossroad';
        }
        //Tests 3 cases R
        else if(this.map[position.y-1][position.x] == 'R'
               && this.map[position.y+1][position.x] == 'R'
               ){
            if(this.map[position.y][position.x+1] == 'R'){
                return 'tSection1';
            }
            else if (this.map[position.y][position.x-1] == 'R'){
                return 'tSection3';
            }
            else{
                return 'vertical';
            }
        }
        else if(this.map[position.y][position.x-1] == 'R'
                && this.map[position.y][position.x+1] == 'R'
               ){
            if(this.map[position.y+1][position.x] == 'R'){
                return 'tSection2';
            }
            else if(this.map[position.y-1][position.x] == 'R'){
                return 'tSection4';
            }
            else{
                return 'horizontal';  
            }
        }
        // Tests 2 cases R
        else if( this.map[position.y+1][position.x] == 'R' ){
            if( this.map[position.y][position.x+1] == 'R' ) {
                return 'rightTurn1';
            }
            else if( this.map[position.y][position.x-1] == 'R' ){
                return 'rightTurn2';
            }
        }
        else if( this.map[position.y-1][position.x] == 'R' ){
            if(this.map[position.y][position.x-1] == 'R'){
                return 'rightTurn3';
            }
            else if( this.map[position.y][position.x+1] == 'R' ){
                return 'rightTurn4';
            }
        }
        return 'default';
    }



}
// CONCATENATED MODULE: ./src/classes/Game.js
class Game{
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
    if (null != this.selectedUnit) {
      for (let add of [[-1, 0], [0, -1], [1, 0], [0, 1]]) {
        if (this.selectedUnit.position.x+add[0] >= 0
            && this.selectedUnit.position.x+add[0] <= this.board.width
            && this.selectedUnit.position.y+add[1] >= 0
            && this.selectedUnit.position.y+add[1] <= this.board.height) {
          [color, possibleTarget] = this.getUnitByPosition({ x: this.selectedUnit.position.x+add[0], 
                                                             y: this.selectedUnit.position.y+add[1] });
        
          if (null != possibleTarget && color != this.selectedArmy.color) {
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
              else if (this.getUnitByPosition({x:iX, y:iY})[1] == null) {
                positions.push({x:iX, y:iY});
              }
          }
        }
    }

    return positions;
  }
   
}


// EXTERNAL MODULE: ./src/images/main_sprite.png
var main_sprite = __webpack_require__(0);
var main_sprite_default = /*#__PURE__*/__webpack_require__.n(main_sprite);

// CONCATENATED MODULE: ./src/classes/Drawer.js


class Drawer_Drawer {
    constructor(config, armiesCtx, boardCtx, movesCtx, cursorCtx ) {
        this.config = config;
        this._sprite = '';
        this.armiesCtx = armiesCtx;
        this.boardCtx = boardCtx;
        this.movesCtx = movesCtx;
        this.cursorCtx = cursorCtx;
    }

    promiseOfLoadedSprite(){
        return new Promise(function (resolve) {
            const img = new Image();
            img.src = main_sprite_default.a;
            img.onload = function () {
                // Image has loaded... resolve the promise!
                resolve(img);
            };
        });
    }

    sprite(newSprite) {
        this._sprite = newSprite;
    }
    
    draw(ctx, inSpritePosition, objectPosition){
        ctx.drawImage(this._sprite,
                            inSpritePosition.x, inSpritePosition.y,
                            this.config.blockSize, this.config.blockSize,
                            objectPosition.x*this.config.blockSize, objectPosition.y*this.config.blockSize,
                            this.config.blockSize, this.config.blockSize);
    }
    
    drawBlock(configBlockSprite, position){  
        const tmp = configBlockSprite.split('.');
        if(tmp.length == 1){
            this.draw(this.boardCtx, this.config.board[tmp[0]], position);
        }
        else if(tmp.length == 2){
            this.draw(this.boardCtx, this.config.board[tmp[0]][tmp[1]], position);
        }
    }
    
    drawUnit(color, unit){
        this.draw(this.armiesCtx, this.config.armies[color][unit.type], unit.position);
        
        //Si les points de vie inférieur au max on le dessine
        if(unit.life < 10){
            this.armiesCtx.beginPath();
            this.armiesCtx.arc(unit.position.x*this.config.blockSize+18, unit.position.y*this.config.blockSize+6, 6, 0, 2 * Math.PI, false);
            this.armiesCtx.fillStyle = 'white';
            this.armiesCtx.fill();
            this.armiesCtx.lineWidth = 1;
            this.armiesCtx.strokeStyle = 'black';
            this.armiesCtx.stroke();
            this.armiesCtx.fillStyle = 'black';
            this.armiesCtx.font = "11px Arial";
            this.armiesCtx.fillText(unit.life, unit.position.x*this.config.blockSize+15, unit.position.y*this.config.blockSize+10);
        }
        
        if (!unit._selectable){
            this.movesCtx.fillStyle = 'rgba(50, 50, 50, 0.3)';
            this.movesCtx.fillRect(unit.position.x*this.config.blockSize, unit.position.y*this.config.blockSize,
                         this.config.blockSize, this.config.blockSize);  
        }
    }
    
    drawCursor(position){
        this.cleanCursorCtx();
        this.cursorCtx.drawImage(this._sprite,
                                this.config.cursor.position.x, this.config.cursor.position.y,
                                this.config.cursor.size.w, this.config.cursor.size.h,
                                position.x*this.config.blockSize-3, position.y*this.config.blockSize-5,
                                this.config.cursor.size.w, this.config.cursor.size.h,
                                )
    }
    
    drawPossibleUnitMoves(positions){
        for(let position of positions){
            this.movesCtx.fillStyle = 'rgba(225,0,0,0.3)';
            this.movesCtx.fillRect(position.x*this.config.blockSize, position.y*this.config.blockSize,
                         this.config.blockSize, this.config.blockSize);
        }
    }
    
    drawPossibleTargets(positions){
        for(let position of positions){
            this.movesCtx.fillStyle = 'rgba(225,0,0,0.3)';
            this.movesCtx.fillRect(position.x*this.config.blockSize, position.y*this.config.blockSize,
                         this.config.blockSize, this.config.blockSize);
        }
    }
    
    
    cleanCtx(ctx){
        ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
    }
    
    cleanCursorCtx(){
        this.cleanCtx(this.cursorCtx);
    }
    
    cleanArmiesCtx(){
        this.cleanCtx(this.armiesCtx);
    }
    
    cleanMovesCtx(){
        this.cleanCtx(this.movesCtx);
    }

}
// CONCATENATED MODULE: ./src/classes/MessageManager.js
class MessageManager {
    
  constructor(element) {
    this.element = element;
  }
    
  cleanMessage(){
    this.element.textContent = '';
  }
    
  add(message){
    let p = document.createElement("p");
    p.textContent = message; 
    this.element.append(message);
  }
    
  replace(message){
    this.cleanMessage();
    this.add(message);   
  }
    
}
// CONCATENATED MODULE: ./src/index.js




















const configTank = {
    life: 10,
    moveMax: 7,
    fight: {
        attack:{
            'Tank': 5,
            'Infantry': 8,
            'Bazooka': 6,
        },
        defense:{
            'Tank': 2,
            'Infantry': 5,
            'Bazooka': 1,
        },
    }
};

const configInfantry = {
    life: 10,
    moveMax: 4,
    fight: {
        attack:{
            'Tank': 2,
            'Infantry': 7,
            'Bazooka': 8,
        },
        defense:{
            'Tank': 0,
            'Infantry': 3,
            'Bazooka': 2
        },
    }
};

const configBazooka = {
    life: 10,
    moveMax: 3,
    fight: {
        attack:{
            'Tank': 6,
            'Infantry': 7,
            'Bazooka': 7,
        },
        defense:{
            'Tank': 3,
            'Infantry': 2,
            'Bazooka': 3
        },
    }
};

window.onload = () => {

    //Canvases
    //Board Canvas
    const boardCanvas = document.getElementById("board-layer");
    const boardCtx = boardCanvas.getContext("2d");

    //Armies Canvas
    const armiesCanvas = document.getElementById("armies-layer");
    const armiesCtx = armiesCanvas.getContext("2d");
    
    //Cursor Canvas
    const cursorCanvas = document.getElementById("cursor-layer");
    const cursorCtx = cursorCanvas.getContext("2d");
    
    //Moves Canvas
    const movesCanvas = document.getElementById("moves-layer");
    const movesCtx = movesCanvas.getContext("2d");

    const drawer = new Drawer_Drawer(sprite, armiesCtx, boardCtx, movesCtx, cursorCtx );
    const board = new Board(map1, drawer);
    const cursor = new Cursor({x:board.width/2, y:board.height/2}, drawer);
    
    const messageManager = new MessageManager(document.querySelector('#message'));
    
    messageManager.add('Choisissez une unité.');

    const army1 = new Army('Bob', 'Blue', [
        new Tank_Tank({x:18, y:0}, configTank),
        new Tank_Tank({x:19, y:0}, configTank),
        new Infantry_Infantry({x:10, y:10}, configInfantry),
        new Infantry_Infantry({x:18, y:2}, configInfantry),
        new Bazooka_Bazooka({x:19, y:1}, configBazooka),
        new Bazooka_Bazooka({x:19, y:2}, configBazooka),
    ], drawer);

    const army2 = new Army('Bill', 'Red', [
        new Tank_Tank({x:0, y:18}, configTank),
        new Tank_Tank({x:0, y:19}, configTank),
        new Infantry_Infantry({x:10, y:12}, configInfantry),
        new Infantry_Infantry({x:12, y:12}, configInfantry),
        new Bazooka_Bazooka({x:11, y:11}, configBazooka),
        new Bazooka_Bazooka({x:11, y:13}, configBazooka),
    ], drawer);
    
    const game = new Game(board, army1, army2);
    
    drawer.promiseOfLoadedSprite().then((image) =>{
        drawer.sprite(image);
        board.draw();
        army1.draw();
        army2.draw();
        cursor.draw();
    });


    window.onkeyup = function(e) {
        let key = e.code;
        let newPosition;
        switch (key){
            case 'ArrowUp':
                switch(game.mode){
                    case 'chooseUnit':
                    case 'chooseUnitMove':
                        newPosition = {x: cursor.position.x, y: cursor.position.y-1};
                        break;
                    case 'chooseTarget':
                        newPosition = game.getOtherTargetPosition();
                        break;
                }
                if(game.canCursorMoveTo(newPosition)){
                    cursor.moveTo(newPosition);
                    cursor.draw();
                }
                break;
            case 'ArrowDown':
                switch(game.mode){
                    case 'chooseUnit':
                    case 'chooseUnitMove':
                        newPosition = {x: cursor.position.x, y: cursor.position.y+1};
                        break;
                    case 'chooseTarget':
                        newPosition = game.getOtherTargetPosition('counterclockwise');
                        break;
                }
                if(game.canCursorMoveTo(newPosition)){
                    cursor.moveTo(newPosition);
                    cursor.draw();
                }
                break;
            case 'ArrowLeft':
                switch(game.mode){
                    case 'chooseUnit':
                    case 'chooseUnitMove':
                        newPosition = {x: cursor.position.x-1, y: cursor.position.y};
                        break;
                    case 'chooseTarget':
                        newPosition = game.getOtherTargetPosition('counterclockwise');
                        break;
                }
                if(game.canCursorMoveTo(newPosition)){
                    cursor.moveTo(newPosition);
                    cursor.draw();
                }
                break;
            case 'ArrowRight':
                switch(game.mode){
                    case 'chooseUnit':
                    case 'chooseUnitMove':
                        newPosition = {x: cursor.position.x+1, y: cursor.position.y};
                        break;
                    case 'chooseTarget':
                        newPosition = game.getOtherTargetPosition();
                        break;
                }
                if(game.canCursorMoveTo(newPosition)){
                    cursor.moveTo(newPosition);
                    cursor.draw();
                }
                break;
            case 'Space':
                switch (game.mode) {
                    case 'chooseUnit':
                        game.selectUnit(cursor.position);
                        if (game.selectedUnit != null) {
                            game.mode = 'chooseUnitMove';
                            messageManager.replace('Choisissez la destination pour l\'unité.');
                            drawer.drawPossibleUnitMoves(game.selectedUnitCanMoveTo());
                        }
                        break;
                    case 'chooseUnitMove':
                        for (let destPosition of game.selectedUnitCanMoveTo()){
                            if (destPosition.x == cursor.position.x
                               && destPosition.y == cursor.position.y) {
                                game.selectedUnit.moveTo(cursor.position);
                                drawer.cleanArmiesCtx();
                                drawer.cleanMovesCtx();
                                game.loadPossibleTargets();
                                if (game.possibleTargets.length > 0){
                                    game.mode = 'chooseTarget';
                                    messageManager.replace('Choisissez une cible.');
                                    drawer.drawPossibleTargets(game.possibleTargets);
                                    cursor.moveTo(game.possibleTargets[0]);
                                    cursor.draw();
                                }
                                else{
                                    game.selectedUnit.selectable(false);
                                    game.selectedUnit = null;
                                    game.mode = 'chooseUnit';
                                    messageManager.replace('Choisissez une cible.');
                                }
                                game.army1.draw();
                                game.army2.draw();
                                break;
                            }
                        }
                        break;
                    case 'chooseTarget':
                        game.fight(game.selectedUnit, game.getUnitByPosition(cursor.position)[1]);
                        drawer.cleanArmiesCtx();
                        drawer.cleanMovesCtx();
                        game.army1.draw();
                        game.army2.draw();
                        game.mode = 'chooseUnit';
                        messageManager.replace('Choisissez une unité.');
                        break;
                }
                break;
            case 'KeyC':
                game.changePlayingArmy();
                drawer.cleanArmiesCtx();
                drawer.cleanMovesCtx();
                game.army1.draw();
                game.army2.draw();
                game.mode = 'chooseUnit';
                messageManager.replace('Choisissez une unité.');
                break;
            case 'KeyD':
                if(game.selectedUnit != null){
                    game.selectedUnit = null;
                    game.mode = 'chooseUnit';
                    messageManager.replace('Choisissez une unité.');
                    drawer.cleanMovesCtx();
                }
                break;
            default:
                console.log(key);
                break;
        }
    }


}





/***/ })
/******/ ]);