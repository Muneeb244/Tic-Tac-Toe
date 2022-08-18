let container = document.querySelectorAll(".container");
let turn_identifier = document.querySelector(".turn");
let reset_btn = document.querySelector(".btn");
let chk = false;
let winning = ["","","","","","","","",""];
turn_identifier.innerHTML = "X's turn";


for(let i = 0; i<container.length; i++){
    container[i].addEventListener('click', function(){
        if(container[i].innerHTML == ""){
            let selected = turn();
            container[i].innerHTML = selected;
            winning[i] = selected;
            setTimeout(judge, 100);
        }else container[i].classList.add('disable');
    });
}


function turn(){
    if(!chk){
        chk = true;
        turn_identifier.innerHTML = "O's turn";
        return "x";
    }
    else{
        chk = false;
        turn_identifier.innerHTML = "X's turn";
        return "O";
    }
}

reset_btn.addEventListener('click', function(){
    reset();
});

function reset(){
    container.forEach(element => {
        element.innerHTML = "";
        element.classList.remove('disable');
    })
    chk = false;
    turn_identifier.innerHTML = "X's turn";
    winning = ["","","","","","","","",""];
    
}


function judge(){
    // Rows
    if((winning[0] == winning[1] && winning[0] != "") && (winning[1] == winning[2] && winning[2] != "") && winning [1] != ""){
        alert(`${winning[0]} wins`);
        reset();
    }
    else if((winning[3] == winning[4] && winning[3] != "") && (winning[4] == winning[5] && winning[5] != "") && winning [4] != ""){
        alert(`${winning[3]} wins`);
        reset();
    }
    else if((winning[6] == winning[7] && winning[6] != "") && (winning[7] == winning[8] && winning[8] != "") && winning [7] != ""){
        alert(`${winning[6]} wins`);
        reset();
    }
    // Columns
    else if((winning[0] == winning[3] && winning[0] != "") && (winning[3] == winning[6] && winning[6] != "") && winning [3] != ""){
        alert(`${winning[0]} wins`);
        reset();
    }
    else if((winning[1] == winning[4] && winning[1] != "") && (winning[4] == winning[7] && winning[7] != "") && winning [4] != ""){
        alert(`${winning[1]} wins`);
        reset();
    }
    else if((winning[2] == winning[5] && winning[2] != "") && (winning[5] == winning[8] && winning[8] != "") && winning [5] != ""){
        alert(`${winning[2]} wins`);
        reset();
    }


    // Diagonals
    else if((winning[0] == winning[4] && winning[0] != "") && (winning[4] == winning[8] && winning[8] != "") && winning [4] != ""){
        alert(`${winning[0]} wins`);
        reset();
    }
    else if((winning[2] == winning[4] && winning[2] != "") && (winning[4] == winning[6] && winning[6] != "") && winning [4] != ""){
        alert(`${winning[2]} wins`);
        reset();
    }
    if(winning.every(element => element != "")){
        alert("Draw");
        reset();
    }
}