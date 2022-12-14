const mongoose =require('mongoose');
const bcryptjs=require('bcryptjs');
const jwt = require('jsonwebtoken');

//User schema or document structure 

const userSchema = new mongoose.Schema({
    username : {
        type : String , 
        required : true ,
        unique : true,
    },
    email : {
        type: String,
        required : true ,
        unique : true ,
    },
    password : {
        type : String,
        required : true ,
    },
    tokens : [
        {
            token : {
                type : String,
                required: true
            }
        }
    ]
})

// Hashing Password to secure 
userSchema.pre('save',async function(next){
    if (this.isModified('password')){
        this.password = bcryptjs.hashSync(this.password, 10);
    }
    next();
})

//generate Token to verify user 
const SCRET_KEY = "jesuismohamedaminehamdi123456789";
userSchema.methods.generateToken = async function(){
    try {
        let generateToken = jwt.sign({_id : this._id}, SCRET_KEY);
        this.tokens = this.tokens.concat({token : generatedToken});
        await this.save();
        return generatedToken;        
    } catch (error) {
        console.log(error)
        
    }
}


// Create Model 

const users = new mongoose.model('USER',userSchema);

module.exports = users; 
