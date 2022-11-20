
const users = require("../models/userSchema");
const jwt =require('jsonwebtoken');
const bcryptjs=require('bcryptjs');

register = async(req,res)=>{
    try {
        // Get body or data 
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        
        const createUser = new users ({
            username : username ,
            email : email,
            password : password

        });

        //Save method is used to create user or insert user 
        //but before saving of inserting Password will hash 
        //because of hashing . After Hash , it will save to DB 
        const created = await createUser.save();
        console.log(created);
        res.status(200).send("registered")
        
    } catch (error) {
        res.status(400).send(error)
        
    }
}
module.exports = {
    register
}