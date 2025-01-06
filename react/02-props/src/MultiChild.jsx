import React from 'react';
import './MultiChild.css';

const MultiChild = ({children}) => {
  return (
	<div className='multi'>
		{children}
	</div>
  )
}

export default MultiChild