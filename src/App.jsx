import react from 'react'
import React ,{Component} from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import User from './components/Adminlogin/admin'
import Admin from './components/Adminlogin/adminpage'
import Forgot from './components/Adminlogin/forgot'
import Staff from './components/Staff/staff'
import Contactstaff from './components/Staff/contact'
import Contact from './components/Staff/staffsection'
import Addstaff from './components/Staff/Addstaff'
import Getstaff from './components/Staff/getstaff'
import Staffdetails from './components/Staff/staffdetails'
import staffEdit from './components/Staff/staffedit'
import Addstudent from './components/Student/Addstudent'
import Getstudent from './components/Student/getstudent'
import Getstudentdata from './components/Student/studentdetails'
import studentEdit from './components/Student/studentedit'
import './App.css'

const App=()=> {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/admin' Component={User}/>
      <Route path='/adminpage' Component={Admin}/>
      <Route path='/forgot' Component={Forgot}/>
      <Route path='/staffsection' Component={Contactstaff}/>
      <Route path='/staff' Component={Staff}/>
      <Route path='/contact' Component={Contact}/>
      <Route path='/Addstaff' Component={Addstaff}/>
      <Route path='/getstaff' Component={Getstaff}/>
      <Route path='/staffdetails/:id' Component={Staffdetails}/>
      <Route path='/staffedit/:id' Component={staffEdit}/>
      <Route path='/Addstudent' Component={Addstudent}/>
      <Route path='/getstudent' Component={Getstudent}/>
      <Route path='/studentdetails/:id' Component={Getstudentdata}/>
      <Route path='/studentedit/:id' Component={studentEdit}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App;
