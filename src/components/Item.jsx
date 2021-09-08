import React from 'react';

const Item = ({item: {name, link, desc}}) => {
    return (
        <div className='item'>
            <div >
             <img  className='img'src={link} alt='new' />
            </div>
            <h1 className='title'> {name} </h1>
            <p className='desc'>{desc}</p>
        </div>
    );
};

export default Item;