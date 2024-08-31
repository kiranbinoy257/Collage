import mongoose, {Mongoose, model} from "mongoose";
const studentSchema = new mongoose.Schema
({

    name:{type:String},
    email:{type:String},
    blood:{type:String},
    number:{type:Number},
    otp:{type:Number},
    div:{type:String},
    stdid:{type:String},
    photo:{type:String},
    Marks:{type:String},
    password:{type:String}  
})

export default mongoose.model.student || mongoose.model('student', studentSchema)