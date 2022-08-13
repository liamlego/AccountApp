import React from 'react'
import { getApps } from '../../../api/Requests';
import './Apps.css'
import image1 from '../../../resources/background.jpg'
import { useEffect } from 'react';
import { useState } from 'react';

export const Apps = (props) => {

    const [appsLoaded, setAppsLoaded] = useState(false);
    const [apps, setApps] = useState([]);

    const [mapping, setMapping] = useState({
        "app1":false,
        "app2":false,
        "app3":false,
        "app4":false
    });

    useEffect(() => {
        if (!appsLoaded) {
            getApps(props.username).then((res) => {
                if (res.data.apps[0].length > 0) {
                    setApps(res.data.apps);
                    for (let element in res.data.apps) {
                        mapping[element] = true;
                    }
                }
            });
            setAppsLoaded(true); 
        } 
    }, [appsLoaded, apps]);

    return (
        <div id='APPS' className={props.classes}>
            <h1 >Your Apps</h1>
            <div className='app-grid'>
                {mapping[0] && <div className='imageApp'><img src={image1} alt=''/></div>}
                {mapping[1] && <div className='imageApp'><img src={image1} alt=''/></div>}
                {mapping[2] && <div className='imageApp'><img src={image1} alt=''/></div>}
                {mapping[3] && <div className='imageApp'><img src={image1} alt=''/></div>}
            </div>
        </div>
    );
};
/*

*/