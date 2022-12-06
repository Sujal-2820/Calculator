var Number1 = document.getElementById("num1");
var Number2 = document.getElementById("num2");
var operation;
var res = document.getElementById("RESULT");

document.getElementById("addition").addEventListener("click", () => {
    operation = "addition";
    document.getElementById("addition").style.backgroundColor="orange";
})

document.getElementById("subtraction").addEventListener("click", () => {
    operation = "subtraction";
    document.getElementById("subtraction").style.backgroundColor="orange";
})

document.getElementById("mult").addEventListener("click", () => {
    operation = "mult";
    document.getElementById("mult").style.backgroundColor="orange";
})

document.getElementById("div").addEventListener("click", () => {
    operation = "div";
    document.getElementById("div").style.backgroundColor="orange";
})

document.getElementById("result").addEventListener("click", () => {
    switch(operation){
        case "addition" :
            res.value = parseFloat(Number1.value) + parseFloat(Number2.value);
            break;
        
        case "subtraction" :
            res.value = parseFloat(Number1.value) - parseFloat(Number2.value);
            break;

        case "mult" :
            res.value = parseFloat(Number1.value) * parseFloat(Number2.value);
            break;

        case "div" :
            res.value = parseFloat(Number1.value) / parseFloat(Number2.value);
            break;
        
        defalut:
            res.value = " ";
            break;
    }
})

document.getElementById("reset").addEventListener("click", () => {
    window.location.reload();
})