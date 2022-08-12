import React from 'react'
import './Dashboard.css'
import {Button} from  '../ui/Button'
import { DisplayPanel } from './DisplayPanel'
import { useState } from 'react';

export const Dashboard = (props) => {


    /*
    0 -> Profile
    1 -> Apps
    2 -> Account
    3 -> Settings
    */

    const [display, setDisplay] = useState(0);


    //if (!props.loggedIn) return (<></>);
    // props.username
    return (
        <>
            <header>
                <p className='title'>AppSuite Account</p>
            </header>
            <div className='navPanel'>
                <div className='buttons'>
                    <Button text="Profile" size='1.5' left='3%' top='10%' width='75%' action={() => setDisplay(0)}/>
                    <Button text="Apps" size='1.5' left='3%' top='12%' width='75%' action={() => setDisplay(1)}/>
                    <Button text="Account" size='1.5' left='3%' top='14%' width='75%' action={() => setDisplay(2)}/>
                    <Button text="Admin" size='1.5' left='3%' top='16%' width='75%' action={() => setDisplay(3)}/>
                </div>
            </div>

            <DisplayPanel display={display} username={props.username} password={props.password}/>
        </>
    );
};