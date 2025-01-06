import React, { useState } from 'react'

export const CounterFunction = ({value}) => {
	const [number, setNumber] = useState(0);

	const onClickAdd = () => {
		setNumber(number + 1);
	}
  return (
	<div>
		<h1>Number: {number}</h1>

		<button onClick={onClickAdd}> {value} </button>
	</div>
  )
}
