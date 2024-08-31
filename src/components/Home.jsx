import './Home.css'

function  Home(){
    return (
        <>
       <div>
       <div className="A1">Marian College  </div>
       <nav className="navbar">
      <div className="logo">
        <img src="https://th.bing.com/th?id=OIP.fFwxVK6NNQQP8xaFaxcVJwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Logo" /> {/* Replace with your logo path */}
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#admission">Admission</a></li>
        <li><a href="#courses">Courses</a></li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="login">
        <button>Login</button>
      </div>
    </nav>
   {/* IMAGE SLIDER */}

<section className="slider_container">
  <section className="slider">
    <div className="slide one">
      <img src="https://www.uc.utoronto.ca/sites/default/files/styles/banner_crop_1460x500/public/assets/banners/branding/Library.jpg?h=545f74cb&itok=6UaRW-PL" alt="" />
      <span className="caption"></span>
    </div>
    <div className="slide two">
      <img src="https://assets-global.website-files.com/5c2678bffd28a75624f00dde/5d4f4ef8fbb413859cbaa2d7_students.png" alt="" />
      <span className="caption"></span>
    </div>
    <div className="slide three">
      <img src="https://i.ytimg.com/vi/7D7PFVPotGs/maxresdefault.jpg" alt="" />
      <span className="caption"></span>
    </div>
  </section>
</section>
<div className="campus">
<div className="container">
      <h1>Campuses</h1>
      <div className="campus-grid">
        <div className="campus-card">
          <a href="#">
            <img src="https://www.stjohns.edu/sites/default/files/styles/660x440/public/2019-07/dsc_9761_1600x900.jpg?itok=L3UtQfSW" alt="Lakeview Campus" />
            <div className="campus-content">
              <div className="campus-title">Lakeview Campus</div>
              <div className="campus-description">Description here</div>
            </div>
          </a>
        </div>
        <div className="campus-card">
          <a href="#">
            <img src="https://th.bing.com/th/id/OIP.OBXQx_3NKH4sGAcXNP2gDgHaEH?w=271&h=180&c=7&r=0&o=5&pid=1.7" alt="East Campus" />
            <div className="campus-content">
              <div className="campus-title">East Campus</div>
              <div className="campus-description">Riverside Campus</div>
            </div>
          </a>
        </div>
        <div className="campus-card">
          <a href="#">
            <img src="media-campus.jpg" alt="Media Campus" />
            <div className="campus-content">
              <div className="campus-title">Media Campus</div>
              <div className="campus-description">SH School of Communication</div>
            </div>
          </a>
        </div>
      </div>
    </div>

</div>
       </div>

        </>
    )
}
export default Home