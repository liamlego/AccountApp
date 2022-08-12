import React from 'react'
import { useState } from 'react';
import {Button} from '../../ui/Button'
import { GetApp } from './GetApp';
import './Account.css'
import { useEffect } from 'react';

export const Account = (props) => {

    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState(''); 

    const [requesting, setRequesting] = useState(false);

    function loadCanvas() {

        const canvas = document.querySelector(".animationCanvas");

        const context = canvas.getContext("2d");

        context.fillStyle = 'green';
        context.fillRect(0, 0, 50,25);

    }

    useEffect(() => {
        loadCanvas();
    }, []);

    function handleUInput(event) {

        if (event.key === 'Enter') {
            // Send request to change password
            if (newUsername.length > 0) {

            }
            
        } else {
            if (event.key === 'Backspace'){
                setNewUsername(newUsername.substring(0, newUsername.length-1));
            } else {
                setNewUsername(newUsername+event.key);
            }
        }
    }
    function handlePInput(event) {

        if (event.key === 'Enter') {
            // Send request to change password
            if (newPassword.length > 0) {

            }
            
        } else {
            if (event.key === 'Backspace'){
                setNewPassword(newPassword.substring(0, newPassword.length-1));
            } else {
                setNewPassword(newPassword+event.key);
            }
        }
    }

    return (
        <div id="ACCOUNT" className={props.classes}>
            
            <div>
                <h1>Account</h1>
                <div id="requestApp">
                    <h2>Get App Access</h2>
                    <Button text="Get App" size='2' top='10%' width='10%' action={() => {setRequesting(true)}}/>
                </div>
                <h2>New Username</h2>
                <input type="text" name='username' placeholder={props.username} onKeyDown={handleUInput}/>
                <h2>New Password</h2>
                <input type="text" name='password' onKeyDown={handlePInput}/>

                
            </div>

            <canvas className='animationCanvas'></canvas>

            {requesting && <GetApp setRequesting={setRequesting}/>}
        </div>
    );

};