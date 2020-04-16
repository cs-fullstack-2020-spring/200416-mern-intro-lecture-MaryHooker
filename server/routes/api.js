//create route
let express = require('express');
let router = express.Router();

//Read all endpoint
router.get('/',(req,res)=>{
    res.send(`Get request works`);
})


//Create endpoint
router.post('/',(req,res)=>{
    res.send(`Post request works`)
})


//export router
module.exports = router;