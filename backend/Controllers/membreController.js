const Membre =require("../Models/membreSchema");
const validateMembre = require("../validation/MembresValidation")
const bodyParser =require("body-parser")



afficherMembre = async(req,res)=>{
    try {
        await Membre.find({}).
   then(result=>{
        res.send(result)
    })     
    } catch (error) {
        console.log(error)
    }
}
ajouterMembre = async(req,res)=>{
    console.log(req.body)
    const { errors , isValid} = validateMembre(req.body)
    try {
        if (!isValid) {
            res.status(404).json(errors)
            
        } else {
            let new_membre = new Membre({
               nom : req.body.nom ,
               prenom : req.body.prenom ,
               poste : req.body.poste ,
               anneeExp: req.body.anneeExp ,
               
        
    })
        await new_membre.save();
        res.send("save membre sucess !!")
        }  
    } catch (error) {
        console.log(error)
    }
}
majMembre = async(req,res)=>{
    try {
        await Membre.findOneAndUpdate({id:req.params.id},{
            nom : req.body.nom,
            prenom : req.body.prenom,
            poste : req.body.poste,
            anneeExp : req.body.anneeExp
        })
        res.send("update with sucess !")
    } catch (error) {
        res.send(error)
    }
}
supprimerMembre = async(req,res)=>{
    try {

        await Membre.findOneAndDelete({id:req.params.id})
        res.send("Delate secess !")
    } catch (error) {
        res.send(error)
    }
}
module.exports = {
    ajouterMembre,
    afficherMembre,
    majMembre,
    supprimerMembre,

}
