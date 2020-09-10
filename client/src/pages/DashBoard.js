import React from "react"
import "./DashBoard.css"
import InvestmentList  from "../component/InvestmentList";

function DashBoard() {
  return(

    <div className="DashBoard">
      <div className="introImage center"></div>
      {/* company name */}
      <p className="introText uperLeft">Capital-Revenue!</p>
      <div className="container center">
        {/* project name */}
        <p className="introText center">DashBoard!</p>

        <p className="introText center">What would you like to do</p>
      </div>
    
        <button className="btn waves-effect waves-light" type="submit" id="logIn-submit" name="action">Submit
                    <i className="material-icons right">logIn</i>
        </button>

        <InvestmentList />


    </div>)
}
export default DashBoard