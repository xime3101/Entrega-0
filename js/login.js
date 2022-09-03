function login() { 
    let usuario = document.getElementById("usuario").value 
    let contraseña= document.getElementById("contraseña").value
debugger;
    if (usuario===""||contraseña==="") {
        alert("Debe ingresar los datos")
        
    }
    else {
        localStorage.setItem("user",usuario)
         location.href= "index.html";
        
         
    } }
 
 document.addEventListener("DOMContentLoaded",function() {
    document.getElementById("boton").addEventListener("click", function(){
        login()
    })
 })