const  bcrypt  = require("bcrypt")
const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    firstName: {type:String, require: true},
    lastName: {type:String, require: true},
    password: {type:String, require: true},
    email: {type:String, require: true, unique:true},
    number: {type:String, require:true}
})

userSchema.pre("save",function(next){
    bcrypt.hash(this.password, 10).then((hashed)=>{
        this.password = hashed
        console.log(hashed);

        next()
    })
})

let userModel = mongoose.model("user", userSchema)


module.exports = userModel