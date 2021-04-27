const mongoose = require('mongoose');
const Schema = mongoose.Schema

let HistorySchema = new Schema({
    username:{
        type:String
    },
    history:{
        type:String
    },
    date:{
        type:String
    },
},{
    collection:'history'
})

module.exports = mongoose.model('History',HistorySchema);
