let names: string[] = ["Yaswanth","KM","Adi","Ninja","Ananda","Arjun","Aswin","Hari","Sura"];
console.log("Name array:", names);
for(let i: number = 0; i< names.length; i++){
    console.log(`Array item at ${i} is : ${names[i]} `);
}
names[0] = "Nanu";
console.log(names);

let numbers: readonly number[] = [0,1,2,3,4,5];
console.log(numbers);


let newArray = numbers.map((value) => value*2);
console.log(numbers);
console.log(newArray);

let oddArray = numbers.filter((value) => value % 2 != 0);
console.log(oddArray);

let sum = numbers.reduce((accumulator,value) => accumulator + value, 0 );
console.log(`Sum of array is : ${sum}`);


numbers.forEach((value) => console.log(`Value of the array is ${value}`));