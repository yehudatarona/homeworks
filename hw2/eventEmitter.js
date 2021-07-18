const EventEmitter = require('events');
const empty_array = new EventEmitter();

empty_array.on('an_empty_array', () => {
    console.error(`The given array is an empty array!!!`);
})

module.exports.empty_array = empty_array;
