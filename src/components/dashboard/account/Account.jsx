import React, { useCallback } from 'react'
import { useState } from 'react';
import {Button} from '../../ui/Button'
import { GetApp } from './GetApp';
import './Account.css'
import { useEffect } from 'react';

import axios from 'axios';

// import controller from './controller'

export const Account = (props) => {

    const [newPassword, setNewPassword] = useState(''); 

    const [requesting, setRequesting] = useState(false);

    const [canvasLoaded, setCanvasLoaded] = useState(false);


    function loadCanvas() {
        const canvas = document.querySelector(".animationCanvas");
        const context = canvas.getContext("2d");
        let x = 0;
        let y = 0;
        
        setInterval(() => {
            context.fillStyle = 'black';
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = 'green';
            context.fillRect(x, y, 50,25);
            
            if (x+50 < canvas.width)
                x++;
            if (y+25 < canvas.height)
                y++;
        }, 100);
    }

    useEffect(() => {
        if (!canvasLoaded) loadCanvas();




    }, []);

    function handlePInput(event) {

        if (event.key === 'Enter') {
            // Send request to change password
            if (newPassword.length > 0) {
                axios.post('http://localhost:3001/endpoint/newPassword', {
                    username: props.username,
                    password: newPassword
                });
                setNewPassword('');
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
                <h2>New Password</h2>
                <input type="password" name='password' onKeyDown={handlePInput} value={newPassword} readOnly={true}/>

                
            </div>

            <canvas className='animationCanvas'></canvas>

            {requesting && <GetApp username={props.username} setRequesting={setRequesting}/>}
        </div>
    );

};

