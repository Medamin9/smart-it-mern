
const Message=require("../models/msgSchema");


contacter=  async(req,res)=>{
    try {
        // Get body or data 
        const name = req.body.username;
        const emailMsg = req.body.email;
        const message = req.body.message;
        
        const sendMsg = new Message ({
            name : name ,
            emailMsg : email,
            message : message

        });

        //Save method is used to create user or insert user 
        //but before saving of inserting Password will hash 
        //because of hashing . After Hash , it will save to DB 
        const created = await sendMsg.save();
        console.log(created);
        res.status(200).send("sent")
        
    } catch (error) {
        res.status(400).send(error)
        
    }
}
module.exports = {
    contacter
}