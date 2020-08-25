import React from "react"

function LogIn() {
    return(

<div class="Capital-Revenue!">
    <div class="FinancialFreedom">
        <p class="lead">
            Sign in below to see your personal Budget Plan
        </p>
    </div>

    <div id="main_form" class="makePost">
        <form>
            <div class="form-group">
                <label for="login-useremail">Budget Plan</label>
                <input type="email" class="form-control" id="login-useremail" placeholder="youremail@example.com">
            </div>

            <div class="form-group">
                <label for="login-pass">Email Address</label>
                <input type="password" class="form-control" id="login-pass" placeholder="Enter your Budget password">
            </div>

            <button class="btn waves-effect waves-light" type="submit" id="login-submit" name="action">Submit
                <i class="">send</i>
            </button>
        </form>
        <div class="login-error"><small id="login-error-text">Account not found! Please try again.</small></div>
    </div>
</div>)

}


export default LogIn 
