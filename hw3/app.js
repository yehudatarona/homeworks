const { log } = require("console");
const { productID_Not_exist } = require("./eventEmitter");
// using the sqlite3 lib
const sqlite3 = require("sqlite3").verbose();

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});



// connecting to the db
let db = new sqlite3.Database("hk_sqlte.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the first database.");
});

// fire select quiey
db.serialize(() => {
  db.each(`SELECT* FROM PRODUCTS`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row);
  });
  
});

db.serialize(() => {
  let prodId = 4;
  db.each(`SELECT* FROM PRODUCTS WHERE ID = ${prodId}`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log("The product you sreach for is:\n", row);
  });
});


// readline.question("enter product id number ?", (_x) => {
//   prodId = _x;

//   if (prodId <= 0) {
//     productID_Not_exist.emit("product_id_not_exist", x);
//   } else {
//     db.serialize(() => {
//       db.each(`SELECT* FROM PRODUCTS WHERE ID = prodId`, (err, row) => {
//         if (err) {
//           console.error(err.message);
//         }
//         console.log("The product you sreach for is:\n", row);
//       });
//     });
//   }
//   readline.close();
// });

// close connector
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Close the database connection.");
});
