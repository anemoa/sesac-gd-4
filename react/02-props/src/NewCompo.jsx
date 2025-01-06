import React from 'react';

const NewCompo = ({ food = '한식' }) => {
    return (
        <div>
            <p>
                내가 좋아하는건 <span style={{ color: 'red' }}>{food}</span>
                이다.
            </p>
        </div>
    );
};

export default NewCompo;
