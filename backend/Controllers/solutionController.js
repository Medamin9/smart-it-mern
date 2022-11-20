const solution =require("../Models/solutionSchema");
const bodyParser =require("body-parser")



affichersolution = async(req,res)=>{
    try {
        await solution.find({}).
   then(result=>{
        res.send(result)
    })     
    } catch (error) {
        console.log(error)
    }
}
ajoutersolution = async(req,res)=>{
    console.log(req.body)
    try {
        new_solution = new solution({
            sol : req.body.sol ,
            desc : req.body.desc ,
        })
        await new_solution.save();
        res.send("save solution sucess !!")
       
    } catch (error) {
        console.log(error)
    }
}
majsolution = async(req,res)=>{
    try {
        await solution.findOneAndUpdate({id:req.params.id},{
            sol : req.body.sol,
            des : req.body.des,
           
        })
        res.send("update with sucess !")
    } catch (error) {
        res.send(error)
    }
}
supprimersolution = async(req,res)=>{
    try {

        await solution.findOneAndDelete({id:req.params.id})
        res.send("Delate secess !")
    } catch (error) {
        res.send(error)
    }
}
module.exports = {
    ajoutersolution,
    affichersolution,
    majsolution,
    supprimersolution,

}