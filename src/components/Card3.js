import React from 'react';

const Card3 = (props) =>(
    <>
        <h2>{props.name}</h2>
        <h3>{props.price}</h3>
        <div className='button'>Select</div>
        <p>{props.cpu}</p>
        <p>{props.storage}</p>
        <p>{props.ram}</p>
        <p>{props.bandwith}</p>
        <p>{props.ip}</p>

    </>
);

export default Card3;