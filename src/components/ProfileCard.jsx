// src/components/ProfileCard.jsx

import { use, useState } from "react";

function ProfileCard({name, role, bio}) {
    const [likes, setlikes] = useState(0);
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState("");
    const addSkill = () => {
        if (newSkill.trim() !== "") {
            setSkills([...skills, newSkill]);
            setNewSkill("");
        }
    }
    return (
        <div style={{border: '1px solid #ccc', padding: '20px', borderRadius: '10px'}}>
            <h2>{name}</h2>
            <p><strong>Role: </strong>{role}</p>
            <p>{bio}</p>

            <button onClick={() => setlikes(likes + 1)}>
                Like: {likes}
            </button>

            <p>add skill</p>
           <input type="text" value={newSkill} onChange={(e) => setNewSkill(e.target.value)}
           placeholder="add a skill" />
           <button onClick={addSkill}>add skill</button>
            <div>
                {skills.map((skill, index) => (
                <span key={index} style={{display: 'block', padding: '5px 10px', borderRadius: '5px', margin: '5px'}}>
                    {skill}
                </span>
            ))}
            </div>

        </div>
    );
}

export default ProfileCard;