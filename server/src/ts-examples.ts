function outer(){
    let a = 0;
    function inner(){
        a++;
        console.log(a);
    }
    return inner;
}

const f = outer();

f();
f();
f();
f();
f();

function sum(el1 : number, el2  : string) {
    return el1 + el2;
} 

sum(1, '2');

console.log(+'2')

