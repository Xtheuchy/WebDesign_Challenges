document.getElementById("registerLink").addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("RegistrarSection").style.display = "block"
});

document.getElementById("loginLink").addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById("RegistrarSection").style.display = "none";
    document.getElementById("loginSection").style.display = "block"
});