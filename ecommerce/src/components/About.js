import React from "react";

import Ceo from "../images/ceo.jpg";
import ChiefVet from "../images/chiefvet.jpg";
import VetOne from "../images/vet1.jpg";
import VetTwo from "../images/vet2.jpg";
import VetThree from "../images/vet3.jpg";
import CaregiverOne from "../images/caregiver1.jpg";
import CaregiverTwo from "../images/caregiver2.jpg";
import CaregiverThree from "../images/caregiver3.jpg";
import CaregiverFour from "../images/caregiver4.jpg";
import CaregiverFive from "../images/caregiver5.jpg";
import CaregiverSix from "../images/caregiver6.jpg";
import CaregiverSeven from "../images/caregiver7.jpg";
import CaregiverEight from "../images/caregiver8.jpg";

const About = () => {
  return (
    <div className="about-page">
      <h1 className="about-page-title">Abous Us</h1>
      <div className="person-card">
        <div className="person-card-box">
          <img src={Ceo} alt="ceo" />
          <br />
          <small>Founder and CEO</small>
        </div>
        <p className="person-card-desc">
          Hi, I'm Mark and I love animals. I decided to start this business to
          help spread the word about animals. Technology has advanced rapidly in
          the last couple of years and now we are able to bond with animals
          never thought possible! Is it now possible and 100% safe to have a pet
          lion or tiger. Our number one priority is to help maintain and/or
          increase the population of dying species.
        </p>
      </div>
      <div className="person-card">
        <div className="person-card-box">
          <img src={ChiefVet} alt="chiefvet" />
          <br />
          <small>Chief Veterinarian</small>
        </div>
        <p className="person-card-desc">
          Hi I'm Sarah and I grew up in a farm in a rural town. My only friends
          were goats, cows, rabbits, chickens, llamas, horses, dogs, and cats.
          My interest in animals grew as I grew older. I admire Dr. Pol for his
          good work and I wanted to do the same. I joined Mark and the rest is
          history.
        </p>
      </div>
      <div className="person-card">
        <div className="person-card-box">
          <img src={VetOne} alt="vetone" />
          <br />
          <small>Veterinarian</small>
        </div>
        <p className="person-card-desc">
          Hi I'm Amanda and I have always enjoyed visiting my grandparents house
          because they had 3 lovely dogs and I would play with them everytime I
          visit. Unfortunately, a few years after meeting them, they were in a
          terrible accident and all three dogs died. I cried for months and
          swore I would always strive to help others in need.
        </p>
      </div>

      <div className="person-card">
        <div className="person-card-box">
          <img src={VetTwo} alt="vettwo" />
          <br />
          <small>Veterinarian</small>
        </div>
        <p className="person-card-desc">
          Hi I'm Cherry and I am from New York. I found my passion in animals
          while in high school during class. The teacher told the story of Hachi
          and I just thought is was the most loyal story I had ever heard. Short
          after, I became a vet and love every moment of it.
        </p>
      </div>

      <div className="person-card">
        <div className="person-card-box">
          <img src={VetThree} alt="vetthree" />
          <br />
          <small>Veterinarian</small>
        </div>
        <p className="person-card-desc">
          Hi I'm Tim and I am new recruit here at Animal & Animal First. My
          grandpa used to take me duck hunting when I was a little kid. He was
          very good and taught me the basics of hunting animals. I grew a
          passion for hunting but when I entered college my mindset changed.
          Instead of hunting animals I now wanted to learn more about their
          anatomy. This led me to become a veterinarian and it's been a great
          ride so far.
        </p>
      </div>
      <h2 className="about-page-title-two">Meet the rest of the Team</h2>
      <div className="team">
        <div className="person-card-box">
          <img src={CaregiverOne} alt="caregiverone" />
          <br />
          <small>Animal Caregiver</small>
        </div>
        <div className="person-card-box">
          <img src={CaregiverTwo} alt="caregivertwo" />
          <br />
          <small>Animal Caregiver</small>
        </div>
        <div className="person-card-box">
          <img src={CaregiverThree} alt="caregiverthree" />
          <br />
          <small>Animal Caregiver</small>
        </div>
        <div className="person-card-box">
          <img src={CaregiverFour} alt="caregiverfour" />
          <br />
          <small>Animal Caregiver</small>
        </div>
        <div className="person-card-box">
          <img src={CaregiverFive} alt="caregiverfive" />
          <br />
          <small>Animal Caregiver</small>
        </div>
        <div className="person-card-box">
          <img src={CaregiverSix} alt="caregiversix" />
          <br />
          <small>Animal Caregiver</small>
        </div>
        <div className="person-card-box">
          <img src={CaregiverSeven} alt="caregiverseven" />
          <br />
          <small>Animal Caregiver</small>
        </div>
        <div className="person-card-box">
          <img src={CaregiverEight} alt="caregivereight" />
          <br />
          <small>Animal Caregiver</small>
        </div>
      </div>
    </div>
  );
};

export default About;
