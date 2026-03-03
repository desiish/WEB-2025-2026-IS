function sum(element1, element2, element3) { 
    return element1 + element2 + element3; 
}
 
console.log(sum(1, 2, 3)); // -> 
console.log(sum(1, "2", 3)); // ->  
console.log(sum(1, 2, "3")); // -> 
console.log(sum(1, true, 3)); // -> 
console.log(sum("a", true, 3)); // ->  
console.log(sum([1, 2, 3], 2, 3)); // ->
console.log(sum([1, 2, 3], [2], [3])); // -> 
console.log(sum({ a: "1" }, [2], [3])); // ->  

console.log(sum(1)); // ->
console.log(sum(1, 2)); // ->
console.log(sum(1, "2")); // -> 

console.log(sum(1, 2, 3, undefined, NaN)); // -> 
 
console.log(3 > 2 > 1); // -> 
console.log(("b" + "a" + +"b" + "a").toLowerCase()); // -> 