let span = document.getElementById('span');

let spanNumber = Number(span.innerText);

function plus(){
    spanNumber++;
    span.innerText = spanNumber;
}

function minus(){
    if(spanNumber>0){
        spanNumber--;
        span.innerText = spanNumber;
    }
}

function reset(){
    span.innerText = 0;
}