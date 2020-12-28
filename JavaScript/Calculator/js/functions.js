//Function used to selection of number and show them at the display//

function selection(val){

    let number = document.getElementById("display").value+=val

}

// Function used to make the math, which we use (eval) to do that//
function solve() 
         { 
             let x = document.getElementById("display").value // First get the data showed in display and hold it at variable X. //
             let y = eval(x) // Second call the eval with the parameter X inside and hold it at variable Y //
             document.getElementById("display").value = y  // Then call Y to be showed at display//
         } 


// Function used to delete the numbers//
function dlt(){

    let del = document.getElementById("display").value = ""
}

