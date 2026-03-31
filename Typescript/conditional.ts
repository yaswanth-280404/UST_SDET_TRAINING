let conditional: number = 9;
if(conditional == 9){
    console.log("Welcome to SDET......");
}

else{
    console.log("Not Here");
}

let num: number = -1;
if(num>0){
    if(num == 0){
        console.log("It's neither positive nor negative");
    }
    else{
        console.log("It's positive");
    }
}
else{
    console.log("It's negative");
}


let x: number = 17;
if(x >=6 && x<12){
    console.log("Good morning");
}
else if(x == 12){
    console.log("Good noon");
}
else if(x > 12 && x <= 17){
    console.log("Good afternoon");
}
else if(x > 17 && x <=19){
    console.log("Good evening");
}
else if(x > 19 && x <=23){
    console.log("Good night");
}
else{
    console.log("Invalid Time");
}