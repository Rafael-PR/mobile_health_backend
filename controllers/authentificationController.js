const Therapist = require('../models/Therapist');
const Client = require('../models/Client');
const bcrypt = require('bcrypt');

// +++++++++++++++++++++++  LOGIN as Therapist  ++++++++++++++++++++++++++++++++++++++++++++++

// const login = async (req,res,next) =>{
//     // res.send('Logging in...')
//     const { emailAddress, password} = req.body

//     let therapist = await Therapist.findOne({ emailAddress })
//     if (!therapist) return res.status(400).send('Invalid Credentials 1')

//     const match = await bcrypt.compare(password, therapist.password)

//     if (!match) return res.status(400).send('Invalid Credentials 2')

//     const token = therapist.createToken()
//     // step 1 - Anstatt 'therapist is logged in' senden wir nun einen token
//     // res.send(token)
//     // step 2 - Den Token nicht im Body sondern im Header senden
//     // Header heisst x-authorization-token und angehängt wird der token
//     // Das gleiche auch im TherapistController
//     res.set('x-authorization-token',token).send('Therapist logged in successfully')
// }

// +++++++++++++++++++++++++++  LOGIN as USER  ++++++++++++++++++++++++++++++++++++++++

const login = async (req,res,next) =>{
    const { emailAddress, password } = req.body

    let user;
    const therapist = await Therapist.findOne({ emailAddress })
    const client =  await Client.findOne({ emailAddress })
    if (therapist) user = therapist
    else if (client) user = client
    else return res.status(400).send('Invalid Credentials 1')

    const match = await bcrypt.compare(password, user.password)
    if (!match) return res.status(400).send('Invalid Credentials 2')

    const token = user.createToken()
    res.set('x-authorization-token', token).send('User logged in successfully')
}
// +++++++++++++++++++++++  LOGIN as Client  ++++++++++++++++++++++++++++++++++++++++++++

module.exports = {
    login
}