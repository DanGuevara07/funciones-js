function esPrimo(x){
    if(x == 1) return false;
    if(x == 0) return false;
    for(let i=2; i<=x/2; i++){
        if(x % i === 0) return false;
    }
    return true;
}
document.getElementById("checkbutton").onclick=function(){
    let x = document.getElementById("numbertocheck").value;
    if(esPrimo(x)){
        document.getElementById("result").innerHTML=`<h1 class="badge bg-success fs-1">El numero ${x} es primo </h1>`
    }
    else{
        document.getElementById("result").innerHTML=`<h1 class="badge bg-danger fs-1">El numero ${x} no es primo </h1>`
    }
    
}
document.getElementById("backbutton").onclick=function(){
    window.location.href="./index.html"
}





