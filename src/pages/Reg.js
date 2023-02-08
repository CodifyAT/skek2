import React from "react";
function Register()
{
    return(   
    <div>
    <h3 id="h3">
        REGISTER
    </h3>
    <br/>
    <form>
        <div className="container">
            <div className="input-group mb-5"id="iname">
                <span className="input-group-text">Name</span>
                <input className="form-control" id="name" type="name" placeholder="Enter the Name of Educational Institute"></input>
            </div>

            <div className="input-group mb-5" id="Addr">
                <span className="input-group-text">Address</span>
                <textarea className="form-control" id="add" rows="3"></textarea>
            </div>

            <div  className="input-group mb-5" id="em">
                <span className="input-group-text">Email</span>
                <input className="form-control" id="em" type="email" placeholder="Enter Email"></input>
            </div>
            <div className="input-group mb-5">
                <span className="input-group-text">Enter web address</span>
                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
            </div>
            <div  className="input-group mb-5" id="cn">
                <span className="input-group-text">Contact Number</span>
                <input className="form-control" id="cn" type="tel" placeholder="Enter Contact Number"></input>
            </div>
            <br/>
            <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="state">Select State</label>
            <select className="form-select form-select" id="state">
                <option selected>Select state</option>
                <option value="1">state1</option>
                <option value="2">state2</option>
                <option value="3">state3</option>
              </select>
            </div>
            <br/>
            <div className="input-group ">
                <label className="input-group-text" htmlFor="dist">Select District</label>
              <select className="form-select form-select" id="dist">
                <option selected>Select District</option>
                <option value="1">dist1</option>
                <option value="2">dist2</option>
                <option value="3">dist3</option>
              </select>
            </div>
            <br/>
            <br/>
            <div className="input-group mb-5">
                <span className="input-group-text">Enter the size of the Institute</span>
                <input className="form-control" type="name" placeholder="Enter Number"></input>
            </div>
            <div className="input-group mb-5">
                <span className="input-group-text">Enter the number of classNamees:</span>
                <input className="form-control" type="number" placeholder="Enter the total number of classNamees"/>
            </div>
            <div className="input-group mb-5">
                <input type="file" className="form-control" id="inpf" aria-label="upload">
            </input>
            </div>
            <button type="submit" id="submit"className="btn btn-lg mb-5"><a href="Dashboard" id="bttn" >Sign Up</a></button>
        </div>
    </form>
    </div>
    );
}
export default Register;