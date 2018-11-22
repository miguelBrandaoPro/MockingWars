export default class Game{
    constructor(board, army1, army2){
        this.board = board;
        this.army1 = army1;
        this.army2 = army2;
        this.armyPlaying = army1;
    }

    fight(attacker, defender){
        defender.life -= attacker.fight.attack[defender.type];
        attacker.life -= defender.fight.defense[attacker.type];
    }


    selectUnit(position){
        for( let i=0; i<this.armyPlaying.units.length; i++){
            if(
                this.armyPlaying.units[i].position.x == position.x
                && this.armyPlaying.units[i].position.y == position.y
            ){
                this.armyPlaying.units[i].select();
            }
        }
    }
}