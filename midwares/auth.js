const res = require("express/lib/response");

const isAdmin = (req, res, next) => {
    if(req.body.isAdmin){
        next();
    }
    res.json({error: "La operación requiere permisos de administrador"});
}

module.exports = {isAdmin,};