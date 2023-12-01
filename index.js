//задача
function workDay(vol){
    let d = 0;
    let res;
    let proc = (vol/100)*10;
    if(vol < 10){
        alert("emergency situation!");
    }
    else{
        do{
            vol -=proc;
            d++;
        }while(vol >=10);
    }
    return d;
}
let days = workDay(100);
document.write("Days: " + days);


// Функции
// 1 задание: 
// function sayError(){
//     alert("Some error occurred!");
// }
// sayError();

// 2 задание:
// function showError(x){
//     alert("Error " + x + " occurred!");
// }
// showError("Out of memory");

// 3 задание:
// function createHeaders(N){
//     for(let i = 0; i < N; i++){
//         document.write("<h2>Header " + parseInt(i+1));
//         document.write("<br/>");
//     }
// }
// createHeaders(5);

// 4 задание:
// function checkPassword(x){
//     if(x === "Web" || x === "Step" || x === "JavaScript"){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let answer = checkPassword("Web");
// document.write("Answer: " + answer);

// 5 задание:
// function sign(x){
//     if(x < 1){
//         return -1;
//     }
//     else if(x > 0){
//         return 1;
//     }
//     else if(x===0){
//         return 0;
//     }
// }
// let answ = sign(3);
// document.write("Answer: " + answ);

// 6 задание:
// function showDay(x){
//     let str;
//     switch(x){
//         case 0:
//             return str = "Sunday";
//         case 1:
//             return str = "Monday";
//         case 2:
//             return str = "Tuesday";
//         case 3:
//             return str = "Wensday";
//         case 4:
//             return str = "Thursday";
//         case 5:
//             return str = "Friday";
//         case 6:
//             return str = "Saturday";
//         default:
//             return str = "Incorrect number!";
//     }
// }
// let day = showDay(1);
// document.write("Day: " + day);
