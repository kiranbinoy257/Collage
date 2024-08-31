
import userSchema from "./models/Admin.model.js"
import staffSchema from "./models/Staff.model.js"
import studentSchema from "./models/student.model.js"
import bcrypt from 'bcrypt'
import pkg from 'jsonwebtoken'
import nodemailer from 'nodemailer'


const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "3bf1ace8b5aa81",
      pass: "23d9ae6b829afb",
    },
  });

const {sign} = pkg





export async function addstaff(req,res){
    try{
        console.log(req.body);
        const {staff:{ name,email,blood,number,salary,experience,username,password },photo }= req.body;
        await staffSchema 
        .create({name,email,blood,number,salary,experience,username,photo,password})
        .then(()=>{
            res.status(201).send({msg:"successully created"});
        })
        .catch((error)=>{
            res.status(404).send({error:error});
        });
        }catch(error){
            res.status(500).send(error)
        }
}







export async function getstaff(req,res){
    try{
       
        const data=await staffSchema.find();
        res.status(200).send(data)
        console.log(data);
    }catch (error){
        res.status(400).send(error)
    }
}




export async function deletestaff(req,res){
    const {id}=req.params;
    const data= await staffSchema.deleteOne({_id:id});
    try {
        res.status(200).send({message:"successfully deleted the number"})

    } catch (error) {
        res.status(400).send({error})

    }
}

export async function getforedit(req,res) {
    try {
        const {id}=req.params;
        console.log(id);
        const data = await staffSchema.findOne({_id:id})
        console.log(data);
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}




export async function foredit(req,res){
    const {id}=req.params;
    const data= await staffSchema.findOne({_id:id});
    try {
        res.status(200).send({data})

    } catch (error) {
        res.status(400).send({error})

    }
}



export async function updatestaff(req,res){
    const {id}=req.params;
    const {...data}=req.body
    await staffSchema.updateOne ({_id:id},{$set:{...data}});
    try {
        res.status(201).send({message:"successfully updated "})

    } catch (error) {
        res.status(400).send({error:error})

    }
}












export async function addstudent(req,res){
    try{
        console.log(req.body);
        const {student:{ name,email,blood,number,otp,div,stdid,password },photo }= req.body;
        await studentSchema
        .create({name,email,blood,number,otp,div,stdid,photo,password})
        .then(()=>{
            res.status(201).send({msg:"successully created"});
        })
        .catch((error)=>{
            res.status(404).send({error:error});
        });
        }catch(error){
            res.status(500).send(error)
        }
}


export async function getstudent(req,res){
    try{
       
        const data=await studentSchema.find();
        res.status(200).send(data)
        console.log(data);
    }catch (error){
        res.status(400).send(error)
    }
}
export async function deletestudent(req,res){
    const {id}=req.params;
    const data= await studentSchema.deleteOne({_id:id});
    try {
        res.status(200).send({message:"successfully deleted the number"})

    } catch (error) {
        res.status(400).send({error})

    }
}

export async function getstudentedit(req,res) {
    try {
        const {id}=req.params;
        console.log(id);
        const data = await studentSchema.findOne({_id:id})
        console.log(data);
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}




export async function studentdata(req,res){
    const {id}=req.params;
    const data= await studentSchema.findOne({_id:id});
    try {
        res.status(200).send({data})

    } catch (error) {
        res.status(400).send({error})

    }
}



export async function updatestudent(req,res){
    const {id}=req.params;
    const {...data}=req.body
    await studentSchema.updateOne ({_id:id},{$set:{...data}});
    try {
        res.status(201).send({message:"successfully updated "})

    } catch (error) {
        res.status(400).send({error:error})

    }
}











export async function userRegister(req,res) {

    const {username,password,cpassword,email,name}=req.body

    if(!(name&&username&&password&&cpassword&&email))
        return res.status(404).send("fields are empty")

    if(password!==cpassword)
        return res.status(404).send("password not matched")

bcrypt.hash(password,10).then(async(hpassword)=>{
    userSchema.create({name,username,password:hpassword,email,otp:""}).then(()=>{
        return res.status(201).send({msg:"successfully created"})

    })
    .catch((error)=>{
        return res.status(400).send({error:error})
    })
}).catch((error)=>{
    res.status(400).send({error:error})
})
    
}




export async function userLogin(req,res){
    try {
        const {email, password}=req.body;
        const user=await userSchema.findOne({email})
        if(user == null)return res.status(404).send({msg:"user not found"})
            const id = user._id
        const success= await bcrypt.compare(password,user.password);
        if(success!==true) return res.status(400).send({msg:"password not matched"})
            const token=await sign ({id,email},process.env.JWT_KEY,{expiresIn:"24h"})
        return res.status(200).send(token)
    } catch (error) {
        res.status(400).send({error:error})
    }
}







export async function Home(req,res){
    const {id,username}=req.user
    console.log(req.user);
    res.status(200).send({username})
}





export async function Forget(req,res){
    const {email}=req.body;
    console.log(email);
const data=await userSchema.findOne({email:email});
if(!data)
    return res.status(400).send({msg:"user not found"})

const otpLength = 6;
  // Generate a random numeric OTP with exactly 6 digits
  const otp = Math.floor(100000 + Math.random() * 900000);
  console.log(otp);
//   update otp in data base code here
  const info = await transporter.sendMail({
    from: 'peterspidy5@gmail.com', // sender address
    to: "ajithaji9404@gmail.com", // list of receivers
    subject: "OTP", // Subject line
    text: "your valid otp", // plain text body
    html: `<b>${otp}</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);



}



export async function staffRegister(req,res) {

     const {staff:{ name,email,blood,number,salary,experience,username,password },photo }= req.body;

    if(!(name&&username&&password&&email))
        return res.status(404).send("fields are empty")

    // if(password!==cpassword)
    //     return res.status(404).send("password not matched")

bcrypt.hash(password,10).then(async(hpassword)=>{
    staffSchema.create({name,username,password:hpassword,email,blood,number,salary,experience,photo,otp:""}).then(()=>{
        return res.status(201).send({msg:"successfully created"})

    })
    .catch((error)=>{
        return res.status(400).send({error:error})
    })
}).catch((error)=>{
    res.status(400).send({error:error})
})
    
}

export async function staffLogin(req,res){
    try {
        const {email, password}=req.body;
        const staff=await staffSchema.findOne({email})
        if(staff== null)return res.status(404).send({msg:"user not found"})
            const id = staff._id
        const success= await bcrypt.compare(password,staff.password);
        if(success!==true) return res.status(400).send({msg:"password not matched"})
            const token=await sign ({id,email},process.env.JWT_KEY,{expiresIn:"24h"})
        return res.status(200).send(id)
    } catch (error) {
        res.status(400).send({error:error})
    }
}


export async function staffHome(req,res){
    const {id,username}=req.user
    console.log(req.user);
    res.status(200).send({username})
}


export async function getstaffone(req,res){
    console.log(req.user);
    const {email}=req.staff;
    const data= await staffSchema.find({email:email});
    try {
        res.status(200).send(data)

    } catch (error) {
        res.status(500).send(error)

    }
}