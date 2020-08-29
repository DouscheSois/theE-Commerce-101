import React from "react";

import Founder from "../../images/founder.jpg";
import Cfo from "../../images/cfo.jpg";
import Ceo from "../../images/ceo.jpg";
import PersonOne from "../../images/person1.jpg";
import PersonTwo from "../../images/person2.jpg";
import PersonThree from "../../images/person3.jpg";
import PersonFour from "../../images/person4.jpg";
import PersonFive from "../../images/person5.jpg";
import PersonSix from "../../images/person6.jpg";
import PersonSeven from "../../images/person7.jpg";
import PersonEight from "../../images/person8.jpg";

const About = () => {
  return (
    <div className="about-page">
      <h1 className="about-page-title">Abous Us</h1>
      <div className="person-card">
        <div className="person-card-box">
          <img src={Founder} alt="founder" />
          <br />
          <small>Founder & Major Shareholder</small>
        </div>
        <p className="person-card-desc">
          Hi, I'm Mark and I love the military. My mission is to help bring
          awareness about the dangers in the world. No one can be 100% safe
          anymore. My priority is to empower the average citizen with
          gear/vehicle/weapons that can protect them and their family to the
          highest level possible.
        </p>
      </div>
      <div className="person-card">
        <div className="person-card-box">
          <img src={Cfo} alt="cfo" />
          <br />
          <small>Executive Committee President</small>
        </div>
        <p className="person-card-desc">
          Hi I'm Sarah and I served in the army for four years. I strongly
          believe in this company's mission. I liked the idea Mark proposed and
          we have been growing ever since. I want this company to be the main
          provider of protective gear to the families of the United States.
        </p>
      </div>
      <div className="person-card">
        <div className="person-card-box">
          <img src={Ceo} alt="ceo" />
          <br />
          <small>Finance Committee President</small>
        </div>
        <p className="person-card-desc">
          Hi I'm Amanda and I look after our finances here. I joined the company
          not too long ago and it's been great. I have learned a lot from Mark
          and Sarah. I believe our company will continue to grow because the
          world is a dangerous place and everyone will want to protect
          themselves at some point in their life. We will always be there for
          them.
        </p>
      </div>

      <h2 className="about-page-title-two">Meet the rest of the Team</h2>
      <div className="team">
        <div className="person-card-box">
          <img src={PersonOne} alt="personone" />
          <br />
          <small>Finance Manager</small>
        </div>
        <div className="person-card-box">
          <img src={PersonTwo} alt="persontwo" />
          <br />
          <small>Marketing Manager</small>
        </div>
        <div className="person-card-box">
          <img src={PersonThree} alt="personthree" />
          <br />
          <small>Software Manager</small>
        </div>
        <div className="person-card-box">
          <img src={PersonFour} alt="personfour" />
          <br />
          <small>Humar Resources Manager</small>
        </div>
        <div className="person-card-box">
          <img src={PersonFive} alt="personfive" />
          <br />
          <small>Logistics Manager</small>
        </div>
        <div className="person-card-box">
          <img src={PersonSix} alt="personsix" />
          <br />
          <small>Security Manager</small>
        </div>
        <div className="person-card-box">
          <img src={PersonSeven} alt="personseven" />
          <br />
          <small>Maintenance Manager</small>
        </div>
        <div className="person-card-box">
          <img src={PersonEight} alt="personeight" />
          <br />
          <small>Customer Service Manager</small>
        </div>
      </div>
    </div>
  );
};

export default About;
