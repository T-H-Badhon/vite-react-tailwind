import React from 'react';

const Link = ({item}) => {
    return (
        < li className='p-2'>
            <a href={item.link}>{item.navigationName}</a>
        </li>
    );
};

export default Link;