let a = 1;

// case 1: executing the block with only true condition   -> Infinite loop
// while(a <= 10){
//     console.log(a);
// }

//case 2: Stopping the loop with a break statement
// while(a <= 10){
//     console.log(a);
//     break;
// }

// case 3 : Stopping the loop with a condition
while(a <= 3){                    // 1<=3, 2<=3, 3<=3, 4<=3
    console.log(a);               //1,2,3
    a++;                          //2,3,4
}