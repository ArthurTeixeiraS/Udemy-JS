//Concatenando Arrays

const a1 = [1,2,3]
const a2 = [4,5,6]
/* let a3 = a1.concat(a2, [7,8,9], 'Arthur') */ //ou...
let a3 = [...a1,'Arthur',...a2, ...[7,8,9]]
console.log(a3)