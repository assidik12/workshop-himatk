const util = require("util");
const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.query = util.promisify(db.query).bind(db);

db.end = util.promisify(db.end).bind(db);

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = db;
