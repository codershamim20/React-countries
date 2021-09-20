import React from 'react';
import './Country.css'
const Country = (props) => {
    
    
    return (
        <div className='country'>
            <h1>This is : {props.name}</h1>
            <img src={props.flag} alt="" />
            <p>Capital is : { props.capital}</p>
        </div>
    );
};

export default Country;