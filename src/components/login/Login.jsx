import React from 'react'
import { useState, useEffect } from 'react'
import {Button} from '../ui/Button'
import './Login.css'
import axios from 'axios'

export const LoginPage = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [invalid, setInvalid] = useState(false);

    const [hide, setHide] = useState('');

    function handleUChange(event) {
        setUsername(event.target.value);
    }

    function handlePChange(event) {
        // broken but still kinda works
        setPassword(password+event.target.value[event.target.value.length-1]);
        setHide(hide+'*');
    }

    function wasEnter(event) {
        console.log(event.key);
        if (event.key === 'Enter') {
            submit();
        }
    }

    function submit() {
        if (username.length > 0 && password.length > 0) {
            
            // Express Endpoint -> http://localhost:3001/endpoint
            // Flask Endpoint -> http://localhost:5000

            axios.post('http://localhost:3001/endpoint', {
                username: username,
                password: password
            }   
            ).then((res) => {
                console.log(res.data.hello);
                let valid = res.data.response;
                if (valid) {
                    props.logIn(true);
                } else {
                    setInvalid(true);
                }
                setUsername('');
                setPassword('');
                setHide('');
            });


        }
    }

    return (
        <>
            
            <div className='loginPage'>
                <div className='banner'>
                    <p className='title'>AppSuite Account</p>
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
                            <input type="text" name='password' value={hide} 
                            onKeyPress={(e) => wasEnter(e)} onChange={handlePChange}/>
                        </label>
                    </form>
                    <br />
                    <Button text="Login" size="2" action={submit}/> 
                </div>
                 
            </div>
        </>
    );
};