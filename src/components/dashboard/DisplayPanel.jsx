import React from 'react'
import { Profile } from './profile/Profile';
import { Apps } from './apps/Apps';
import { Account } from './account/Account';
import { Settings } from './settings/Settings';
import { useState } from 'react';
import './DisplayPanel.css'
import { useEffect } from 'react';

export const DisplayPanel = (props) => {

    const [profile, setProfile] = useState(true);
    const [apps, setApps] = useState(false);
    const [account, setAccount] = useState(false);
    const [settings, setSettings] = useState(false);

    function setStates(a, b, c, d) {
        setProfile(a);
        setApps(b);
        setAccount(c);
        setSettings(d);
    }

    useEffect(() => {
        switch (props.display) {
            case 1:
                setStates(false, true, false, false);
            break;
            case 2:
                setStates(false, false, true, false);
                break;
            case 3:
                setStates(false, false, false, true);
                break;
            default:
                setStates(true, false, false, false);
                
        }
    }, [props.display]);

    return (
        <div className='panelBody'>
            {
            (profile && <Profile name='profile1'/>)
            || 
            (apps && <Apps name='profile1'/>)
            ||
            (account && <Account name='profile1' />)
            ||
            (settings && <Settings name='profile1' />)
            }
        </div>
        
    )
    
};