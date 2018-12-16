const express = require('express');
const router = express.Router();

const sqlite3 = require('../modules/DbConnection');
const db = sqlite3().getInstance;

router.get("/", (req, res) => {

    new Promise((resolve, reject) => {
        db.all('SELECT * FROM products',(err, data) => {
            console.log(data);
            if(data && data.length){
                resolve(data)
            }else {
                reject("No products yet");
            }
        });
    })
        .then(products => {
            res.json({data: products});
        })
        .catch(err => {
            res.json({error: err});
        });
});

router.get("/:id", (req, res) => {

    console.log(req.params);

    new Promise((resolve, reject) => {
        db.get('SELECT * FROM products WHERE id = ?',[req.params.id],(err, data) => {
            console.log(data);
            if(data){
                resolve(data)
            }else {
                reject("Products not found");
            }
        });
    })
        .then(products => {
            res.json({data: products});
        })
        .catch(err => {
            res.json({error: err});
        });
});

module.exports = router;