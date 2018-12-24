'use strict'

import configMap from './config/map1';
import configArmies from './config/armies';
import configSprite from './config/sprite';

import Bazooka from './classes/Bazooka';
import Infantry from './classes/Infantry';
import Tank from './classes/Tank';

import Army from './classes/Army';
import Cursor from './classes/Cursor';
import Board from './classes/Board';

import Game from './classes/Game';

import Drawer from './classes/Drawer';

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

    const drawer = new Drawer(configSprite, armiesCtx, boardCtx, movesCtx, cursorCtx );
    const board = new Board(configMap, drawer);
    const cursor = new Cursor({x:board.width/2, y:board.height/2}, drawer);

    const army1 = new Army('Bob', 'Blue', [
        new Tank({x:18, y:0}, configTank),
        new Tank({x:19, y:0}, configTank),
        new Infantry({x:10, y:10}, configInfantry),
        new Infantry({x:18, y:2}, configInfantry),
        new Bazooka({x:19, y:1}, configBazooka),
        new Bazooka({x:19, y:2}, configBazooka),
    ], drawer);

    const army2 = new Army('Bill', 'Red', [
        new Tank({x:0, y:18}, configTank),
        new Tank({x:0, y:19}, configTank),
        new Infantry({x:1, y:18}, configInfantry),
        new Infantry({x:2, y:18}, configInfantry),
        new Bazooka({x:1, y:19}, configBazooka),
        new Bazooka({x:2, y:19}, configBazooka),
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
                newPosition = {x: cursor.position.x, y: cursor.position.y-1};
                if(game.canCursorMoveTo(newPosition)){
                    cursor.moveTo(newPosition);
                    cursor.draw();
                }
                break;
            case 'ArrowDown':
                newPosition = {x: cursor.position.x, y: cursor.position.y+1};
                if(game.canCursorMoveTo(newPosition)){
                    cursor.moveTo(newPosition);
                    cursor.draw();
                }
                break;
            case 'ArrowLeft':
                newPosition = {x: cursor.position.x-1, y: cursor.position.y};
                if(game.canCursorMoveTo(newPosition)){
                    cursor.moveTo(newPosition);
                    cursor.draw();
                }
                break;
            case 'ArrowRight':
                newPosition = {x: cursor.position.x+1, y: cursor.position.y};
                if(game.canCursorMoveTo(newPosition)){
                    cursor.moveTo(newPosition);
                    cursor.draw();
                }
                break;
            case 'Space':
                if(game.selectedUnit == null){
                    game.selectUnit(cursor.position);
                    if(game.selectedUnit != null){
                        drawer.drawPossibleUnitMoves(game.selectedUnit.canMoveTo(board));
                    }
                }
                else{         
                    for(let destPosition of game.selectedUnit.canMoveTo(board)){
                        if( destPosition.x == cursor.position.x
                           && destPosition.y == cursor.position.y){
                            game.selectedUnit.moveTo(cursor.position);
                            game.selectedUnit._selectable = false;
                            game.selectedUnit = null;
                            drawer.cleanArmiesCtx();
                            drawer.cleanMovesCtx();
                            game.army1.draw();
                            game.army2.draw();
                            break;
                        }
                    }  
                }
                break;
            default:
                console.log(key);
                break;
        }
    }
    

    


}



