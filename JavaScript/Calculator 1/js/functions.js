function sel(val){
    let selection = document.getElementById("display").value+=val
}

function clean(){
    
    let clear = document.getElementById("display").value
    document.getElementById("display").value=clear.substring(0, clear.length-1)
     
}

function del(){
    let del = document.getElementById("display").value=""
}

function calculate(){
    let x = document.getElementById("display").value
    let y = eval(x)
    document.getElementById("display").value = y
}

