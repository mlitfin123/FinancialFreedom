import React from "react"

function Home() {
  return(
<div class="container landingPageContainer">
  <div class="introImage center"></div>
  {/* company name */}
  <h1 class="introText uperLeft">Capital-Revenue!</h1>
  <div class="container center">
    {/* project name */}
    <h2 class="introText center">Financial Freedom!</h2>

    <p class="introText center">Would you like to logIn</p>
  </div>
 
    <button class="btn waves-effect waves-light" type="submit" id="login-submit" name="action">Submit
                <i class="material-icons right">logIn</i>
    </button>


</div>)
}
export default Home