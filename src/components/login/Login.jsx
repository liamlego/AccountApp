import React from 'react'
import { useState, useEffect } from 'react'
import {Button} from '../ui/Button'
import './Login.css'
import { submitLogin } from '../../api/Requests'
import { NewAccount } from './NewAccount'

export const LoginPage = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [invalid, setInvalid] = useState(false);
    const [requestAccount, setRequestAccount] = useState(false);

    const [hide, setHide] = useState('');

    function handleUChange(event) {
        setUsername(event.target.value);
    }

    function handlePChange(event) {
        // broken but still kinda works

        if (event.key === 'Shift') return;

        if (event.key === 'Enter') {
            submit();
        } else {
            if (event.keyCode === 8) {
                setPassword(password.substring(0, password.length-1));
                setHide(hide.substring(0, hide.length-1));
            } else {
                setPassword(password+event.key);
                setHide(hide+'*');
            }
        }
        
    }

    function submit() {
        if (username.length > 0 && password.length > 0) {     

            // from Requests.jsx
            submitLogin(username, password).then((res) => {
                
                let valid = res.data.response;
                if (valid !== 'ERROR') {
                    if (valid) {
                        props.logIn(true);
                        props.setUsername(username);
                        props.setPassword(password);
                    } else {
                        setInvalid(true);
                    }
                    setUsername('');
                    setPassword('');
                    setHide('');
                }
            });
        }
    }

    function handleNewAccount() {
        setRequestAccount(true);
    }

    function handleOver() {
        document.querySelector("button").style.color = "black";
    }

    function handleLeave() {
        document.querySelector("button").style.color = "blue";
    }

    return (
        <>
            
            <div className='loginPage'>
                <div className='banner'>
                    <p className='logintitle'>AppSuite Account</p>
                </div>
                <div className='loginForm'>
                    {invalid ? <p className='invalid'>Invalid username or password</p> : <></>}
                    <form>
                        <label>
                            Username
                            <br />
                            <input type="text" name='username' value={username} onChange={handleUChange}/>
                        </label>
                        <br />
                        <label>
                            Password
                            <br />
                            <input type="text" name='password' value={hide} readOnly={true} onKeyDown={handlePChange}/>
                        </label>
                    </form>
                    <br />
                    <button id='nABtna' onClick={handleNewAccount} onMouseOver={handleOver} onMouseLeave={handleLeave}>Create New Account</button>
                    <br />
                    <br />
                    <Button text="Login" size="2" action={submit}/> 
                    
                </div>

            </div>
            {requestAccount && <NewAccount />}
        </>
    );
};