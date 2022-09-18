
let loser = false;
let starts=false; 
window.onload = function() {
    document.getElementById('start').onclick = startClick;
    document.getElementById('end').onmouseover = overEnd;
    document.getElementById('game').onmouseleave=cheating;
    let boundaries = document.getElementsByClassName("boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
        
    }
    
};

function overBoundary() {
    loser = true;
    starts=false;
    let boundaries = document.getElementsByClassName("boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.add("youlose");
    }
}

function startClick() {
    starts=true;
    document.getElementById('status').textContent="Begin by moving your mouse over the 'S'.";
    loser = false;
    let boundaries = document.getElementsByClassName("boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.remove("youlose");
    }
    
}
function cheating() {
    if(starts){
        loser=true;
        let boundaries = document.getElementsByClassName("boundary");
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].classList.add("youlose");
        }
    }
    
}

function overEnd() {
    if(loser) {
        document.getElementById('status').textContent="You lost.";
    } else {
        document.getElementById('status').textContent="You win.";
    }
    starts=false;
}
