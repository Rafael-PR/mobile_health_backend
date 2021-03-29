const mongoose = require('mongoose');


//Von Mogoose wird die Schema class extrahiert
const Schema = mongoose.Schema

// ++++++  SCHEMA   +++++++++++++++++++++++++++++++++++++++++++++++

const therapistSchema = new Schema({
    first_name: {type: String, min:2, max:50, required:true},
    last_name: {type: String, min:2, max:50, required:true},
    address: {type: Object, required:true},
    email: {type: String, min:2, max:50, required:true},
    phone: {type: Number, min:2, max:20, required:true},
    category: {type: String, enum: ['massage', 'physioTherapist','speechTherapist','nutritionTherapist']},
    about: {type: String, min:2, max:350, required:true},
    education: {type: String, min:2, max:350, required:true},
    specialities: {type: String, min:2, max:350, required:true},
    profile_photo: {type: String, min:2, max:350, required:true}
    
})

//++++++++  Model   ++++++++++++++++++++++++++++++++++++++++++++++++

const Student = mongoose.model('Therapist',therapistSchema)

module.exports = Therapist;