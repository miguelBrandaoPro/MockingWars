import Unit from "./Unit";

export default class Bazooka extends Unit{

    constructor(position, config){
        super(position, config);
        this.type = 'Bazooka';
    }

}