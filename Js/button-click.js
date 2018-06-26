"option strict"
console.log("Wired up properly");


var theNumber = 0;
var inputctrl = document.getElementById("value");
//inputctrl.value = Number(theNumber);

function addto(){
    var inputctrl = document.getElementById("value");
 theNumber++;
 inputctrl.value= Number(theNumber);
 inputctrl.value%2
 if(inputctrl.value%2!=0){
    inputctrl.style.color="black"
    if(inputctrl.value%3==0){
       inputctrl.style.fontWeight = "bold";
   }else{
       inputctrl.style.fontWeight="normal";
  }
}
if (inputctrl.value%2==0){
    if(inputctrl.value%3==0){
        inputctrl.style.fontWeight="bold";
    }else{
        inputctrl.style.fontWeight="normal";
   }
    inputctrl.style.color="red";
    if (inputctrl.value == 0){
       inputctrl.style.color="black";
   }
}

}

function subtract(){
    var inputctrl = document.getElementById("value");
    theNumber--;
    inputctrl.value = Number(theNumber);
    if(inputctrl.value%2!=0){
        inputctrl.style.color="black"
        if(inputctrl.value%3==0){
           inputctrl.style.fontWeight = "bold";
       }else{
           inputctrl.style.fontWeight="normal";
      }
    }
    if (inputctrl.value%2==0){
        if(inputctrl.value%3==0){
            inputctrl.style.fontWeight="bold";
        }else{
            inputctrl.style.fontWeight="normal";
       }
        inputctrl.style.color="red";
        if (inputctrl.value == 0){
           inputctrl.style.color="black";
       }
    }

}