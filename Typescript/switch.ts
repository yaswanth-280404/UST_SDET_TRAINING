let day: number = 5;
switch(day)
{
    case 1: console.log("Monday")
    break;
    case 2: console.log("Tuesday")
    break;
    case 3: console.log("Wednesday")
    break;
    case 4: console.log("Thursday")
    break;
    case 5: console.log("Friday")
    break;
    case 6: console.log("Saturday")
    break;
    case 7: console.log("Sunday")
    break;
}


let m : number = 13;
switch(true){
    case(m>=6 && m<12): console.log("Good morning")
    break;
    case(m==12):console.log("Good noon")
    break;
    case(m>12 && m<16): console.log("Good afternoon")
    break;
    case(m>= 16 && m<19): console.log("Good Evening")
    break;
    case(m>=19 && m<=23): console.log("Good Night")
    break;
}