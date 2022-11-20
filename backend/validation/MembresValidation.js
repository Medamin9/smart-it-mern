const isEmpty =require ("./isEmpty");
const validator = require("validator");

module.exports = function validateMembre(data){
    let errors = {}
    data.nom = !isEmpty (data.nom) ? data.nom : ""
    data.prenom = !isEmpty (data.prenom) ? data.prenom : ""
    data.poste = !isEmpty (data.poste) ? data.poste : ""
    data.anneeExp = !isEmpty (data.anneeExp) ? data.anneeExp : ""
    if (validator.isEmpty(data.nom)) {
        errors.nom = "required name "
    }
    if (validator.isEmpty(data.prenom)) {
        errors.prenom = "required prenom "
    }
    if (validator.isEmpty(data.poste)) {
        errors.poste = "required poste "
    }
    return {
        errors,
        isValid : isEmpty(errors)
    }

}
