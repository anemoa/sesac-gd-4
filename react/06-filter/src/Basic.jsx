import React from 'react'


// filter 함수 사용
// # ex1

let animals = ['dog', 'cat', 'bunny'];

let newAnimals = animals.filter((animal) => animal.length > 3)

console.log(newAnimals);

// # ex 2

let words = ['dog', 'snake', 'bunny'];

let result = words.filter((res) => {
	return res.includes('n');
})

console.log(result);


const Basic = () => {
  return (
	<div>
		<h1>filter(1)</h1>
		<ul>
			{newAnimals.join(', ')}
		</ul>

		<h2>filter(2)</h2>
		<ul>
			{result.join(', ')}
		</ul>
	</div>
  )
}

export default Basic