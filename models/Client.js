const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema

const clientSchema = new Schema({
    first_name: { type: String, min: 2, max: 50, required: true },
    last_name: { type: String, min: 2, max: 50, required: true },
    address:{
        country:{type: String},
        city: {type: String},
        streetName :{type: String},
        streetNumber :{type: String},
        postalCode: { type: String}
    },
    phoneNumber : {type: String},
    shortText: {type: String},
    profilPhoto: {type: String, },
    emailAddress: {type: String},
    password: {type: String, required:true},
    last_updated: { type: Date, default: Date.now },
    booking: { type: Schema.Types.ObjectId, ref: 'Booking'}
})

clientSchema.methods.createToken = function () {
    const payload = { _id: this._id, emailAddress: this.emailAddress, role:'client' }
     const secretKey =process.env.JWT_SECRET;
     const token = jwt.sign( payload, secretKey )
     return token
}

const Client = mongoose.model('Client', clientSchema)

module.exports = Client;