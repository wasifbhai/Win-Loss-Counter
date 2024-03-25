
let Matches = 0;

function changeCounter(type) {
    if (type === 'Win') {
        console.log('Win')
        Matches = Matches + 1
        document.getElementById('Matches').innerHTML = Matches;
    } 
    else if(type === 'Loss'){
        console.log('Loss')
        Matches = Matches - 1;
        document.getElementById('Matches').innerHTML = Matches;
    }
     else return;
}

 document.addEventListener('DOMContentLoaded', function(event) {
    document.getElementById('Matches').innerHTML = Matches;
 })

 document.getElementById('Win').addEventListener('click', function(event){
 changeCounter('Win')
 })

 document.getElementById('Loss').addEventListener('click', function(event){
    changeCounter('Loss')

 })

 
 var Total= 0;

function changeCounter(type){
    if (type==='Win'){
        console.log('Win')
        Total = Total + 1
        document.getElementById('Win').innerHTML = Total;
    } 
    else if(type==='Loss'){
        console.log('Loss')
        Total = Total -1
        document.getElementById('Loss').innerHTML = Total;
    }
     else return;
}

 document.addEventListener('DOMContentLoaded' , function(event) {
    document.getElementById("Total").innerHTML = Total;
 })

 document.getElementById('Win').addEventListener("click", function(event){
 changeCounter('Win')
 })

 document.getElementById('Loss').addEventListener("click" , function(event){
    changeCounter('Loss')
 })