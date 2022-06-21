const result=document.querySelector("#calc_display");
const keys =document.querySelectorAll("button");


keys.forEach(key=>{
    key.addEventListener("click",function calculate(e) {
        const value = e.target.innerHTML
        if(value !== '=' && value !=='c'){
            result.innerHTML+=value
        }
        
        if(value ==='c'){
            result.innerHTML=""
        }
        
        if(value==='='){
            const total_result= eval(result.innerHTML)
            result.innerHTML = total_result
           
            
        }
        
        });
});


// let calculate=(number)=>{
    
//     result.value+=number;

// }
// let Result=()=>{
//     try{
//         result.value=eval(result.value);
//     }
//     catch(err){
//         alert("")
//     }

// }


// const calc_clear = document.getElementById("calc_clear");
// calc_clear.addEventListener("click", (e) =>{
//     switch(e.target.innerText){
//         case "c":
//         display.innerText = "";
       
        
//         default:
//             calc_display.innerText += e.target.innerText
//     }
// });
    
// const calc_display = document.getElementById("calc_display");
// calc_display.addEventListener("click", (e) =>{
//     switch(e.target.innerText){
//         case "c":
//             display.innerText = ""; 
           
//         default:
//             calc_display.innerText += e.target.innerText
//     }
// });

// const calc_7 = document.getElementById("calc_7");
// calc_7.addEventListener("click", (e) =>{
//     switch(e.target.innerText){
//         case "c":
//             display.innerText = "";
           
//         default:
//             calc_display.innerText += e.target.innerText
//     }
// });
// const calc_8 = document.getElementById("calc_8");
// calc_8.addEventListener("click", (e) =>{
//     switch(e.target.innerText){
//         case "c":
//             display.innerText = "";
           
//         default:
//             calc_display.innerText += e.target.innerText
//     }
// });
// const calc_9 = document.getElementById("calc_9");
// calc_9.addEventListener("click", (e) =>{
//     switch(e.target.innerText){
//         case "c":
//             display.innerText = "";
           
//         default:
//             calc_display.innerText += e.target.innerText
//     }
// });
// const calc_mul = document.getElementById("calc_mul");
// calc_mul.addEventListener("click", (e) =>{
//     switch(e.target.innerText){
//         case "c":
//             display.innerText = "";
           
//         default:
//             calc_display.innerText += e.target.innerText
//     }
// });
// const calc_4 = document.getElementById("calc_4");
// calc_4.addEventListener("click", (e) =>{
//     switch(e.target.innerText){
//         case "c":
//             display.innerText = "";
           
//         default:
//             calc_display.innerText += e.target.innerText
//     }
// });
// const calc_5 = document.getElementById("calc_5");
// calc_5.addEventListener("click", (e) =>{
//     switch(e.target.innerText){
//         case "c":
//             display.innerText = "";
           
//         default:
//           calc_display.innerText += e.target.innerText
//     }
// });
// const calc_6 = document.getElementById("calc_6");
// calc_6.addEventListener("click", (e) =>{
//     switch(e.target.innerText){
//         case "c":
//             display.innerText = "";
           
//         default:
//             calc_display.innerText += e.target.innerText
//     }
// });
// const calc_divide = document.getElementById("calc_divide");
// calc_divide.addEventListener("click", (e) =>{
//     switch(e.target.innerText){
//         case "c":
//             display.innerText = "";
           
//         default:
//             calc_display.innerText += e.target.innerText
//     }
// });
// const calc_1 = document.getElementById("calc_1");
// calc_1.addEventListener("click", (e) =>{
//     switch(e.target.innerText){

//         case "c":
//             display.innerText = "";
           
//         default:
//             calc_display.innerText += e.target.innerText
//     }
// });

// const calc_2 = document.getElementById("calc_2");
// calc_2.addEventListener("click", (e) =>{
//     switch(e.target.innerText){
//         case "c":
//                 display.innerText = "";
//                 break;
               
//         default:
//             calc_display.innerText += e.target.innerText
//     }
// });
// const calc_3 = document.getElementById("calc_3");
// calc_3.addEventListener("click", (e) =>{
//     switch(e.target.innerText){
//         case "c":
//                 display.innerText = "";
//                 break;
               
//         default:
//             calc_display.innerText += e.target.innerText
//     }
// });

// const calc_plus = document.getElementById("calc_plus");
// calc_plus.addEventListener("click", (e) =>{

    
        
//     switch(e.target.innerText){
//         default:
//             calc_display.innerText += e.target.innerText
//     }
// });

// const calc_point = document.getElementById("calc_point");
// calc_point.addEventListener("click", (e) =>{
//     switch(e.target.innerText){
//         default:
//           calc_display.innerText += e.target.innerText
//     }
// });

// const calc_0 = document.getElementById("calc_0");
// calc_0.addEventListener("click", (e) =>{
//     switch(e.target.innerText){
//         default:
//             calc_display.innerText += e.target.innerText
//     }
// });
// const calc_equal = document.getElementById("calc_equal");
// calc_equal.addEventListener("click", (e) =>{
 
               
//     switch(e.target.innerText){
//         default:
//             calc_display.innerText += e.target.innerText
//     }
// });

// const calc_minus = document.getElementById("calc_minus");

// calc_minus.addEventListener("click", (e) =>{
//     switch(e.target.innerText){
//         default:
//             calc_display.innerText += e.target.innerText
//     }
// });
