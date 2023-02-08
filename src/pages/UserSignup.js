import React from "react";
function Usignup(){
    return(
    <>
        <hr/>
        <br/>
        <h2>
            Create an account:
        </h2>
        <br/>
        <div id="brgrp" className="d-grid gap-5 col-4 mx-auto">
            <button id="b1" className="btn" type="button"><a href="UserRegistration" id="col">As User</a></button>
            <button id="b2" className="btn" type="button"><a href="Register" id="col">As Institute</a></button>
        </div>
    </>
    );
}
export default Usignup;