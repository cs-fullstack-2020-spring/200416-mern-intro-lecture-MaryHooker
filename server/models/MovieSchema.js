//create model
let mongoose = require ('mongoose');
let Schema = mongoose.Schema;

//create new instance
let MovieSchema = new Schema(
    {
        "title": String,
        "yearReleased": Number,
    }
)

//export model
module.exports = mongoose.model('movies200416', MovieSchema);