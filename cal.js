var resultE1=document.getElementById("result")
var historyE1=document.getElementById("history");

function answer(eachValue){

    document.getElementById("result").value += eachValue;
   
}
  

function result(){

    let firstVal = document.getElementById("result").value;

    let secondVal = eval(firstVal);

    document.getElementById("result").value = secondVal;
}

function clearall(){

    document.getElementById("result").value=""
}
  


