import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

  return(
    <div>
    <div className="sid-wall">
      <p>Welcome to the Eats-A-Lot Hot Dog Stand! The Rides-A-Lot Theme Park is open and your concession stand is right at the center of the action. Do you have what it takes to feed the multitudes?</p>
    </div>
    <div className="bradley-fake-stats-deal">
      <Link to="/instructions">Review the Instructions</Link>
      <Link to="/game">Start Cooking</Link>
    </div>
    </div>
  )
}

export default Home;