//set up entry point
let express = require('express');
let app = express();
let portNumber = 5000;

//import route and mount
let api = require('./routes/api');
app.use('/api',api);

//listen on port
app.listen(portNumber,()=>{
    console.log(`Listening on port ${portNumber}`);
})

