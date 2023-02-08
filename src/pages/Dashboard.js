import React from "react";
function Dashboard(){
    return(
 <div className="Random">
    <h2 id="dashhead">DASHBOARD</h2>
    <br/>
    <div className="container">
        <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvas1" role="button" aria-controls="offcanvas">
            Filters
        </a>
        <a id="downb"className="btn btn-secondary" role="button"><i className="bi bi-download"></i></a>
        <br/>
        <br/>
        <h4>This page contains graphical analysis of the entered data</h4>
    </div>
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvas1" aria-labelledby="offcanvas">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExample">Filter Option</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="dropdown mt-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Select state
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">State list</a></li>
            </ul>
          </div>
          <br/>
          <div className="dropdown mt-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Select District
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">District List</a></li>
              
            </ul>
          </div>
          <br/>
          <div className="dropdown mt-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Select Education level
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">School</a></li>
              <li><a className="dropdown-item" href="#">Intermediate</a></li>
              <li><a className="dropdown-item" href="#">College</a></li>
            </ul>
          </div>
          <br/>
          <div className="dropdown mt-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Select Gender
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Male</a></li>
              <li><a className="dropdown-item" href="#">Female</a></li>
            </ul>
          </div>
          <hr/>
        </div>
      </div>
    <br/>
    <div className="container">
        <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
    </div>
    <footer id="contact">
        <div className="mt-5 px-5">
            <h1 id="contact">Contact Us:</h1>
            <br/>
            <p id="addr"><i className="bi bi-envelope"></i>Email: atharvvt14@gmail.com</p>
            <br/>
            <p id="addr" ><i className="bi bi-person-rolodex"></i>  mobile no: 8688535513</p>
            <br/>
            <p id="addr"><i className="bi bi-github"></i>Github id:<a href="https://github.com/CodifyAT">CodifyAT</a></p>
        </div>
    </footer>
 </div>
    );
}
export default Dashboard;