function getHistory() {
    return document.getElementById("previus-oprand").innerText;
}
function printHistory(num) {
    document.getElementById("previus-oprand").innerText = num;
}




function getOutPut() {
    return document.getElementById("current-oprand").innerText;
}

function printOutPut(num) {
    if (num === "") {
        document.getElementById("current-oprand").innerText = num;
    } else {
        document.getElementById("current-oprand").innerText = formatedNumber(num);
    }
    
}
function formatedNumber(num) {
    let n = Number(num);
    let n_value = n.toLocaleString("en");
    return n_value;
}

function reverseFormatedNumber(num) {
    return Number(num.replace(/,/g, ''));
}

let oprator = document.getElementsByClassName("oprator");
for(let i = 0; i < oprator.length; i++) {
    oprator[i].addEventListener('click', function() {
        if (this.innerText === "AC") {
            printOutPut("");
            printHistory("");
        } else if (this.innerText === "DEL") {
            let output = reverseFormatedNumber(getOutPut()).toString();
            if (output) {
                output = output.substr(0, output.length - 1);
                printOutPut(output);
            }    
        }
    })
}

let number = document.getElementsByClassName("number");
for(let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function() {
        let output = reverseFormatedNumber(getOutPut());
        if(output != NaN) {
            output = output + this.innerText;
            printOutPut(output);
        }
    })
}