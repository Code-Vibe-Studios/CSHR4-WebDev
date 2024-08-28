function add(...input){
    let sum = 0;
    for (let i of input){
        sum = sum + i;
    }
    return sum;
}


console.log(add(1,2,3));
console.log(add(1,2,3,4,5,6,7,8));