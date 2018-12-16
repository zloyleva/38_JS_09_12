const express = require('express');
const router = express.Router();

const md5 = require('js-md5');

const sqlite3 = require('../modules/DbConnection');
const db = sqlite3().getInstance;

router.get('/',(req,res) => {
    console.log("LOGIN");
    res.json({data: "LOGIN"});
});

router.post('/',(req,res) => {

    // console.log(req.body.email);
    // console.log(req.body.password);

    new Promise((resolve, reject) => {
        db.get('SELECT * FROM users WHERE email = ? AND password = ?',[req.body.email, req.body.password],(err, data) => {
            console.log(data);
            if(data){
                resolve(data)
            }else {
                reject("No match user name and password");
            }
        });
    })
        .then(user => {
            console.log("Update then");
            // console.log(user.email);
            return new Promise((resolve, reject) => {
                const token = md5(md5(user.email) + md5(Date()));
                db.run('UPDATE users SET token = ? WHERE name = ? AND password = ?', [token, req.body.email, req.body.password], (err, data) => {
                    if(err){
                        reject("Error in create token");
                    }
                    resolve(token)
                });
            });
        })
        .then(token => {
            res.json({
                token: token,
                status: "isLogin"
            });
        })
        .catch(err => {
            res.json({error: err});
        });
});

module.exports = router;