function FizzBuzz(num) {
    if (typeof num === 'number') {
        if (num < 0 || num > 100) {
            return "Digite um numero entre 1 e 100"
        }
        if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
        if (num % 3 === 0) return "Fizz";
        if (num % 5 === 0) return "Buzz";
        return num
    } else return "Insira um número!!"
}

for(let i = 0; i <= 100; i++){
    console.log(i, FizzBuzz(i))
}