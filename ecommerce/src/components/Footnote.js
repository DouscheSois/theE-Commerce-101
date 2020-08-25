import React from "react";
import githubIcon from "../images/github.svg";
import goLiveIcon from "../images/golive.svg";

const Footnote = () => {
  return (
    <div className="footnote">
      <h1>© 2020 - A douschesois creation</h1>
      <div className="links">
        <a href="https://www.github.com/douschesois/">
          <img src={githubIcon} alt="Github" />
        </a>
        <a href="https://www.douschesois.com/">
          <img src={goLiveIcon} alt="Go Live" />
        </a>
      </div>
    </div>
  );
};

export default Footnote;
