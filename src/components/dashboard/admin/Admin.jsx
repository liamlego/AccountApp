import React from 'react'


export const Admin = (props) => {

    const st = {
        position: 'absolute',
        width: '95%',
        height: '95%',
        fontFamily: 'Ubuntu',
        display: 'flex',
        color: 'whitesmoke'
    };

    return (
        <div className={props.classes} id="ADMIN" style={st}>
            <h1>Admin</h1>
        </div>
    );

};