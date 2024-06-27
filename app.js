let header = document.querySelector("header");
let headerImg = document.querySelector(".logotipoImg");
let titulos = document.getElementsByClassName("titulos"); 
let link = document.querySelector(".store");
let arrows = document.getElementsByClassName("arrow");
const menu = document.querySelector(".menu-lateral");
const background = document.querySelector(".dark");
const menuHamb = document.querySelector(".menu-hamb");
const hambLine = document.querySelector(".hamb-line *");
const hambLineB = document.querySelector(".hamb-line::before");
const hambLineA = document.querySelector(".hamb-line::after");
// const observer = new IntersectionObserver(
//     ([e]) => e.target.classList.toggle("active", e.intersectionRatio < 1),
//     {threshold: [1]}
// )
// // observer.observe(header)


window.onscroll = function(){scrollHeader()};

function scrollHeader() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      console.log("hola")
      header.style.backgroundColor = "#ffffff9e";
      header.style.borderBottomColor = "black";
      headerImg.setAttribute("src", "Img/logotipo-negro.png");
      link.style.color = "black";
      link.style.borderColor = "red";
      for(let arrow of arrows){
        arrow.setAttribute("src", "Img/flecha-abajo-negro.png");
      }
      for(let titulo of titulos){
            titulo.style.color = "black";
      }
      link.addEventListener("mouseleave", returnColor);
      hambLine.style.backgroundColor = "black !important";
      // hambLineB.style.backgroundColor = "black";
      // hambLineA.style.backgroundColor = "black";
      
    } else {
      header.style.backgroundColor = "transparent";
      header.style.borderBottomColor = "white";
      headerImg.setAttribute("src", "Img/logotipo.png");
      link.style.color = "white";
      link.style.borderColor = "white";
      for(let arrow of arrows){
        arrow.setAttribute("src", "Img/flecha-hacia-abajo.png");
      }
      for(let titulo of titulos){
        titulo.style.color = "white";
        link.addEventListener("mouseover", changeColor);
  }
      hambLine.style.backgroundColor = "white";
      hambLineB.style.backgroundColor = "white";
      hambLineA.style.backgroundColor = "white";
    

  
    }
  }



function changeColor(){
    link.style.color = "black";
}

function returnColor(){
    link.style.color = "white";
}

menu.addEventListener("click", darkBackground);
let clicks = 0;
function darkBackground(){

    clicks++;
    if(clicks % 2 !== 0){
        background.style.visibility = "visible";
       
    }
    else{
        background.style.visibility = "hidden";
        
    }
    
}


// background.addEventListener("click", fade);

// function fade(){
//     background.style.visibility = "hidden";
//     menuHamb.style.right = "26rem";
// }