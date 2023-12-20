import express from express;
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from  '../models/userModel';

//register user
const registerUser = async (req, res) => {
    try {
        const {username, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({name, password: hashedPassword});
        await user.save();
        return res.status(201).json(user);
        
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
}

const loginUser = async (req, res) => {
    try {
        const{username, password} = req.body;
        //find the user by name
        const user = User.findOne({username});
        if(!user) 
        return res.status(401).json({message: "Invalid username or password"})

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) 
        return res.status(401).json({message: "Invalid username or password"})

        const token = jwt.sign({userId: user._id, isAdmin: user.isAdmin }, 'secret-key');
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }

}

export {registerUser, loginUser};