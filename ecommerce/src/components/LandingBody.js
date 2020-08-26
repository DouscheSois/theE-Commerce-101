import React from "react";

import { AnimalCard } from "./AnimalCard";

import Bear from "../images/bear.jpg";
import Kangaroo from "../images/kangaroo.png";
import Jaguar from "../images/jaguar.jpg";
import Cow from "../images/cow.png";
import Koala from "../images/koala.png";
import Rabbit from "../images/rabbit.jpg";
import Llama from "../images/llama.png";
import Whale from "../images/whale.jpg";
import Cheetah from "../images/cheetah.jpg";
import Dog from "../images/dog.jpg";
import Zebra from "../images/zebra.jpg";

const LandingBody = () => {
  const animalDatabase = [
    {
      id: 1,
      name: "John",
      price: 22000,
      desc:
        "John is a Brown Bear. He is 15 years old. He likes to play ball and gofishing at the Californian rivers.",
      img: <img className="animal" src={Bear} alt="bear" />,
    },
    {
      id: 2,
      name: "Steve",
      price: 25000,
      desc:
        "Steve is a good Jaguar. He is 6 years old. He likes to play fetch and play cop and robbers in his spare time.",
      img: <img className="animal" src={Jaguar} alt="jaguar" />,
    },
    {
      id: 3,
      name: "Ronald",
      price: 3500,
      desc:
        "Steve is a good Dog. He is 4 years old. He likes to get on the couch and play in the mud whenever possible.",
      img: <img className="animal" src={Dog} alt="dog" />,
    },
    {
      id: 4,
      name: "Aussie",
      price: 6000,
      desc:
        "Aussie is a Kangaroo. She is 4 years old. She likes to dance and go to the Sydney Opera House.",
      img: <img className="animal" src={Kangaroo} alt="kangaroo" />,
    },
    {
      id: 5,
      name: "Grandma",
      price: 3000,
      desc:
        "Grandma is a beautiful Cow. She is 30 years old. She likes hugs and likes to play with the young calves. She is still full of energy.",
      img: <img className="animal" src={Cow} alt="cow" />,
    },
    {
      id: 6,
      name: "Tommy",
      price: 5000,
      desc:
        "Tommy is a Koala Bear. He is 8 years old. He likes to climb trees and move in slow motion to the music.",
      img: <img className="animal" src={Koala} alt="koala" />,
    },
    {
      id: 7,
      name: "Dory",
      price: 1000,
      desc:
        "Dory is a Rabbit. She is 4 years old. She likes to to healthy and jump around when the music is on.",
      img: <img className="animal" src={Rabbit} alt="rabbit" />,
    },
    {
      id: 8,
      name: "Tina",
      price: 7000,
      desc:
        "Tina is a Llama. She is 12 years old. She likes to go on hikes and likes to compete in spitting contests.",
      img: <img className="animal" src={Llama} alt="llama" />,
    },
    {
      id: 9,
      name: "Maia",
      price: 120000,
      desc:
        "Maia is a Blue Whale. She is 45 years old. She likes to swim and follow cruises around the world.",
      img: <img className="animal" src={Whale} alt="whale" />,
    },
    {
      id: 10,
      name: "Jerry",
      price: 7000,
      desc:
        "Jerry is a Zebra. He is 10 years old. He likes to paint and be in nature relaxing eating grass.",
      img: <img className="animal" src={Zebra} alt="zebra" />,
    },
    {
      id: 11,
      name: "Luke",
      price: 10000,
      desc:
        "Luke is a Cheetah. He is 4 years old. He likes to play tag and wrestle the other animals, even Maia!",
      img: <img className="animal" src={Cheetah} alt="cheetah" />,
    },
  ];

  return (
    <div className="landing-body">
      <div className="animal-cards">
        {animalDatabase.map((animal) => (
          <AnimalCard
            name={animal.name}
            price={animal.price}
            desc={animal.desc}
            img={animal.img}
            key={animal.id}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingBody;
