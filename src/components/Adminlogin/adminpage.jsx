import react from "react"
import {Link, useParams} from 'react-router-dom'
import './adminpage.css'

const Admin = () => {
    return (
        <>
        <nav className="navbar1">
            <div className="navbar-logo">
                <img src="https://thumbs.dreamstime.com/b/white-cyber-attack-logo-hacker-icon-cyber-crime-threats-dark-background-cyber-attack-logo-hacker-icon-cyber-crime-threats-132951960.jpg" alt="Logo" />
            </div>
            <div className="navbar-name">
                <h1>Hi... Admin</h1>
            </div>
            <div className="navbar-links">
                <a href="#" className="nav-link">Home</a>
            </div>
        </nav>
       <div className="admin2">
       <div class="button-container1">
       <Link to={'/Addstaff'}> <button class="nav-button1">Add Staff</button></Link>
        <Link to={'/getstaff'}><button class="nav-button1">Display Staff</button></Link>
        <Link to={'/Addstudent'}><button class="nav-button1">Add Student</button></Link>
        <Link to={'/getstudent'}><button class="nav-button1">Dispaly Student</button></Link>
    </div>
       </div>
        </>

    );  
};

export default Admin;
