import React from 'react';

const Input = ({setData}) => {

	const handleInput = (e) => {
		setData((data) => {
			return {
				...data, content: e.target.value
			}
		})
	}

    return (
        <div>
            <label for='text'>내용: </label>
            <input type='text' id='text' placeholder='내용 입력하시오' onChange={handleInput} />
        </div>
    );
};

export default Input;
