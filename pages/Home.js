import React from "react";
import ButtonsBottom from "../components/ButtonsBottom";
import DynamicText from "../components/DynamicText";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
// import Logo from '../components/Logo';

const Home = () => {
  return (
    <div>
      <div className="home">
        <Navigation />

        <SocialNetwork />

        <div className="home-main">
          <div className="main-content">
            <h1>Tymanta Fashion</h1>

            <h2>
           
              <DynamicText />
            </h2>
          </div>
        </div>
        <ButtonsBottom right={"/project-1"} left={"/project-2"} />
      </div>
    </div>
  );
};

export default Home;
