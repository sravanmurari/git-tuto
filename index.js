var myButton=document.getElementById("increment");
var cnt=document.getElementById("xyz");
var sc=document.getElementById("abc");
myButton.innerText="Increment";
var count=0;
function incre(){
    cnt.innerText = ++count;
}
function ref(){
    sc.innerHTML = "";
    count=0;
    cnt.innerHTML= count;
}
function save(){
    sc.innerHTML += " - "+ count;
}