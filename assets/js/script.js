const mouseBlob = document.getElementById("mouse-blob")

document.onpointermove = function(event){
    const {clientX, clientY} = event;
    console.log(clientX, clientY)

    mouseBlob.animate({
        left : `${clientX}px`,
        top : `${clientY}px`
    },{
        duration : 300,
        easing : "ease",
        fill : "forwards"
    })
    // mouseBlob.style.left = `${clientX}px`
    // mouseBlob.style.top = `${clientY}px`
} 

const button = document.getElementsByTagName("button")
const noContent = document.getElementsByClassName("no-content")[0]


for(let i = 0; i < button.length ; i++){
    button[i].addEventListener("click", function(){
        noContent.style.display = "block"
    })
}

noContent.addEventListener("click", function(){
    noContent.style.display = "none"
})
