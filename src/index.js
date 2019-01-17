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

import MessageManager from './classes/MessageManager';

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
    
    const messageManager = new MessageManager(document.querySelector('#message'));
    
    messageManager.add('Choisissez une unité.');

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
        new Infantry({x:10, y:12}, configInfantry),
        new Infantry({x:12, y:12}, configInfantry),
        new Bazooka({x:11, y:11}, configBazooka),
        new Bazooka({x:11, y:13}, configBazooka),
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



