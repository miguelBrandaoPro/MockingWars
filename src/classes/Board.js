export default class Board{
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