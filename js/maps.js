//adding an element in map


let m = new Map([
    ["name","Mounish"],["phone number",8904419595]
])

m.set("email","mnsh.pv3@gmail.com")


console.log(m);

console.log(m.size);
//getting an element from the map

let n = m.get("email");
// console.log(n);

// 'has' -> this returns a boolean value -> determine whether a key is existing or not

console.log(m.has("names"));

//delete

m.delete("name")
console.log(m)

// clear -> remove all the elements in the map

m.clear()
console.log(m);

// size  -> determine the size of the map

