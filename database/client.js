const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('Database - mobile health - connection established successfully')
})
.catch((e) =>console.log(e.message))


const client = mongoose.connection


client.on('error',()=>{
    // console.log(e.message)
})

module.exports = client