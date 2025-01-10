import React, { useState } from 'react';
import Select from './Select';
import Input from './Input';
import Result from './Result';

const Total2 = () => {
	// # 1. 초기값 설정

	const [data, setData] = useState({
		logo: 'logo1',
		bgc: 'black',
		color: 'white',
		content: 'text',
	});

	console.log('data', data);
	

    return (
        <div>
			{/* props를 넘겨줄건데, setData 함수를 넘겨줘야 state 변경이 가능 */}
            <div>
                <Select setData={setData}/>
            </div>

			<div>
				<Input setData={setData} />
			</div>

			<div>
				<Result data={data} />
			</div>
        </div>
    );
};

export default Total2;
