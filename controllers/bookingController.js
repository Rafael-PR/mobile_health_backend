const Booking = require('../models/Booking')

exports.list_bookings= async (req, res)=>{
    try{
      const allBookings =  Booking.find({})
      res.json(allBookings)
    } catch (e) {
      res.status(500).send(e.message)
    }}

exports.find_booking= async (req, res)=>{
  const { id } = req.params
  try{
    const targetBooking= await Booking.findById(id).populate('clientId').populate('therapistId')
    if (!targetBooking) return res.status(404).send("no such Booking")
    res.json(targetBooking)
  } catch (e) {
    res.status(500).send(e.message)
  }
}
exports.create_booking= async (req, res)=>{
    const {clientId,therapistId,time ,place , message} = req.body

    try{
      const newBooking= await Booking.create({clientId,therapistId,time ,place , message})
      res.json(newBooking)
    } catch (e) {
      res.status(500).send(e.message)
    }
  
  }

//********************++improve that part, what things can we change********************
exports.update_booking= async (req, res)=>{
    const { value, old_whatever, new_whatever} =req.body
    try{
      const updatedBooking= await Booking.findOneAndUpdate({[value]: old_whatever}, {[value]: new_whatever}, {new :true}) //first old used as filter and then how you want to update it)
      res.json(updatedBooking)
    } catch (e) {
      res.status(500).send(e.message)
    }
  }
exports.delete_booking= async (req, res)=>{
    const { id } =req.params
    try{
      const deletedBooking= await Booking.findByIdAndDelete(id) 
      if (!deletedBooking) res.status(404).send("No such Booking")
      res.json(deletedBooking)
    } catch (e) {
      res.status(500).send(e.message)
    }
  }
exports.delete_bookings= async (req, res)=>{
    const {condition, value} = req.body
    try{
      if(!condition || !value) throw new Error("Please pass valid conditions")
      const deletedInfo = await Booking.deleteMany({[condition]: value})
      res.json(deletedInfo)
    } catch (e) {
      res.status(500).send(e.message)
    }
}