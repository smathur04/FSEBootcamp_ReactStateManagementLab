import { useState } from "react";

let money = 0
let t_str = 0
let t_agi = 0
let members = 0

const Fighters = () => {
    return (
        <div>
            <div>Money: {money}</div>
            <div>Team Strength: {t_str}</div>
            <div>Team Agility: {t_agi}</div>
            <div>Team: {members}</div>
        </div>
    );
};

export default Fighters;
