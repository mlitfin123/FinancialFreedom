import React from "react"

function LogIn() {
    return(

<div className="LogInPage">

    <h1 LogIn="introText uperLeft">Capital-Revenue!</h1>
    <div className="container center">
        {/* project name */}
        <h2 className="introText center">Financial Freedom!</h2>

        <p className="container introText center">Would you like to logIn</p>
      {/* </div> */}
            <p className="lead">
                Sign in below to see your personal Budget Plan
            </p>
        </div>


        <div id="main_form" className="addExpense">
            <form>
                <div className="form-group">
                    <label for="login-useremail">User Name</label>
                    <input type="email" className="form-control" id="login-useremail" placeholder="youremail@example.com" />
                </div>

                <div className="form-group">
                    <label for="login-pass">Email Address</label>
                    <input type="password" className="form-control" id="login-pass" placeholder="Enter your password" />
                </div>

                <button className="btn waves-effect waves-light" type="submit" id="login-submit" name="action">Submit
                </button>
            </form>
                <div className="login-error"><small id="login-error-text">Account not found! Please try again.</small></div>
        </div>
    
</div>)

}


export default LogIn 
