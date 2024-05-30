/* 
    Todo{
        title : string;
        description : string;
        completed : boolean
    }
*/

const mongoose = require("mongoose");
mongoose.connect("rush:Smpn83BcFPe2uYWr@cluster0.fhr1srf.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model(`todos`,todoSchema)

module.exports = {
    todo
}