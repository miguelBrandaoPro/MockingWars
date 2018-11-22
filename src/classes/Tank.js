import Unit from "./Unit";

export default class Tank extends Unit{
    constructor(position, config){
        super(position, config);
        this.type = 'Tank';
    }

}