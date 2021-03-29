const mongoose = require('mongoose');

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
    emailAddress: {type: String},
    phoneNumber : {type: String},
    shortText: {type: String},
    last_updated: { type: Date, default: Date.now },
    // booking: {type: Schema.Types.Objectid, ref: 'Booking', required: true}
})

const Client = mongoose.model('Client', clientSchema)

module.exports = Client;