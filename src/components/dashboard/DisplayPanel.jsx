import { Profile } from './profile/Profile';
import { Apps } from './apps/Apps';
import { Account } from './account/Account';
import { useState } from 'react';
import './DisplayPanel.css'
import { useEffect } from 'react';

export const DisplayPanel = (props) => {

    const [profile, setProfile] = useState(true);
    const [apps, setApps] = useState(false);
    const [account, setAccount] = useState(false);

    // const [loaded, setLoaded] = useState(false);

    function setStates(a, b, c, d) {
        setProfile(a);
        setApps(b);
        setAccount(c);
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
                //if () {
                // check if user has admin rights
                //}
                setStates(false, false, false, true);
                break;
            default:
                setStates(true, false, false, false);
                
        }
    }, [props.display]);

    return (
        <div className={'panelBody'}>
            {
            (profile && <Profile classes='profile1 panel-animation' username={props.username}/>)
            || 
            (apps && <Apps classes='profile1 panel-animation' username={props.username}/>)
            ||
            (account && <Account classes='profile1 panel-animation' username={props.username}/>)
            }
        </div>
        
    )
    
};

    // function addAnimation() {
    //     console.log("hello"+props.name);
    //     document.querySelector('.'+props.name).classList.add('panel-animation');
    // }

    // function removeAnimation() {
    //     console.log('bye'+props.name);
    //     document.querySelector('.'+props.name).classList.remove('panel-animation');
    // }

    
        // PUT IN useEffect()
        // For viewport animation
        // if (!loaded) {
        //     let options = {
        //         //root: document.querySelector('#scrollArea'),
        //         rootMargin: '0px',
        //         threshold: 0.5
        //     }
        //     let observer = new IntersectionObserver(addAnimation, options);

        //     let target = document.querySelector('.'+props.name);
        //     observer.observe(target);

        //     let options1 = {
        //         //root: document.querySelector('#scrollArea'),
        //         rootMargin: '0px',
        //         threshold: 0.0
        //     }
        //     let observer1 = new IntersectionObserver(removeAnimation, options1);
        //     observer1.observe(target);
        //     setLoaded(true);
        // }