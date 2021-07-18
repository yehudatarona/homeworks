const {empty_array} = require("./eventEmitter");
const {logger} = require('./logger')
getLength = (_ar) => {
    return "The array Length is: " + _ar.length;

}

getFirst = (_ar) => {
    if (!_ar.length) {
        logger(_ar.length);
        empty_array.emit('an_empty_array');
    }
    else {

        return "first item in the array: " + _ar[0];
    }


}

getLast = (_ar) => {
    if (!_ar.length) {
        empty_array.emit('an_empty_array');
    }
    else {

        return "last item in the array is: " + _ar[_ar.length - 1];
    }
}



module.exports = {
    getLength,
    getFirst,
    getLast
}