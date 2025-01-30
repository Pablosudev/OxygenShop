const img = ['Slider/iso-republic-art-supplies-010.png', 'Slider/iso-republic-books-plant.jpg','Slider/picography-delicate-hands-using-laptops.jpg']
const imageShowInHtml = document.getElementById("Art")
const prevButton = document.getElementById("buttonLeft")
const nextButton = document.getElementById("buttonRight")
const buttonArt = document.getElementById("buttonArt")
const buttonBooks = document.getElementById ("buttonBooks")
const buttonLaptops = document.getElementById ("buttonLaptops")

let imageShow = 0;

nextButton.addEventListener("click", () => {
    let nextImagePosition = imageShow + 1
    if (nextImagePosition === img.length){
        nextImagePosition = 0
    }
    imageShow = nextImagePosition 
    imageShowInHtml.src = img[nextImagePosition]
})
prevButton.addEventListener("click", () => {
    let nextImagePosition = imageShow + 1
    if (nextImagePosition === img.length){
        nextImagePosition = 0
    }
    imageShow = nextImagePosition 
    imageShowInHtml.src = img[nextImagePosition]

})


    

