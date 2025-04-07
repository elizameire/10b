

5.uzdevums

function calculate() 
{   var operand1 = document.getElementById("operand1").value;
    var operand2 = document.getElementById("operand2").value;
    var operator = document.getElementById("operator").value;
    var result; }

    
    if (isNaN(operand1) || isNaN(operand2)) {
        result = "Skaitli";
    } else {
        operand1 = parseFloat(operand1);
        operand2 = parseFloat(operand2);

       
        switch (operator) {
            case "+":
                result = operand1 + operand2;
                break;
            case "-":
                result = operand1 - operand2;
                break;
            case "*":
                result = operand1 * operand2;
                break;
            case "/":
                if (operand2 === 0) {
                    result = "Nevar dalīt ar nulli!";
                }
                 else {
                    result = operand1 / operand2;
                }
                break;
            default:
                result = "Lūdzu ievadiet +, -, * vai /.";
        }
    }

    document.getElementById("result").innerText = "Rezultāts: " + result;

