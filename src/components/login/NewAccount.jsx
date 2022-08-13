import axios from 'axios';
import React from 'react'
import { Button } from '../ui/Button';

import './NewAccount.css'

export const NewAccount = (props) => {

    function handleSubmit() {
        const username = document.getElementById('newUsernameForm').value;
        const password = document.getElementById('newPasswordForm').value;
        const description = document.getElementById('newUserDescription').value;

        axios.post('http://localhost:3001/endpoint/newAccount', {
            username: username,
            password: password,
            description: description
        });
    }

    return (
        <div className='NewAccount'>
            <div className='newAccountBlock'>
                <h2 id='NEWACCOUNTITLE'>New Account</h2>
                <div id='NEWACCOUNTFORM'>
                <form onSubmit={handleSubmit}>
                    <h3>New Username</h3>
                    <input type='text' id='newUsernameForm'></input>
                    <h3>New Password</h3>
                    <input type='password' id='newPasswordForm'></input>
                    <br />
                    <h3>Description</h3>
                    <textarea id='newUserDescription'></textarea>
                    <br />
                    <input id='NEWACCOUNTSUBMIT' type='submit'></input>
                </form>
                </div>
                <div id='nbtnContainer'>
                    <Button text="Cancel" id='ncancelBtn' size="1.5" action={props.action} />
                </div>
                
            </div>
        </div>
    );
}