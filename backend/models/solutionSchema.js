const mongoose = require("mongoose")

const solutionSchema = mongoose.Schema({
    sol : {
        type: String,
        required : true, 
    },
    desc : {
        type: String,
        required : true,
    }
});

const solution = mongoose.model("solution",solutionSchema);
module.exports = solution 
