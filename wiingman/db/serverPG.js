import pg from "pg"

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "userLola",
    password: "admin",
    port: 5432,
})
db.connect();

module.exports = db;
