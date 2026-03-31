function addNumbers()
{
    let i: number = 1;
    let j: number = 2;
    console.log(`Addition value is ${i+j}`);
}

function subtract(num1: number, num2: number){
    console.log(`Subtracted value is ${num1-num2}`);
}

function multiply(num1: number, num2: number) :number{
    return num1*num2;
}
addNumbers();
subtract(5,2);
let ans: number = multiply(10,10);
console.log(ans);

function personInfo(name: string, city: string, age?: number){
    if(age){
        console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
    }
    else{
        console.log(`Name: ${name}, City: ${city}`);
    }
}

personInfo("Yaswanth","Kannur",22);
personInfo("Anugrah K M","Kannur");


function overloading(num1: number, num2: number): number;
function overloading(str1: string, str2: string): string;
function overloading(arg1: any, arg2: any): any
{
    if(typeof arg1 === "number" && typeof arg2 === "number"){
        return arg1+arg2;
    }
    else if(typeof arg1 === "string" && typeof arg1 === "string"){
        return arg1.concat(arg2);
    }
    throw new Error("Invalid Arguement");
}
console.log(overloading(10,20));
console.log(overloading("Yaswanth"," S"));



const mul = (num1: number, num2: number) =>
{
    return num1*num2;
}





console.log(mul(90,10));

const show = (str: string)  : void=>
{
    console.log(`Hello, ${str}`);
}

show("K.M");