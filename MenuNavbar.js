
const buttonImg = document.getElementById ("imgButton")
const listButton = document.getElementById("navbarList")

buttonImg.addEventListener('click', (event) => {
    event.preventDefault()
    let list = listButton
    if(list.style.display === 'none' || list.style.display === ''){
        list.style.display = 'block'
    } else {
        list.style.display = 'none'
    }

})

window.addEventListener('scroll', () => {
    const progress = document.getElementById('progressBar');
    requestAnimationFrame (carga);
})

function carga() {
    progressBar.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`;
    requestAnimationFrame (carga);
}