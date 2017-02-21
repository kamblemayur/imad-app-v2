//code for counter
var buttton=document.getElementById("counter");
var counter=0;
butoon.onClick=function(){
    
//first make request to
counter=counter+1;
var span=document.getElementById("count")
span.innerHTML=counter.toString();
    
}