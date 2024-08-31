import mongoose, {Mongoose, model} from "mongoose";
const staffSchema = new mongoose.Schema
({

    name:{type:String},
    email:{type:String},
    blood:{type:String},
    number:{type:Number},
    salary:{type:Number},
    experience:{type:String},
    username:{type:String},
    photo:{type:String},
    password:{type:String},
    otp:{type:String}  
})

export default mongoose.model.staff || mongoose.model('staff', staffSchema)