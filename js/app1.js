function esPar(x){
    return (x % 2 == 0)
}
document.getElementById("checkbutton").onclick=function(){
    let x = document.getElementById("numbertocheck").value;
    if(esPar(x)){
        document.getElementById("result").innerHTML=`<h1 class="badge bg-success fs-1">El numero ${x} es par </h1>`
    }
    else{
        document.getElementById("result").innerHTML=`<h1 class="badge bg-danger fs-1">El numero ${x} es impar </h1>`
    }
    
}
document.getElementById("backbutton").onclick=function(){
    window.location.href="./index.html"
}


