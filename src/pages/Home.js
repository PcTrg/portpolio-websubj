import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import FacbookIcon from "@material-ui/icons/Facebook";
import Avatar from "../assets/Avatar.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>
          I'm <span>Truong</span>
        </h2>
        <div className="prompt">
          <p>A learning web developer</p>
          <a href="https://github.com/PcTrg" target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100010537029420"
            target="_blank"
            rel="noreferrer"
          >
            <FacbookIcon />
          </a>
        </div>
      </div>

      <img src={Avatar} alt="avatar" />
    </div>
  );
}

export default Home;
