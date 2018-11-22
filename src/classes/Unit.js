export default class Unit {
    constructor(position, config){
        this.position = position;
        this.life = config.life;
        this.moveMax = config.moveMax;
        this.selected = false;
        this.fight = config.fight
    }

    canMoveTo(board){
        const positions = [];
        const minX = this.position.x - this.moveMax;
        const minY = this.position.y - this.moveMax;
        const maxX = this.position.x + this.moveMax;
        const maxY = this.position.y + this.moveMax;

        //Boucle du plus petit X au plus grand possible pour l'unité
        for(let iX = Math.max(minX, 0);
            iX <= Math.min(maxX, board.width);
            iX++  ){

            //On ajoute la position iX, y courant de l'unité
            positions.push([iX, this.position.y]);

            const movesLeft = this.moveMax - (this.position.x - iX);

            //si on n'utilise pas tous les mouvements possibles pour aller à ce X on peut bouger sur Y
            if( iX > minX ){
                //Du y - mouvement restant au y + mouvement restant
                for(let iY = Math.max( this.position.y - movesLeft, 0);
                    iY <= Math.min(this.position.y + movesLeft, board.height);
                    iY++){
                    //Si iY = y courant de l'unité on n'ajoute pas au tableau, déjà fait.
                    if(iY == this.position.y){
                        continue;
                    }
                    else{
                        positions.push([iX, iY]);
                    }
                }
            }

        }
        return positions;
    }

    moveTo(position){
        this.position = position;
    }

    select(){
        this.selected = this.selected?false:true;
    }
}