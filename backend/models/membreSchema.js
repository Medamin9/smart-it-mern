const mongoose = require("mongoose")

const membreSchema = mongoose.Schema({
    nom : {
        type: String,
        required : true, 
    },
    prenom : {
        type: String,
        required : true,
    },
    poste : {
        type: String,
        required : true ,
    },
    anneeExp : {
        type: Number,
        required : true,
    }
});

const Membre = mongoose.model("membre",membreSchema);
module.exports = Membre 
