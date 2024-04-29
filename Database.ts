import sqlite3 from 'sqlite3';

const database = new sqlite3.Database(':memory:');

database.serialize(() => {
  database.run(`CREATE TABLE sessions (
    id INTEGER PRIMARY KEY,
    name TEXT,
    date TEXT
  )`);
});

export default database;