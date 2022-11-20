const express = require("express");

const router =express.Router();

const {afficherMembre,ajouterMembre,majMembre,supprimerMembre} =require("../Controllers/membreController");

router.get("/afficher",afficherMembre);

router.post("/ajouter",ajouterMembre);

router.put("/maj/:id",majMembre);

router.delete("/supprimer/:id",supprimerMembre);

module.exports = router;