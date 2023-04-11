function esPrimo(x){
    if(x == 0) return false;
    if(x == 1) return false;
    for(let i=2; i<=x/2; i++){
        if(x % i === 0) return false;
    }
    return true;
}
function siguientePrimo(x){
    if(x==0) return 2;
    for(let i=x+1; i<=(2*x); i++){
        for(let j=2; j<=i; j++){
            if(j === i){
                return i;
            } 
            if(i % j === 0){
                break;
            }
        }
    }
}
document.getElementById("checkbutton").onclick=function(){
    let x = document.getElementById("numbertocheck").value;
    if(esPrimo(x)){
        document.getElementById("result").innerHTML=`<h1 class="badge bg-success fs-1">El numero ${x} es primo </h1> <h1 class="badge bg-primary fs-1">El siguiente numero primo es: ${siguientePrimo(parseInt(x))}</h1>`
    }
    else{
        document.getElementById("result").innerHTML=`<h1 class="badge bg-danger fs-1">El numero ${x} no es primo </h1> <h1 class="badge bg-primary fs-1 ">El siguiente numero primo es: ${siguientePrimo(parseInt(x))}</h1>`
    }
    
}
document.getElementById("backbutton").onclick=function(){
    window.location.href="./index.html"
}





