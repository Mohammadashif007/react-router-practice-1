import React from 'react';

const Link = ({link}) => {

    const {name, path, id} = link
    return (
        <li className=''>
            <a href={path}>{name}</a>
        </li>
    );
};

export default Link;