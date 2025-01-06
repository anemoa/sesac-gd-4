import React from 'react';
import './Button.css';

const Button = ({ link = 'https://www.google.com', children = 'google' }) => {
    return (
        <>
            {/* <a href={props.link}>
			<button>{props.children}</button>
		</a> */}
            <a href={link}>
                <button className='Button'>{children}</button>
            </a>
        </>
    );
};

export default Button;
