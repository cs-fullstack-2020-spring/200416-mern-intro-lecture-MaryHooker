//create route
let express = require('express');
let router = express.Router();
router.use(express.json());

//import model
let MovieCollection = require('../models/MovieSchema');

//Read all endpoint
router.get('/',(req,res)=>{
    // res.send(`Get request works`);
    MovieCollection.find({},(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})


//Create endpoint
router.post('/',(req,res)=>{
    // res.send(`Post request works`)
    MovieCollection.create(req.body,(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})


//export router
module.exports = router;