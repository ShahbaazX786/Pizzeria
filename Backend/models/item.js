const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    id:{
        type:String,
        required:false
    },
    tname:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
});

const Item = module.exports = mongoose.model('Item',ItemSchema);