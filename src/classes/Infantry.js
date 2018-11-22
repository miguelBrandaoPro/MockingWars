import Unit from "./Unit";

export default class Infantry extends Unit{

    constructor(position, config){
        super(position, config);
        this.type = 'Infantry';
    }

}