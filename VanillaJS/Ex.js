const title = document.querySelector("div.hello:first-child h1")

function handleTitleClick(){
    title.innerText = "That was a right click"
    title.style.color = "tomato"
}

function handleMouseEnter(){
    title.innerText = "Mouse is here!"
    title.style.color = "green"
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone!"
    title.style.color = "blue"
    
}

function handleWindowResize(){
    title.innerText = "you just resized"
    title.style.color = "purple"
}

//title.addEventListener("mouseup", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("mouseup",handleTitleClick)