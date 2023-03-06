
import EventEmitter from 'events';
const event = new EventEmitter();
event.on('saved', () => {
    console.log('A saved event occurred');
});
event.emit('saved');
