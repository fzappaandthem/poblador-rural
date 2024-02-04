import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import  { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
export const signup = async (req, res, next) => {
    const {username, email, password} = req.body;
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new User({
        username,
        email,
        password: hashedPassword
    });
    try {
        await newUser.save();
        res.json({message: "Usuario creado"});
    } catch (error) {
        next(error);
    }
}

export const signin = async (req, res, next) => {
    const {email, password} = req.body;
    try {
        const validUser = await User.findOne( {email} );
        if(!validUser) return next(errorHandler(404, "Usuario no encontrado"));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandler(404, "Contraseña incorrecta"));
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);
        const {password: pass, ...otherFields} = validUser._doc;
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(otherFields);
    } catch (error) {
        next(error);
    }
}