import React from 'react';
import Item from './Item';

const List = ({items, title, backgroundColor}) => {
    return (
        <div className='list'>
            <h1 className='title'>{title}</h1>
            <h2 className='subTitle'>Картин: {items.length}</h2>
            <div className="items">
                {items.map(item=> 
                    <Item item={item} key={item.id}/>
                    )}
            </div>
        </div>
    );
};

export default List;