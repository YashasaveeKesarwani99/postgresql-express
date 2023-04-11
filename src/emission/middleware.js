const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next) => {
    const token = req.headers['authorization'];

    if(!token) res.status(401).send({message:"No token provided"})

    jwt.verify(token, process.env.SECRETKEY, (err, decoded)=>{
        if(err) throw err;

        req.userId = decoded.id
        next();
    })
}

module.exports = {
    verifyToken
}