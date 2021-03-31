const mongoose = require('mongoose');


//Von Mogoose wird die Schema class extrahiert
const Schema = mongoose.Schema

// ++++++  SCHEMA   +++++++++++++++++++++++++++++++++++++++++++++++

const categorySchema = new Schema({
    massage: {type: String,required:true},
    physioTherapist: {type: String,required:true},
    speechTherapist: {type: String, required:true},
    nutritionTherapist: {type: String,required:true}
    
})

//++++++++  Model   ++++++++++++++++++++++++++++++++++++++++++++++++

const Category = mongoose.model('Category',categorySchema)

module.exports = Category;