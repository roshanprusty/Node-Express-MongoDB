import event from 'events';

class User extends event.EventEmitter{
    constructor(){
        super();
    }
}
export{ User };