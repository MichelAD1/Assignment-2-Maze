let loser = false; 
window.onload = function() {
    document.getElementById('start').onclick = startClick;
    document.getElementById('end').onmouseover = overEnd;
    let boundaries = document.getElementsByClassName("boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
        
    }
    
};

function overBoundary() {
    loser = true;
    let boundaries = document.getElementsByClassName("boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.add("youlose");
    }
}

function startClick() {
    
    document.getElementById('status').textContent="Begin by moving your mouse over the 'S'.";
    loser = false;
    let boundaries = document.getElementsByClassName("boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.remove("youlose");
    }
    
}

function overEnd() {
    if(loser) {
        document.getElementById('status').textContent="You lost.";
    } else {
        document.getElementById('status').textContent="You win.";
    }
}