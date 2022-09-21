import React from 'react';
import "./Display.css"
const Display = (props) => {
    const {gender,email,name,picture} = props.user;
    return (
        <div className='container'>
            <img src={picture.large} alt ='profile'></img>
            <h4>{name.first}</h4>
            <p>{gender}</p>
            <p>{email}</p>
        </div>
    );
};

export default Display;