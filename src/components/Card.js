import React from 'react';

const Card = (props) =>(
    <>
        <h2>{props.name}</h2>
        <h3>{props.price}</h3>
        <p>{props.description}</p>
        <div className='button'>Buy Now</div>
    </>
);

export default Card;