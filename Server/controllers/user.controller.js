const userModel = require("../models/user.model");
const  bcrypt  = require("bcrypt")
const jwt = require("jsonwebtoken")
const secret = process.env.SECRET
const dotenv = require("dotenv")
const nodemailer = require('nodemailer')
dotenv.config()


const listOfStudent = (req, res) => {
  res.send([

    {
        "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    },
    {
        "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    }
  ]);
};
const welcomeUser = (req, res) => {
  res.send("welcome user");
};

const dashboard = (req, res) => {
  userModel.find().then((data)=>{
    console.log(data);
    res.send({data:data})
  })
  // res.send("my dashboard");
};

const verified =(req, res)=>{
  let token =req.headers.authorization.split(" ")[1]
  jwt.verify(token, secret,(err, result)=>{
    if(err){
      console.log(err);
      res.send({message: "authenticated failed", status:false, user:err})

    }
    else{
      res.send({message: "authenticated user", status:true, user:result})
      console.log(result);
    }
  } )
}


const sendMail=(req, res)=>{
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
      user:process.env.EMAIL,
      pass:process.env.PASSWORD
    }
  })

  let mailOptions = {
    from: process.env.EMAIL,
    to: "sulaimansodiq0125@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    // html: "<b>Hello world?</b>", // html body
  }
  
  transporter.sendMail(mailOptions).then((info)=>{
    console.log(info);
    res.status(201).json({message:"mail sent successfully", status: true})
  }) .catch((err)=>{
    console.log(err);
    res.status(500).json({message:"mail failed to send", status: false})

  })

}




// const transporter = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false, // Use `true` for port 465, `false` for all other ports
//   auth: {
//     user: "maddison53@ethereal.email",
//     pass: "jn7jnAPss4f63QBp6D",
//   },
// });



const signin = (req, res) => {
  res.send("welcome to signin");
};

const postSignin = async (req, res) => {
  const {email, password} = req.body;
let user;
try{
  user = await userModel.findOne({email:email}) 
  console.log(user);
} catch(error){
  return new Error
}

if(!user){
  res.status(400).json({
    Message:"user not found, please sign up!!"
  })
  console.log("user not found please sign up");
}

const correctPassword = bcrypt.compareSync(password, user.password)

if(!correctPassword){
  res.status(402).json({
    Message:"Wrong login details"
  })
  console.log("Wrong login details");
}
else{
  const token = jwt.sign({user:user._id}, secret,{expiresIn:"1h"})
  res.status(200).json({
    Message:"User logged in successfully",
    status:true, token:token
  })
  console.log("User logged in successfully");
}







  // userModel.findOne({email:email}).then((user)=>{
  //   if(user){
  //     console.log(user);
  //     res.send({message:"user logged in successfullly", status:true})

  //     const result = bcrypt.compareSync(password, user.password)
  //     if(!result){
  //       res.status(404).json({
  //         message:"user logged in successfully"
  //       })
  //       console.log(('wrong login details'));
  //     } else {
  //       res.status(202).json({
  //         message:"user login successfully", status:true
  //       })
  //       console.log('failed to sign in');

  //     }

  //   } else {
  //     console.log("failed to login");
  //   }
  // }).catch((err)=>{
  //   console.log(err);
  // })
//   try {
//     const { email, password } = req.body;
//     const checkers = await userModel.find({ email: email, password: password });
//     res.send("saved yes");
//     res.redirect("/dashboard");
//   } catch {
//     res.send("login error");
//   }
};

const signup = (req, res) => {
  res.send("welcome to signup");
};

const postSignup = async (req, res) => {
  try {
    console.log(req.body);
    const { firstName, lastName, password, email } = req.body;
    let user = new userModel({
      firstName: firstName,
      lastName: lastName,
      password: password,
      email: email,
    });
    await user.save();
    console.log("user is saved");
    res.send("saved");
    console.log(req.body);
  } catch (error) {
    console.log(error);
    console.log("user not saved");
    res.status(400).send("user not saved");
  }
};
module.exports = {
  welcomeUser,
  dashboard,
  signin,
  postSignin,
  signup,
  postSignup,
  listOfStudent,
  verified,
  sendMail
};
