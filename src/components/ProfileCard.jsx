// src/components/ProfileCard.jsx

import { useState } from "react";

function ProfileCard({name, role, bio}) {
    const [likes, setlikes] = useState(0);
    return (
        <div style={{border: '1px solid #ccc', padding: '20px', borderRadius: '10px'}}>
            <h2>{name}</h2>
            <p><strong>Role: </strong>{role}</p>
            <p>{bio}</p>

            <button onClick={() => setlikes(likes + 1)}>
                Like: {likes}
            </button>
        </div>
    );
}

export default ProfileCard;