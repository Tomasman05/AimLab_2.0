const img = document.querySelector(".nigga")
const pointField = document.querySelector("#pointField")
var points = 0
img.addEventListener("click", ()=>{
    setLocation()
    addPoints()
})

function setLocation(){
    img.style.position = 'absolute';
    img.style.top = document.body.clientHeight * Math.random() + 'px';
    img.style.left = document.body.clientWidth * Math.random() + 'px';

}
function addPoints(){
    points+=250
    pointField.value=points
}