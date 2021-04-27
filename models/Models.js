const mongoose = require('mongoose');
const Schema = mongoose.Schema

let TestSchema = new Schema({
    name:{
        type:String
    },
    detail:{
        type:String
    },
    type:{
        type:String
    },
    price:{
        type:String
    },
    stock:{
        type:String
    },
    img:{
        type:String
    }
},{
    collection:'test'
})

module.exports = mongoose.model('Test',TestSchema);