// 2. 프로미스 체이닝 이용한 경우
function add(n1, n2){
	return new Promise( (resolve, reject) => {
		setTimeout(() => {
			const result = n1 + n2;
			resolve(result);
		}, 1000);
	})
};

function mul(n){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const result = n * 2;
			resolve(result);
		}, 700);
	});
};

function sub(n){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const result = n - 1;
			resolve(result);
		}, 500);
	});
}

add(4, 3).then((res) => {
	console.log(res);

	return mul(res);
}).then((res) => {
	console.log(res);

	return sub(res);
}).then((res) => {
	console.log(res);
}).catch((error) => {
	console.log(error);
});