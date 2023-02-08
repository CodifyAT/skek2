import React from "react";
function Home(){
    return(
      <div>
      <div id="home" className="container">
        <header>
          <div id="car" className="carousel slide" style={{marginLeft: 'auto', marginRight: 'auto', width: '70%'}} data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#car" data-bs-slide-to={0} className="active" />
              <button type="button" data-bs-target="#car" data-bs-slide-to={1} />
              <button type="button" data-bs-target="#car" data-bs-slide-to={2} />
            </div>
            <div id="carimg" className="carousel-inner">
              <div className="carousel-item active">
                <img src="./images/Unknown.png" style={{width: '100%'}} />
              </div>
              <div className="carousel-item">
                <img src="./images/images.png" style={{width: '100%'}} />
              </div>
              <div className="carousel-item">
                <img src="./images/coaching.png" style={{width: '100%'}} />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#car" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" />
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#car" data-bs-slide="next">
              <span className="carousel-control-next-icon" />
            </button>
          </div>
          <h1>
            SHIKSHA EKIKARAN
          </h1>
          <br />
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <div className="container" />
          <div id="brgrp" className="d-grid gap-4">
            <button id="log" className="btn" type="button"><a href="Login" style={{color: 'white'}}>Login</a></button>
            <button id="reg" className="btn" type="button"><a href="UserSignUp" style={{color: 'white'}}>Sign Up</a></button>
          </div>
        </header></div>
      <br />
      <hr />
      <div id="About">
        <h2>
          About Us
        </h2>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <br />
        <h2>
          Our Goal
        </h2>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <footer id="contact">
        <div className="mt-5 px-5">
          <h1 style={{color: 'navy', fontSize: '50px'}}>Contact Us:</h1>
          <br />
          <p style={{color: 'navy', fontSize: '20px'}}><i className="bi bi-envelope" />Email: atharvvt14@gmail.com</p>
          <br />
          <p style={{color: 'navy', fontSize: '20px'}}><i className="bi bi-person-rolodex" />  mobile no: 8688535513</p>
          <br />
          <p style={{color: 'navy', fontSize: '20px'}}><i className="bi bi-github" />Github id:<a href="https://github.com/CodifyAT">CodifyAT</a></p>
        </div>
      </footer>
    </div>
    );
}
export default Home;