const mongoose = require('mongoose');

const Schema = mongoose.Schema

const bookingSchema = new Schema({
    //hier noch object id connecten, ging irgendwie nich 
    clientId: { type: Schema.Types.ObjectId, ref: 'Client',required: true},
    therapistId : {type: Schema.Types.ObjectId, ref: 'Therapist', required: true},
    //change to date anstat string
    time: { type: String },
    place : {type: String, enum: ['client loc', 'therapist loc']},
    message: {type: String},
    status: {type: String, enum: ['pending','accepted','canceled']},
    last_updated: { type: Date, default: Date.now }
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking;




// Original

// const bookingSchema = new Schema({
//     //hier noch object id connecten, ging irgendwie nich 
//     clientId: { type: Schema.Types.ObjectId, ref: 'Client',required: true},
//     therapistId : {type: Schema.Types.ObjectId, ref: 'Therapist', required: true},
//     time: { type: String },
//     place : {type: String, enum: ['client loc', 'therapist loc']},
//     message: {type: String},
//     last_updated: { type: Date, default: Date.now }
// })
