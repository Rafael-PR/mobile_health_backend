const Client = require('../models/Client')

exports.list_clients= async (req, res)=>{
    try{
      const allClients= await Client.find({})
      res.json(allClients)
    } catch (e) {
      res.status(500).send(e.message)
    }}

exports.find_client= async (req, res)=>{
  const { id } = req.params
  try{
    const targetClient= await Client.findById(id)
    if (!targetClient) return res.status(404).send("no such client")
    res.json(targetClient)
  } catch (e) {
    res.status(500).send(e.message)
  }
}
exports.create_client= async (req, res)=>{
    const {first_name, last_name, address:{country, city, streetName, streetNumber, postalCode},emailAddress, phoneNumber, shortText } = req.body

    // console.log(first_name, last_name)
    // Student.create({first_name, last_name})
    // .then(data=> res.json(data))
    // .catch(err => res.status(500).send(err.message))
  
    try{
      const newClient= await Client.create({first_name, last_name, address:{country, city, streetName, streetNumber, postalCode},emailAddress, phoneNumber, shortText})
      res.json(newClient)
    } catch (e) {
      res.status(500).send(e.message)
    }
  
  }
exports.update_client= async (req, res)=>{
    const { old_name, new_name} =req.body
    try{
      const updatedClient= await Client.findOneAndUpdate({"last_name": old_name}, {"last_name": new_name}, {new :true}) //first old used as filter and then how you want to update it)
      res.json(updatedClient)
    } catch (e) {
      res.status(500).send(e.message)
    }
  }
exports.delete_client= async (req, res)=>{
    const { id } =req.params
    try{
      const deletedClient= await Client.findByIdAndDelete(id) 
      if (!deletedClient) res.status(404).send("No such client")
      res.json(deletedClient)
    } catch (e) {
      res.status(500).send(e.message)
    }
  }
exports.delete_clients= async (req, res)=>{
    const {condition, value} = req.body
    try{
      if(!condition || !value) throw new Error("Please pass valid conditions")
      const deletedInfo = await Client.deleteMany({[condition]: value})
      res.json(deletedInfo)
    } catch (e) {
      res.status(500).send(e.message)
    }
}