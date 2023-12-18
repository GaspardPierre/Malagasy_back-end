import jwt from "jsonwebtoken";
import User from "../models/User";


const checkRole = (roles) => async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findByPk(decoded.id) ;
        if(!user) {
            return res.status(401).send( "Utilisateur non trouvé");
        }
        if (roles.includes(user.role)) {
            req.user = user ;
            next();
        } else {
            return res.status(403).send("Accès refusé");
        }
    }catch(error) {
        return res.status(401).send( "Non autorisé");
    }
};


export default checkRole;