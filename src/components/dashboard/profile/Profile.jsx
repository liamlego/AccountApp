import React from 'react'
import { useState, useEffect } from 'react';
import './Profile.css'
import background from '../../../resources/background.jpg'

export const Profile = (props) => {


    const [username, setUsername] = useState("");
    const [profile, setProfile] = useState(null); // profile pic
    const [description, setDescription] = useState("");

    return (
        <div id="PROFILE" className={props.name}>
            <div className="column">
                <h1>Profile</h1>

                <h2>Username:</h2>
                <p id="username">username{username}</p>
                <h2>Description:</h2>
                <p>
                    This is a mock description
                    {description}
                </p>
            </div>

            <div className="column">

                <div className='imageContainer'>
                    <img src={background} alt=''/>
                </div>
            </div>
        </div>
    );


};
/*

*/