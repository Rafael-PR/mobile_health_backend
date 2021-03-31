const mongoose = require('mongoose');

const Schema = mongoose.Schema

const bookingSchema = new Schema({
    //hier noch object id connecten, ging irgendwie nich 
    clientId: { type: Schema.Types.ObjectId, ref: 'Client'},
    therapistId : {type: Schema.Types.ObjectId, ref: 'Therapist'},
    time: { type: Date },
    place : {type: String, enum: ['client loc', 'therapist loc']},
    message: {type: String},
    last_updated: { type: Date, default: Date.now }
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking;


//    clientId: {type: Schema.Types.Objectid, ref: 'Client', required: true},
// therapistId : {type: Schema.Types.Objectid, ref: 'Therapist'},
// time: { type: Date },
// place : {type: String, enum: ['client loc', 'therapist loc']},
// message: {type: String},
// last_updated: { type: Date, default: Date.now }