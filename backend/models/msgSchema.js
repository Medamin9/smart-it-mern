const mongoose = require('mongoose');
const msgSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : true ,
        
    },
    emailMsg : {
        type: String,
        required : true ,
    
    },
    message : {
        type : String,
        required : true ,
    }
})
const Message = new mongoose.model('MESSAGE',msgSchema);

module.exports = Message; 