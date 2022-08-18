
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

document.addEventListener("DOMContentLoaded", function(){
    let usuario= localStorage.getItem("user");
debugger;
    if(usuario == null){
        alert("No hay nadie ingresado")
        location.href= "login.html";
    } 
  document.getElementById("cerrar").addEventListener("click",function(){
        localStorage.removeItem("user")
        location.href="login.html"
    })
    
})
