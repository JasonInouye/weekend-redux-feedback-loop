const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


router.get('/', (req,res) => {
    //console.log( 'inside of GET' );
    const sqlText = `SELECT * FROM "feedback"
                    ORDER BY id DESC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log( 'Inside oF GET');
            res.send(result.rows);
        })
        .catch((err) => {
            console.log( `Error in GET`, err );
            res.sendStatus(500);
        })
})

module.exports = router;
