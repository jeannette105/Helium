let cercle =document.querySelector(".cercle");
let bar = document.querySelector(".nav-bar")

window.addEventListener("mousemove", (e) =>{
    cercle.style.top = e.pageY +"px";
    cercle.style.left = e.pageX +"px";
    bar.style.color = "red" 
    });

    // bar.addEventListener("click", (e) => {
    //       bar.style.backgroundColor = "red"
    // })

