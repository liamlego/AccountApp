import React from 'react'
import { Button } from '../../ui/Button'
import './GetApp.css'

export const GetApp = (props) => {

    function handleSubmit() {

        const selector = document.getElementById("selectedApp");
        const value = selector.value;

        const reasonSelector = document.getElementById("accessReason");
        console.log(reasonSelector.value);

        console.log(value);

        props.setRequesting(false);
    }

    return (
        <div id="REQUESTOVERLAY">
            <div id="REQUESTFRAME">
                <h1 id="RTITLE">Get App Access</h1>
                <div className='form'>
                    <h2>App</h2>
                    <select id="selectedApp">
                        <option value='app1'>App1</option>
                        <option value='app2'>App2</option>
                        <option value='app3'>App3</option>
                        <option value='app4'>App4</option>
                    </select>
                    <h2>Intended uses</h2>
                    
                    <textarea id="neededUses"></textarea>
                    <Button text="Cancel" size='2' left='10%' width='15%' action={() => props.setRequesting(false)}/>
                    <Button text="Submit" size='2' left='20%' width='15%' action={handleSubmit}/>
                </div> 
                
                
            </div>
        </div>
    )

};