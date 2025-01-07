import React from 'react';

const SyntheticEvent = () => {
    function synEvent(e) {
        console.log('합성 이벤트 클릭');
        console.log(e);
    }

	function printInputValue(e){
		console.log(e.target.value);
		
	}
    return (
        <>
            <div>SyntheticEvent</div>
            <div>
                <button onClick={synEvent}>눌러요</button>
            </div>
			<br />
			<input type="text" placeholder="입력하삼" onChange={printInputValue} />
        </>
    );
};

export default SyntheticEvent;
