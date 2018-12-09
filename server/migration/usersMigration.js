const sqlite3 = require('../modules/DbConnection');
const db = sqlite3().getInstance;

console.log(db);

const users = [
    {name: "Oleh", email: "zloyleva@gmail.com", password: "123456", avatar: null, token: null},
    {name: "Alena", email: "alena@gmail.com", password: "123456", avatar: null, token: null},
];

db.serialize(function () {
   db.run("DROP TABLE IF EXISTS users");
   db.run("CREATE TABLE users(" +
       "[id] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL," +
       "[name] VARCHAR NOT NULL," +
       "[email] VARCHAR NOT NULL," +
       "[password] VARCHAR NOT NULL," +
       "[avatar] VARCHAR," +
       "[token] VARCHAR" +
       ")");

    users.map(user => {
        db.run("INSERT INTO users(name,email,password,avatar,token) " +
            "VALUES(?,?,?,?,?)",[user.name, user.email, user.password, user.avatar, user.token]);
    } )
});

db.close((err) => {
    if(err){
        console.log(err.message);
        return;
    }
    console.log("DB was closed...");
});