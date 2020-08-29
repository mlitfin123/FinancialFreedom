import React,{useState} from "react"
import { useFirebaseAuth } from "use-firebase-auth"
import { Redirect } from "react-router-dom";


import "./Home.css"

function Home() { 
  console.log(useFirebaseAuth())
  // const [redirect,setRedirectstate] = useState (null);
  const { user, loading, error, signInWithProvider } = useFirebaseAuth()
  const handlerLogIn=() => {
    signInWithProvider("google")
  }
  if (user) {
    return <Redirect to="/BudGet" />
  }
  return(

    <div className="container landingPageContainer">
      <div className="introImage center"></div>
      {/* company name */}
      <h1 className="introText uperLeft">Capital-Revenue!</h1>
      <div className="container center">
        {/* project name */}
        <h2 className="introText center">Financial Freedom!</h2>

        <p className="introText center">Would you like to logIn</p>
      </div>
    
        <button className="btn waves-effect waves-light" onClick={handlerLogIn} type="submit" id="logIn-submit" name="action">Submit
                    <i className="material-icons right">logIn</i>
        </button>


    </div>)
}
export default Home