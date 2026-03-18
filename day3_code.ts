let target: number = 9.30;
let time: number = 8.50;
if(time < target){
    console.log("Early");
}
else if(time == target){
    console.log("On time");
}
else{
    console.log("Late");
}



let weight: number =  62;
let height: number =  172;
let bmi: number = 0;
bmi = weight/(weight*height);
if(bmi<18){
    console.log("Underweight");
}
else if (bmi > 18.5 && bmi < 25){
    console.log("Normal Weight");
}
else if(bmi >=25 && bmi<30){
    console.log("Over weight");
}
else if(bmi>30){
    console.log("Obese");
}



let newTime: number = 570;
let hour: number = 8;
let minutes: number = 30;
let k: number = hour*60 + minutes;
if(k<newTime){
    console.log("Early");
}
else if(k==newTime){
    console.log("On Time");
}
else{
    console.log("Late");
}



//---------------------- QUESTION 1 ----------------
let str: string = "TypeScript";
let strAns: string = "";
for(let i: number = str.length-1 ; i>=0 ; i--){
    strAns+=(str.charAt(i));
}
console.log(strAns);


//--------------------- QUESTION 2 ------------------
let str1: string = "correspondence";
let strAns1: string = "";
for(let i: number = 0 ; i<str1.length ; i++){
    let count: number = 0;
    for(let j: number = 0; j<str1.length ; j ++){
        if(str1[i]===str1[j]){
            count++;
        }
    }
    if(count === 1){
        strAns1+=str1[i];
    }
}
console.log(strAns1);

//-----------------Question 3-----------------
let strAns3: string = "";
let vowel: string ="aeiouAEIOU";
for(let i: number = 0 ; i<str1.length ; i++){
    let count: number = 0;
    for(let j: number = 0; j<str1.length ; j ++){
        if(str1[i]===str1[j]){
            count++;
        }
    }
    if(vowel.includes(str1[i])){
        if(count === 1){
            strAns3+=str1[i];
        }
    }
    else{
        strAns3+=str1[i];
    }
    
}
console.log(strAns3);

//----------------------------- Question 4 --------------------
let arrays: number[] = [10,4,3,5,1,2];
for(let i: number = 0 ; i < arrays.length ; i++){
    for(let j: number = i + 1; j < arrays.length ; j++){
        if(arrays[i]>arrays[j]){
            let temp: number = arrays[i];
            arrays[i] = arrays[j];
            arrays[j] = temp;
        }
    }

}
console.log(arrays);


// ----------------------------- Question 5 ----------------------
let strAns5: string = "";
for(let i: number = 0 ; i<str1.length ; i++){
    let count: number = 0;
    for(let j: number = 0; j<str1.length ; j ++){
        if(str1[i]===str1[j]){
            count++;
        }
    }
    if(vowel.includes(str1[i])){
        if(count === 1){
            strAns5+=str1[i];
        }
    }
}
console.log(strAns5.length);
