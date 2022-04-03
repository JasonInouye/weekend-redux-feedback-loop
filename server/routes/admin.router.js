const express = require('express');
const router = express.router();
const pool = require('../modules/pool.js');


router.get('/', (req,res) => {
    const sqlText = `SELECT * FROM "feedback"
                    ORDER BY id;`;
    pool.query(sqlText)
        .then((result) => {
            console.log( 'Inside oF GET');
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log( `Error in GET`, err );
            res.sendStatus(500);
        })
})

module.exports = router;
