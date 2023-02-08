import React from "react";
function Login(){
    return(
        <>
        <div className="card" style={{width: '500px'}}>
        <div className="card-header">
          Login
        </div>
        <ul className=" list-group list-group-flush">
          <li className="list-group-item">
            <form>
              <div id="em1">
                <label htmlFor="email1" className="form-label">Email:</label>
                <input type="email" id="email1" className="form-control" placeholder="Enter Email" />
              </div>
              <div id="pswd1">
                <label htmlFor="pswd" className="form-label">Password:</label>
                <input type="password" id="pswd" className="form-control" placeholder="Enter Password" />
              </div>
              <div className="mt-4">
                <label className="form-check-label" />
                <input className="form-check-input" type="checkbox" name="remember" /> Remember Me
              </div>
              <div id="button">
                <button type="submit" id="button1" className="btn">
                  <a href="Dashboard" style={{color: 'aliceblue'}}>Login</a>
                </button>
              </div>
            </form>
          </li>
        </ul>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
        </>
    )
}
export default Login;