
let arr = [];

for(let i = 1; i <= 100; i++){
	arr.push(i);
}

console.log(arr);


let txt1 = 0;
for(let i = 0; i < arr.length; i++){
	txt1 += arr[i];
}
console.log('txt1 >>>', txt1);


let txt2 = 0;
for(let ar of arr){
	txt2 += ar;
}
console.log('txt2 >>', txt2);


let txt3 = 0;
arr.forEach(ar => txt3 += ar);
console.log('txt3 >>>', txt3);

console.log('---------------------');

const fruits1 = ['사과', '귤', '바나나', '딸기', '망고'];
const fruits2 = ['귤', '딸기', '블루베리'];


const same = fruits1.filter(fruit => fruits2.includes(fruit));

console.log('same >>', same);

const onlyF1 = fruits1.filter(fruit => !fruits2.includes(fruit));
console.log('onlyF1 >>>', onlyF1);

const onlyF2 = fruits2.filter(fruit => !fruits1.includes(fruit));
console.log('onlyF2 >>>', onlyF2);

const diff = [...onlyF1, ...onlyF2];



console.log('diff >>>', diff);