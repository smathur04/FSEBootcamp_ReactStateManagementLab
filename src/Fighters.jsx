import { useState } from "react";

const fighters = [
  {
    name: "Survivor",
    price: 12,
    strength: 6,
    agility: 4,
    img: "https://via.placeholder.com/150/92c952",
  },
  {
    name: "Scavenger",
    price: 10,
    strength: 5,
    agility: 5,
    img: "https://via.placeholder.com/150/771796",
  },
  {
    name: "Shadow",
    price: 18,
    strength: 7,
    agility: 8,
    img: "https://via.placeholder.com/150/24f355",
  },
  {
    name: "Tracker",
    price: 14,
    strength: 7,
    agility: 6,
    img: "https://via.placeholder.com/150/d32776",
  },
  {
    name: "Sharpshooter",
    price: 20,
    strength: 6,
    agility: 8,
    img: "https://via.placeholder.com/150/1ee8a4",
  },
  {
    name: "Medic",
    price: 15,
    strength: 5,
    agility: 7,
    img: "https://via.placeholder.com/150/66b7d2",
  },
  {
    name: "Engineer",
    price: 16,
    strength: 6,
    agility: 5,
    img: "https://via.placeholder.com/150/56acb2",
  },
  {
    name: "Brawler",
    price: 11,
    strength: 8,
    agility: 3,
    img: "https://via.placeholder.com/150/8985dc",
  },
  {
    name: "Infiltrator",
    price: 17,
    strength: 5,
    agility: 9,
    img: "https://via.placeholder.com/150/392537",
  },
  {
    name: "Leader",
    price: 22,
    strength: 7,
    agility: 6,
    img: "https://via.placeholder.com/150/602b9e",
  },
];

const Fighters = () => {
    const [money, setMoney] = useState(0);
    const [t_str, setStr] = useState(0);
    const [t_agi, setAgi] = useState(0);
    const [members, setMembers] = useState(0);
    return (
        <div className="fighters"> 
            <div>Money: {money}</div>
            <div>Team Strength: {t_str}</div>
            <div>Team Agility: {t_agi}</div>
            <div>Team: {members}</div>
            <div className="fighters">
                {fighters.map((fighter) => (
                    <div className="fighter-card" key={fighter.name}>
                        <img src={fighter.img} />
                        <h2>{fighter.name}</h2>
                        <p>Price: {fighter.price}</p>
                        <p>Strength: {fighter.strength}</p>
                        <p>Agility: {fighter.agility}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Fighters;
