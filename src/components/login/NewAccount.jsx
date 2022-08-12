import React from 'react'

import './NewAccount.css'

export const NewAccount = (props) => {

    function handleSubmit() {
        const username = document.getElementById('newUsernameForm').value;
        const password = document.getElementById('newPasswordForm').value;
        console.log(username + " " + password);
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
                    <input type='text' id='newPasswordForm'></input>
                    <br />
                    <br />
                    <input id='NEWACCOUNTSUBMIT' type='submit'></input>
                </form>
                </div>
            </div>
        </div>
    );
}