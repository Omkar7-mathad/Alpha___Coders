const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./backend/career.db", (err) => {

if(err){
console.log(err.message);
}

console.log("Connected to SQLite database");

});

db.run(`
CREATE TABLE IF NOT EXISTS users(
id INTEGER PRIMARY KEY AUTOINCREMENT,
email TEXT UNIQUE,
password TEXT,
correct_answers INTEGER DEFAULT 0
)
`);

module.exports = db;