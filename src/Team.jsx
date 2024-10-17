import { useState } from "react";

export default function Team() {
    const [team, setTeam] = useState(11);

    const handleUpdate = () =>{
        const updateTeam = team +1;
        setTeam(updateTeam);
    }

    const handleRemove = () =>{
        setTeam(team - 1);
    }

    const teamArea = {
        border: "2px solid skyblue",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px"
    };

    return (
        <div style={teamArea}>
            <h3>Players: {team}</h3>
            <button onClick={handleUpdate}>Update Team</button>
            <button onClick={handleRemove}>Remove Player</button>
        </div>
    )
}