'use strict'
import Bazooka from './classes/Bazooka';
import Infantry from './classes/Infantry';
import Tank from './classes/Tank';

import Army from './classes/Army';
import Cursor from './classes/Cursor';
import Board from './classes/Board';

import Game from './classes/Game';

import { configMap } from './config/map1';

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
    //CANVAS
    const canvas = document.getElementById('board');
    const ctx = canvas.getContext('2d');
    const Block_M = document.getElementById('Block_M');
    const Block_P = document.getElementById('Block_P');

    const board = new Board(configMap, ctx, Block_M, Block_P);
    const cursor = new Cursor({x:board.width/2, y:board.height/2});

    const army1 = new Army('Bob', 'Blue', [
        new Tank({x:29, y:0}, configTank),
        new Tank({x:30, y:0}, configTank),
        new Infantry({x:29, y:1}, configInfantry),
        new Infantry({x:29, y:2}, configInfantry),
        new Bazooka({x:30, y:1}, configBazooka),
        new Bazooka({x:30, y:2}, configBazooka),
    ]);

    const army2 = new Army('Bill', 'Red', [
        new Tank({x:0, y:29}, configTank),
        new Tank({x:0, y:30}, configTank),
        new Infantry({x:1, y:29}, configInfantry),
        new Infantry({x:2, y:29}, configInfantry),
        new Bazooka({x:1, y:30}, configBazooka),
        new Bazooka({x:2, y:30}, configBazooka),
    ]);


    const game = new Game(board, army1, army2);

    
    game.fight(game.army1.units[0], game.army2.units[0]);
    
    board.draw();
    
}

window.onkeyup = function(e) {
    let key = e.code;
    switch (key){
        case 'ArrowUp':
            cursor.moveTo({x: cursor.position.x, y: cursor.position.y-1});
            break;
        case 'ArrowDown':
            cursor.moveTo({x: cursor.position.x, y: cursor.position.y+1});
            break;
        case 'ArrowLeft':
            cursor.moveTo({x: cursor.position.x-1, y: cursor.position.y});
            break;
        case 'ArrowRight':
            cursor.moveTo({x: cursor.position.x+1, y: cursor.position.y});
            break;
        case 'Space':
            game.selectUnit(cursor.position);
            console.log(game.armyPlaying.units);
            break;
        default:
            console.log(key);
            break;
    }
}

