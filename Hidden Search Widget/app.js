const input = document.getElementById("input");
input.style.width = "0px";
const check = () =>{
   if(input.style.width ==='0px'){
    input.style.width ='200px'
   }
   else{
    input.style.width ='0px'
   }
//    input.style.width ==='0px' ? input.style.width == '100px' : input.style.width == '0px';
}