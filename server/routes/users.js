const express = require('express');
const router = express.Router();

const sqlite3 = require('../modules/DbConnection');
const db = sqlite3().getInstance;

router.get("/", (req, res) => {

    new Promise((resolve, reject) => {
        db.all('SELECT * FROM users',(err, data) => {
            console.log(data);
            if(data && data.length){
                resolve(data)
            }else {
                reject("No users yet");
            }
        });
    })
        .then(users => {
            res.json({data: users});
        })
        .catch(err => {
            res.json({error: err});
        });
});

module.exports = router;