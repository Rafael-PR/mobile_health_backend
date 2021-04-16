const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');



//Von Mogoose wird die Schema class extrahiert
const Schema = mongoose.Schema

// ++++++  SCHEMA   +++++++++++++++++++++++++++++++++++++++++++++++

const therapistSchema = new Schema({
    //Array für bookings - jetzt kann ich populaten mit bookings
    bookings : [{type: Schema.Types.ObjectId, ref: 'Booking' }],
    first_name: {type: String, min:2, max:50, required:true},
    last_name: {type: String, min:2, max:50, required:true},
    address:{ 
        country:{type: String},
        city: {type: String},
        streetName :{type: String},
        streetNumber :{type: String},
        postalCode: { type: String},
            },
    phoneNumber: {type: String, min:2, max:20, required:true},
    category: {type: String, enum: ['massage', 'physioTherapist','speechTherapist','nutritionTherapist']},
    about: {type: String, min:2, max:350, required:true},
    education: {type: String, min:2, max:350, required:true},
    specialities: {type: String, min:2, max:350, required:true},
    profilPhoto: {type: String, },
    last_updated: { type: Date, default: Date.now },
    emailAddress: {type: String, min:2, max:50, required:true, unique:true},
    password: {type: String, required:true},
    booking: { type: Schema.Types.ObjectId, ref: 'Booking'}
})

therapistSchema.methods.createToken = function () {
    //KEINE Arrow Funtion nutzen hier ansonsten funzt .this nicht mehr !!
     const payload = { _id: this._id, emailAddress: this.emailAddress, role:'therapist' }
     const secretKey =process.env.JWT_SECRET;
     const token = jwt.sign( payload, secretKey )
     return token
}

//++++++++  Model   ++++++++++++++++++++++++++++++++++++++++++++++++

const Therapist = mongoose.model('Therapist',therapistSchema)

module.exports = Therapist;


//  Original

// first_name: {type: String, min:2, max:50, required:true},
//     last_name: {type: String, min:2, max:50, required:true},
//     address:{ 
//         country:{type: String},
//         city: {type: String},
//         streetName :{type: String},
//         streetNumber :{type: String},
//         postalCode: { type: String},
//             },
//     phoneNumber: {type: String, min:2, max:20, required:true},
//     category: {type: String, enum: ['massage', 'physioTherapist','speechTherapist','nutritionTherapist']},
//     about: {type: String, min:2, max:350, required:true},
//     education: {type: String, min:2, max:350, required:true},
//     specialities: {type: String, min:2, max:350, required:true},
//     profilPhoto: {type: String, },
//     last_updated: { type: Date, default: Date.now },
//     emailAddress: {type: String, min:2, max:50, required:true, unique:true},
//     password: {type: String, required:true}