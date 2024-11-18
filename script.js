function stringChop(str, size) {
	if(str === null){
		return[];
	}
  // your code here
	let chunk = [];
	for(let i = 0; i < str.length; i += size){
		chunk.push(str.slice(i,i+size));
	}
	return chunk;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
