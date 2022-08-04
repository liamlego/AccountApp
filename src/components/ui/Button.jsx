import React from 'react'
import './Button.css'
import { useState } from 'react';

export const Button = (props) => {

    const [clicked, setClicked] = useState(false);

    const style = {
        top: props.top,
        left: props.left,
        fontSize: props.size + "vmin",
        backgroundColor: clicked ? '#4fe03f' : '#F3C141',
        borderColor: clicked ? '#4fe03f' : '#F3C141',
        width: props.width,
    };

    function handlePress() {
        setClicked(!clicked);
        props.action(); // perform function passed in
    }

    function reset() {
        setClicked(false);
    }

    return (
        <button type="button" 
        className='block' style={style}
        onMouseDown={handlePress} onMouseUp={reset} onMouseLeave={reset}>
            {props.text}
        </button>
    );
}