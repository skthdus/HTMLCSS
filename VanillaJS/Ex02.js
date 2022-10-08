const title = document.querySelector("div.hello:first-child h1")

function handleWindowResize(){
    title.innerText = "you just resized"
    title.style.color = "purple"
    h1.className="clicked";
}