const express = require("express");

const router =express.Router();

const {affichersolution,ajoutersolution,majsolution,supprimersolution} =require("../Controllers/solutionController");

router.get("/afficher",affichersolution);

router.post("/ajouter",ajoutersolution);

router.put("/maj/:id",majsolution);

router.delete("/supprimer/:id",supprimersolution);

module.exports = router;