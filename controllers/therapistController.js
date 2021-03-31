const Therapist = require('../models/Therapist');
// const therapistsSeedData = require('../see's/therapists.js)
// const router = require('../routes');

// ++++++++++  POST a Therapist  +++++++++++++++++++++++++++++++++

exports.create_therapist =async (req, res)=>{
    const {first_name,
        last_name,
            address:{
                country,
                city,
                streetName,
                streetNumber,
                postalCode},
        emailAddress,
        phoneNumber,
        category,
        about,
        education,
        specialities,
        profilPhoto} = req.body
  
    try{
      const newTherapist= await Therapist.create({
        first_name,last_name,
        address:{ 
            country,
            city,
            streetName,
            streetNumber,
            postalCode},
        emailAddress,
        phoneNumber,
        category,
        about,
        education,
        specialities,
        profilPhoto
        
    })
      res.json(newTherapist)
    } catch (e) {
      res.status(500).send(e.message)}
    }

// ++++++++++++  GET ALL Therapists  ++++++++++++++++++++++++++++++++++++++++++++

exports.list_therapists = async (req,res)=>{
    try{
        const allTherapists= await Therapist.find({})
        res.json(allTherapists)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

// +++++++++++++  GET ONE Therapist by ID  ++++++++++++++++++++++++++++++++++++

exports.find_therapist = async (req,res)=>{
    const { id } = req.params
    try{
        const targetTherapist = await Therapist.findById(id)
        if(!targetTherapist) return res.status(404).send('no Therapist with this ID found')
        res.json(targetTherapist)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

// ++++++++++++++ UPDATE a Therapists name +++++++++ Wie kann man mehrere Dinge updaten ?

exports.update_therapist= async (req, res)=>{
    const { old_name, new_name} =req.body
    try{
      const updatedTherapist= await Therapist.findOneAndUpdate({"first_name": old_name}, {"first_name": new_name}, {new :true}) 
      res.json(updatedTherapist)
    } catch (e) {
      res.status(500).send(e.message)
    }
  }

// +++++++++++++++ Delete one Therapist ++++++++++++++++++++++++

exports.delete_therapist = async (req,res)=>{
  const { id } = req.params
  try{ 
    const deletedTherapist = await Therapist.findByIdAndDelete(id)
    if(!deletedTherapist) return res.status(404).send('no Therapist with this ID found')
        res.json(deletedTherapist)
  }catch (e) {
    res.status(500).send(e.message)
  }
}

// +++++++++++++++++ Delete ALL Therapist  +++++++++++++++++++

exports.delete_all_therapists = async (req, res) => {

  try { 
    const deletedTherapists = await Therapist.deleteMany()
    res.json(deletedTherapists)
  }catch(e) {
    res.status(500).send(e.message)
  }
}

exports.seed = async = (req, res) => {


  try {

  } catch (e) {
    res.status(500).send('Therapists seeding failed')
  }

}
