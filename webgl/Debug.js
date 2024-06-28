import * as dat from 'lil-gui';

export default class Debug
{
    constructor()
    {
        this.active = false;
        
        if(this.active)
        {
            this.ui = new dat.GUI({
                closed: true,
                width: 400,
            })
        }
    }
}