import cloudinary from "../lib/cloudinary.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js"
import bcrypt from "bcryptjs";
export const signup = async(req,res) => {
    const {fullName,email,password} = req.body;
    try {
        if(!fullName || !email || !password){
            return res.status(400).json({message:"Please fill all the fields"});
        }
        if(password.length < 6){
            return res.status(400).json({message:"Password should be at least 6 characters long"});
        }
        const user = await User.findOne({email})

        if(user) return res.status(400).json({message:"User already exists"});

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const newUser = new User({
            fullName : fullName,
            email : email,
            password : hashedPassword,
        })

        if(newUser){
            generateToken(newUser._id,res);
            await newUser.save();

            res.status(201).json({
                _id : newUser._id,
                fullName : newUser.fullName,
                email : newUser.email,
                token : generateToken(newUser._id,res)
            })
        }
        else{
            return res.status(400).json({message:"User not created"});
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal server error"});
    }
}

export const login = async (req,res) => {
    const {email,password} = req.body;

    try {
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message:"User not found"});

        const ispwdcorrect = await bcrypt.compare(password,user.password)
        if(!ispwdcorrect) return res.status(400).json({message:"Invalid credentials"});

        generateToken(user._id,res);

        res.status(200).json({
            _id : user._id,
            fullName : user.fullName,
            email : user.email,
            profilepic : user.profilepic,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal server error"});
    }
}

export const logout = (req,res) => {
    try {
        res.cookie("jwt","", {maxAge:0})
        res.status(200).json({message:"Logged out successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal server error"});
    }
}

export const updateProfile = async (req,res) => {
    try {
        const {profilepic} = req.body;
        const userId = req.user._id

        if(!profilepic) return res.status(400).json({message:"Please provide a profile picture"});

        const uploadres = await cloudinary.uploader.upload(profilepic);

        const updateduser = await User.findByIdAndUpdate(userId,{profilepic:uploadres.secure_url},{new:true});

        res.status(200).json(updateduser)
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal server error"});
    }
}

export const checkAuth = (req,res) =>{
    try {
        res.status(200).json(req.user)
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal server error"});
    }
}
