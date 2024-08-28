// subtract the elements of the array and provide a single value -> 175-50-25 = 100

let arr = [175,50,25];

function subArray(total, num){    //arr[i], arr[i+1]
    return total - num;           //175-50 = 125, 125-25 = 100
}

function myFunc(){
    console.log(arr.reduce(subArray)); //
}


myFunc();