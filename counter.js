let count = 0;
let increase = document.querySelector("#increment"); // to select the increase button
let reset = document.querySelector("#reset"); // to select the reset button
let decrease = document.querySelector("#decrement"); // to select the decrease button
let output = document.getElementById("Count");

// on click on increase button it increase the count
increase.addEventListener('click',increaseCount);

// on click it resets the count value i.e 0
reset.addEventListener('click',resetCount);

// on click on decrease button it decrease the count
decrease.addEventListener('click',decreaseCount);

function increaseCount(){
    ++count;
    output.innerText = count;
}
function decreaseCount(){
    --count;
    if(count<0){
        output.innerText = "ERROR";
        count = 0;
    }

    else{
        output.innerText = count;
    }
}
function resetCount(){
    count = 0;
    output.innerText = count;
}
