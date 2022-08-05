import React from 'react'
import './Apps.css'
import image1 from '../../../resources/background.jpg'

export const Apps = (props) => {

    return (
        <div id='APPS' className={props.classes}>
            <h1 >Your Apps</h1>
            <div className='app-grid'>
                <div className='imageApp'><img src={image1} alt=''/></div>
                <div className='imageApp'><img src={image1} alt=''/></div>
                <div className='imageApp'><img src={image1} alt=''/></div>
                <div className='imageApp'><img src={image1} alt=''/></div>
                <div className='imageApp'><img src={image1} alt=''/></div>
                <div className='imageApp'><img src={image1} alt=''/></div>
                <div className='imageApp'><img src={image1} alt=''/></div>
            </div>
        </div>
    );

};