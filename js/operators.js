a = 5;
x += 1;   // x = x + 1
x -= 1;   // x = x - 1
x *= 1;   // x = x * 1
x /= 1;   // x = x / 1
x %= 1;   // x = x % 1
x **= 1;  // x = x ** 1
x <<= 1;  // x = x << 1
x >>= 1;  // x = x >> 1
x >>>= 1; // x = x >>> 1
x |= 1;   // x = x | 1
x &= 1;   // x = x & 1
x ^= 1;   // x = x ^ 1


// Comparison operators -> result of comparison oerators will always be a boolean value
a = 5;
b = 4;
a == b;   // a is equal to b
a != b;   // a is not equal to b
a > b;    // a is greater than b  -> true
a < b;    // a is less than b  -> false
a >= b;   // a is greater than or equal to b -> true
a <= b;   // a is less than or equal to b -> false

//Strict equality '===' -> comparing the type of the variable
p = 5; // integer
q = "5"; // string
p === q; // false
p !== q; // true

//Logical Operator
// '==' -> compare the value
// '===' -> compare the data type

//AND Operator '&&' -> If both the conditions are true then the final output is true
a = 5;
b = 4;
if(a > b && b === '5'){
    console.log(false);
}


//OR Operator '||' -> if any one of the condition is true then your final final output is true
if(a > b || b === '5'){
    console.log(true);
}

//NOT Operator '!' -> if your input true then the output is false
if(!(a > b)){
    console.log(false);
}

//String Operators
m = "mou"
n = "nish"
result = m + n; // concatenation -> "mounish"|| m = "mou" , n = "nish", result = "mounish"
m += n; // m = m+n; || m = "mounish", n = "nish"
x++; // x = x+1