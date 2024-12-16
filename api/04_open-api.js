async function getMovieData() {
	let word = 'marvel';
	const h3 = document.querySelector('h3');

	h3.innerText = `영화키워드 ${word}`;

	const res = await fetch(`http://www.omdbapi.com/?apikey=13ad8ee6&s=${word}`);
	const movieData = await res.json();
	console.log(movieData);
	

	// 불러온 데이터를 이용해서 html 요소 만들기
	for(let movie of movieData.Search){
		const ul = document.querySelector('ul');
		const div = document.createElement('div');
		const img = document.createElement('img');
		const p = document.createElement('p');

		img.src = movie.Poster;
		img.alt = movie.imdbID;
		p.innerText = movie.Title;

		div.append(img, p);
		ul.append(div);

	}
	
}