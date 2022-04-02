const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// Setup a GET route to get all the creatures from the database
// router.get('/', (req, res) => {
//     // When you fetch all things in these GET routes, strongly encourage ORDER BY
//     // so that things always come back in a consistent order 
//     const sqlText = `SELECT * FROM creatures ORDER BY name, origin DESC;`;
//     pool.query(sqlText)
//         .then((result) => {
//             console.log(`Got stuff back from the database`, result);
//             res.send(result.rows);
//         })
//         .catch((error) => {
//             console.log(`Error making database query ${sqlText}`, error);
//             res.sendStatus(500); // Good server always responds
//         })
// })


// Setup a POST route to add a new creature to the database
router.post('/', (req, res) => {
    const feedback = req.body;
    //console.log( feedback.feeling );
    const sqlText = `INSERT INTO feedback ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4)`;
    const insertValues = [feedback.feeling, feedback.understanding, feedback.support, feedback.comments]

    pool.query(sqlText, insertValues)
        .then((result) => {
            console.log(`Added feedback to the database`, insertValues);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})


module.exports = router;