let count =0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

function increment(){
    count += 1;
    countEl.innerText = +count;
}

function save(){
    let countStr = count +" - "
    saveEl.textContent += countStr;
    console.log(count);
    countEl.textContent=0;
    count=0;

}

function reset() {
    document.location.reload()
}
