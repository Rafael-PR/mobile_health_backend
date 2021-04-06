const Therapist = require('../models/Therapist');
// const Client = require('../models/Client');
const bcrypt = require('bcrypt');

const login = async (req,res,next) =>{
    // res.send('Logging in...')
    const { emailAddress, password} = req.body

    let therapist = await Therapist.findOne({ emailAddress })
    if (!therapist) return res.status(400).send('Invalid Credentials 1')

    const match = await bcrypt.compare(password, therapist.password)

    if (!match) return res.status(400).send('Invalid Credentials 2')

    const token = therapist.createToken()
    //Anstatt 'therapist is logged in' senden wir nun einen token
    res.send(token)
}

module.exports = {
    login
}