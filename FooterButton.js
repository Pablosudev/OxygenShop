
const buttonTop = document.getElementById("buttonTop")



function scrolllFunction () {
    if (document.documentElement.scrollTop >= 95) {
        buttonTop.style.display = "block";
    } else{
        buttonTop.style.display = "none";
    }
}


window.addEventListener("scroll", scrolllFunction)

buttonTop.addEventListener('click', () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 200);
});