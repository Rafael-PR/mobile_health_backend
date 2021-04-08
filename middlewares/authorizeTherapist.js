const jwt = require('jsonwebtoken')

// Der Token kommt zurück im Header und wird aufgeteilt und die wichtigen 
// Elemente werden "gelesen" / Video 2:10 std
const authorizeTherapist = ( req,res,next )=>{
    const authHeader = req.headers.authorization

    if (!authHeader) res.status(400).send('No auth headers provided')
    // const token = authHeader.split('')[1]
    const [bearer, token] = authHeader.split(' ')
    console.log(token)
    if (!token) return res.status(401).send('Access denied1')

    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) return res.status(403).send('Access denied2')
        // attach something to the request == giving context
        req.therapist = payload;
        next()
    })
    
    
}

module.exports = authorizeTherapist