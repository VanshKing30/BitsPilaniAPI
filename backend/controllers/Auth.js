const bcrypt = require("bcrypt");
const User = require("../models/studentLoginInfo");
const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.signup = async (req , res)=>{
    try{
        const {name , email ,   collegeName , accountType ,  password} = req.body;
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success : false,
                message : "User alredy exist"
            });
        }

        let hashedPassword;

        try{
            hashedPassword = await bcrypt.hash(password,10);
        }
        catch(error){
            return res.status(500).json({
                success : false,
                message : "Error in hashing password",
            })
        }

        const user = await User.create({
            name , email , collegeName,accountType , password:hashedPassword
        });

        return res.status(200).json({
            success : true,
            message : "User created succesfully"
        });


    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success : false,
            message : "USer can not be registred"
        });
    }
}


exports.login = async (req , res)=>{
    try{
        const {email , password } = req.body;

        if(!email || !password){
            return res.status(400).json({
                success : false,
                message : "Please Fill all the deatils"
            });
        }

        

        let user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                success : false,
                message : "User is not registred"
            })
        }

        const payload = {
            email : user.email,
            id : user._id,
            // accountType : user.accountType,
        };

        if(await bcrypt.compare(password , user.password)){
            let token = jwt.sign(payload ,
                process.env.JWT_SECRET,
                {
                    expiresIn : "2h",
                });
                user = user.toObject();
                user.token = token;
                console.log(user);
                user.password = undefined;
                console.log(user);

                const options = {
                    expires : new Date(Date.now() + 3 *24 *60 *60*1000),
                    httpOnly : true,
                }

                res.cookie("token" , token , options).status(200).json({
                    success : true,
                    token,
                    user,
                    message : "User logged in succesfully"
                });
        }
        else{
            return res.status(403).json({
                success : false,
                message : "Pasword Incorrect"
            });
        }
    }

    catch(error){

        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Login failure",
        })
    }
}


