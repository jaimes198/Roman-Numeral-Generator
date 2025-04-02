const output=document.getElementById("output")
const convert=document.getElementById("convert-btn")
const userInput=document.getElementById("number")
const romanNumerals ={
"M":1000,
"CM":900,
"D":500,
"CD":400,
"C":100,
"XC":90,
"L":50,
"XL":40,
"X":10,
"IX":9,
"V":5,
"IV":4,
"I":1,
}
function validateNum(inputValue){
  const num=parseInt(inputValue);
  if(inputValue.trim()===""||isNaN(num)){
 output.textContent="Please enter a valid number"
 return false;
  }
   if(num < 1){
 output.textContent="Please enter a number greater than or equal to 1"
 return false;
  }
  if(num>3999){
  output.textContent="Please enter a number less than or equal to 3999"
  return false;
  }
  return true
}
 function convertRomanNumeral(num){
let result="";
for(let key in romanNumerals){
while(num>=romanNumerals[key]){
  result+= key;
  num-=romanNumerals[key];
}
}
return result;
 }
 convert.addEventListener("click",()=>{
   const inputValue=userInput.value.trim();
   let result="";
if(!validateNum(inputValue))return;
  
  result=convertRomanNumeral(parseInt(inputValue))

output.textContent=result;
 })
