import React from 'react'
import { useState, useEffect } from 'react';
import './Profile.css'
import background from '../../../resources/background.jpg'
import { getDescription } from '../../../api/Requests';

export const Profile = (props) => {


    const [username, setUsername] = useState("");
    const [profile, setProfile] = useState('http://localhost:3001/images/blank-profile.jpg'); // profile pic
    const [description, setDescription] = useState("");



    useEffect(() => {
        getDescription(props.username).then((res) => {
            setProfile(res.data.profileLink);
            setDescription(res.data.description);
        });
    }, []);

    function handleChangeProfilePic() {

    }

    return (
        <div id="PROFILE" className={props.classes}>
            <div className="column">
                <h1>Profile</h1>

                <h2>Username:</h2>
                <p id="username">{props.username}</p>
                <h2>Description:</h2>
                <p>
                    {description}
                </p>
            </div>

            <div className="column">

                <div className='imageContainer' onClick={handleChangeProfilePic}>
                    <img src={profile} alt=''/>
                </div>
            </div>
        </div>
    );


};
/*

*/