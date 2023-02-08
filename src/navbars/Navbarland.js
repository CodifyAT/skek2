import React from "react";
function Navbar1(){
    return(<>
            <nav className="nav navbar-expand-lg bg-light navbar-sticky py-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <img id="bimg" src="se-high-resolution-logo-color-on-transparent-background.png"/>
          </a><a href="#home" id="bname1" className="navbar-brand">Shiksha Ekikaran</a>
        </div>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navitem" aria-controls="navitems" aria-expanded="false" aria-label="Toggle Navigation">
            <i id="togbut" className="bi bi-list" />
          </button>
        </div>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navitem">
            <ul className="navbar-nav">
              <li className="navbar-item px-3">
                <a className="nav-link" href="#home" style={{color: 'rgb(52, 19, 215)'}}><i className="bi bi-house-fill" />HOME</a>
              </li>
              <li className="navbar-item px-3">
                <a className="nav-link" href="#About" style={{color: 'rgb(52, 19, 215)'}}><i className="bi bi-list-ul" />ABOUT</a>
              </li>
              <li className="navbar-item px-3">
                <a className="nav-link" href="#contact" style={{color:'rgb(52, 19, 215)'}}><i className="bi bi-info-circle-fill" />CONTACT US</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
    );
}
export default Navbar1;