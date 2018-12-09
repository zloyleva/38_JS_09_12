const path = require('path');

module.exports = function () {

    let databaseInstance = null;

    function setInstanceDatabase(){
        const sqlite3 = require('sqlite3').verbose();
        const db_path = path.resolve(__dirname, "../database/myshop.sqlite");
        databaseInstance = new sqlite3.Database(db_path, (err) => {
            if(err){
                console.log(err.message);
                return;
            }
            console.log("DB was connected...");
        });

        return databaseInstance;
    }



    return {
      getInstance: databaseInstance || setInstanceDatabase()
    }
};
