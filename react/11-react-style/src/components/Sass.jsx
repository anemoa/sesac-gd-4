import React from 'react';
import '../styles/Sass.scss';

const Sass = () => {
    return (
        <div>
            <div className='container'>
                <div className='box red'>1</div>
                <div className='box green'>2</div>
                <div className='box violet'>3</div>
            </div>
            <div className='box green'></div>
            <button className='btn'>button</button>
            <button className='btn-primary'>button primary</button>
        </div>
    );
};

export default Sass;
