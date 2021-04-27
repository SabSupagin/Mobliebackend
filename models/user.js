const mongoose = require('mongoose');
const Schema = mongoose.Schema

let UserSchema = new Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    email:{
        type:String
    },
},{
    collection:'user'
})

module.exports = mongoose.model('User',UserSchema);