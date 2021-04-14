const Therapist = require('../models/Therapist');
const bcrypt = require('bcrypt');
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
        phoneNumber,
        category,
        about,
        education,
        specialities,
        profilPhoto,
        emailAddress,
        password
      } = req.body
  
    try{
      const newTherapist= new Therapist({
        first_name,
        last_name,
        address:{ 
            country,
            city,
            streetName,
            streetNumber,
            postalCode},
        phoneNumber,
        category,
        about,
        education,
        specialities,
        profilPhoto,
        emailAddress,
        password: await bcrypt.hash(password, 10)
    })
      await newTherapist.save()


      // siehe authenticationController / Token -> Header
      // res.json({
        // _id: newTherapist._id,
        // first_name: newTherapist.first_name,
        // email: newTherapist.email,
        // ++ ID UND Email sind schon im Token - nicht nötig nochmal zu senden
        // token: newTherapist.createToken()
        // })
        //-------------------------------------------------------------------
        const token = newTherapist.createToken()
        res.set('x-authorization-token',token).send('Therapist created successfully')
        
     
    } catch (e) {
      res.status(500).send(e.message)}
    }

// ++++++++++++  GET ALL Therapists  ++++++++++++++++++++++++++++++++++++++++++++
// Szenario wir möchten mit einer Middleware den Bereich "Get All" schützen
// Kopie wie es vorher aussah drunter auskommentiert
exports.list_therapists = async (req,res)=>{
  const { category, postalCode } = req.query

    try{
      if (category && Array.isArray(category) && category.length) {
        let filteredTherapists;
        
        if (!postalCode) filteredTherapists = await Therapist.find({category: { $in: category }})
        else filteredTherapists = await Therapist.find({ category: { $in: category }, "address.postalCode": postalCode })
        res.json(filteredTherapists)
      } else {
        const allTherapists= await Therapist.find({})
        res.json(allTherapists)
      }
    } catch (e) {
        res.status(500).send(e.message)
    }
}

// exports.list_therapists = async (req,res)=>{
//   try{
//       const allTherapists= await Therapist.find({})
//       res.json(allTherapists)
//   } catch (e) {
//       res.status(500).send(e.message)
//   }
// }

// +++++++++++++  GET ONE Therapist by ID  ++++++++++++++++++++++++++++++++++++

exports.find_therapist = async (req,res)=>{
    const { id } = req.params
    try{
        const targetTherapist = await (await Therapist.findById(id)).populate('bookings')
        if(!targetTherapist) return res.status(404).send('no Therapist with this ID found')
        res.json(targetTherapist)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

// +++++++++++++  GET ME  ++++++++++++++++++++++++++++++++++++

exports.me = async (req, res) => {
  const { therapist } = req
  try{
    res.send(therapist)
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

  // +++++++++++++++++ UPDATE a Therapist ProfilPhoto ++++++++++++++++++++++++++++++++++++

  // exports.update_therapist= async (req, res)=>{
  //   const { old_profilPhoto, new_profilPhoto} =req.body
  //   try{
  //     const updatedTherapist= await Therapist.findOneAndUpdate({"profilPhoto": old_profilPhoto}, {"profilPhoto": new_profilPhoto}, {new :true}) 
  //     res.json(updatedTherapist)
  //   } catch (e) {
  //     res.status(500).send(e.message)
  //   }
  // }

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
