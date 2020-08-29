import React from "react";

import { ProductCard } from "./ProductCard";

import Grenade from "../../images/grenade.png";
import Rifle from "../../images/rifle.png";
import Chopper from "../../images/chopper.png";
import FighterJet from "../../images/fighter-jet.png";
import Backpack from "../../images/backpack.png";
import Knife from "../../images/knife.png";
import WalkieTalkie from "../../images/walkie-talkie.png";
import Helmet from "../../images/helmet.png";
import MedicalBag from "../../images/medical-bag.png";
import Boots from "../../images/boots.png";
import GasMask from "../../images/gas-mask.png";
import Truck from "../../images/truck.png";

const LandingBody = () => {
  const newID = () => {
    return Math.floor(Math.random() * 1000000030);
  };

  const productDatabase = [
    {
      id: newID(),
      name: "AN/PRC-148",
      price: 750,
      desc:
        "The AN/PRC-148 Multiband Inter/Intra Team Radio (MBITR) is the most widely fielded handheld multiband, tactical software-defined radio, used by NATO forces around the world.",
      img: <img className="animal" src={WalkieTalkie} alt="walkietalkie" />,
    },
    {
      id: newID(),
      name: "STOMP Complete Medical Kit",
      price: 600,
      desc:
        "The STOMP is a fully stocked mobile military and trauma first aid pack. Ours kits are always packed when you order with over 300 quality items to ensure fresh in date medical gear.",
      img: <img className="animal" src={MedicalBag} alt="medical-bag" />,
    },
    {
      id: newID(),
      name: "MIRA Safety CM-7M Military Gas Mask ",
      price: 550,
      desc:
        "The CM-7M tactical gas mask is the ultimate chemical, biological, radiological, and nuclear (CBRN) defense system when used in conjunction with suitable filters or breathing apparatus. The military-grade technology used for this full-face respirator provides comprehensive protection against the full spectrum of CBRN agents and toxic industrial chemicals in the form of gases, vapors, and aerosols.",
      img: <img className="animal" src={GasMask} alt="gasmask" />,
    },
    {
      id: newID(),
      name: "5.11 Tactical RUSH72",
      price: 250,
      desc:
        "5.11 Tactical is a brand of clothing consisting of uniforms and tactical equipment for military, law enforcement and public safety personnel.",
      img: <img className="animal" src={Backpack} alt="backpack" />,
    },
    {
      id: newID(),
      name: "Garmont Men's T8 Bifida",
      price: 350,
      desc:
        "Unsurpassed confront accomplished with the PU Breathable Footbed, and the EVA insole. Zero optical refraction hardware at the instep for flawless performance in all operating environments.",
      img: <img className="animal" src={Boots} alt="boot" />,
    },
    {
      id: newID(),
      name: "OPS-CORE FAST XP HIGH CUT HELMET",
      price: 3000,
      desc:
        "The Ops-Core Future Assault Shell Technology (FAST) Helmet, is a combat helmet that is used by special forces units seeking to use an alternative headgear while trading some ballistic protection for comfortable headwear to use.",
      img: <img className="animal" src={Helmet} alt="helmet" />,
    },
    {
      id: newID(),
      name: "Ka-Bar 1220",
      price: 400,
      desc:
        "The combat knife is a fighting knife designed solely for military use and primarily intended for hand-to-hand or close combat fighting.",
      img: <img className="animal" src={Knife} alt="knife" />,
    },
    {
      id: newID(),
      name: "M67 Grenade x 100",
      price: 1000,
      desc:
        "The M67 grenade is a fragmentation hand grenade used by the United States military. The M67 grenade has a spheroidal steel body that contains 6.5 oz of composition B explosive.",
      img: <img className="animal" src={Grenade} alt="grenade" />,
    },
    {
      id: newID(),
      name: "M16 rifle",
      price: 5500,
      desc:
        "The M16 rifle is a family of military rifles adapted from the ArmaLite AR-15 rifle for the United States military.",
      img: <img className="animal" src={Rifle} alt="rifle" />,
    },
    {
      id: newID(),
      name: "7000-MV GTT ",
      price: 850000,
      desc:
        "The 7000-MV GTT is ideal for off-road missions as a hauler of heavy-duty material or converted to heavily armored personnel carrier. These trucks offer high commonality among variants and are easily adapted to suit the mission. ",
      img: <img className="animal" src={Truck} alt="truck" />,
    },
    {
      id: newID(),
      name: "OH-58D Kiowa Warrior",
      price: 5000000,
      desc:
        "The Bell OH-58 Kiowa is a family of single-engine, single-rotor, military helicopters used for observation, utility, and direct fire support.",
      img: <img className="animal" src={Chopper} alt="chopper" />,
    },
    {
      id: newID(),
      name: "Lockheed Martin F-35A Lightning II",
      price: 80000000,
      desc:
        "The Lockheed Martin F-35 Lightning II is an American family of single-seat, single-engine, all-weather stealth multirole combat aircraft that is intended to perform both air superiority and strike missions.",
      img: <img className="animal" src={FighterJet} alt="fighterjet" />,
    },
  ];

  return (
    <div className="landing-body">
      <div className="animal-cards">
        {productDatabase.map((animal) => (
          <ProductCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default LandingBody;
