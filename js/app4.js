function dibujarCuadrado(x){
    let linea= "";
    for(let i=0; i<x ; i++){
        for(let j=0; j<x ; j++) linea+= (i===0 || i===x-1 || j===0 || j===x-1 ? "*&nbsp;" : "<span class='text-secondary'>*&nbsp;</span>")
        linea += "\n";
    }
    return linea;
}

document.getElementById("checkbutton").onclick=function(){
    output= "";
    for(x of dibujarCuadrado(document.getElementById("numbertocheck").value).split('\n')){
        output += `<div class="fs-1 p-0 square">${x}</div>`; 
    }

    document.getElementById("result").innerHTML=`<div>${output}<div>`
    // console.log(output);
    
}
document.getElementById("backbutton").onclick=function(){
    window.location.href="./index.html"
}