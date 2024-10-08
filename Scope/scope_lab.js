//Global scope
var globalVar ="I'm global variable";
let globalLet = "I'm global, but scoped with let";
const globalConst = "I'm global constant";
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

//Block scope
{
var blockVar ="I'm a block-scoped var";
let blockLet = "I'm block-scoped let";
const blockConst = "I'm block-scoped const";
//console.log(blockVar);
//console.log(blockLet);
}

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    console.log(functionVar); // Throws ReferenceError
    console.log(functionLet); // Throws ReferenceError
    console.log(functionConst); // Throws ReferenceError