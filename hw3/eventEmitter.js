const EventEmitter = require('events');
const productID_Not_exist = new EventEmitter();

productID_Not_exist.on('product_id_not_exist', () => {
    console.error(`product id doesn't exist !!`);
})

module.exports.productID_Not_exist = productID_Not_exist;
