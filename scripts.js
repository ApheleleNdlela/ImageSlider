let array;

if (sessionStorage.getItem("x")) {
    array = JSON.parse(sessionStorage.getItem("x"))
} else {array= ["image1.jpg", "image2.jpg","image3.jpg", "image4.jpg", "image5.jpg",]}

 img = document.getElementById("img");

// let image;
// image = array[i]
// array[i] = document.getElementsByClassName("img")
// let x;
let i = 0;
img.src = array[i]
// Image.src = document.getElementByClassName("img")

// function add() {
//     let images = document.getElementById("images").value;
//     array.push(images);
//     document.getElementById('images').value = '';
//     // let image = document.getElementByClassName(".Image")
//     // console.log(array);
//     // let y = sessionStorage.setItem

//     sessionStorage.setItem("x",JSON.stringify(array));
//     let y = sessionStorage.getItem(JSON.parse("x"));
    

   
// }
// // ADD()

function next() {


    // let x = array[i];
    i ++;

    if(i >= array.length){
        i = 0;
    }
    img.src = array[i]
    // console.log(x)

}

// next()
// next()
// next()
// next()

function prev() {


    // let x = array[i];
    i --;
    if (i < 0){
        i = array.length -1
    }
    // console.log(x)
    img.src = array[i]
}

// prev()
// prev()
// prev()
// prev()

// let slider = document.querySelectorAll("slider")
// slider.style.transfrom(array[1])

// let curretSlide = 0;
// nextSlide = document.querySelector(".btn-next");

// const slidesContainer = document.getElementById("slides-container");
// const slide = document.querySelector(".slide");
// const prevButton = document.getElementById("slide-arrow-prev");
// const nextButton = document.getElementById("slide-arrow-next");

// nextButton.addEventListener("click", () => {
//   const slideWidth = slide.clientWidth;
//   slidesContainer.scrollLeft += slideWidth;
// });

// prevButton.addEventListener("click", () => {
//   const slideWidth = slide.clientWidth;
//   slidesContainer.scrollLeft -= slideWidth;
// });

// let image = document.getElementByClassName(".IMAGE")

// function ADD() {
//     let image = document.getElementByClassName(".IMAGE")
//     image.push(image)
//     console.log(image);
// }
// ADD()

function add() {
    let images = document.getElementById("images").value;

    if(images ==""){
        return alert("image url should not be empty")
    }

    for(let k =0; k < array.length; k++)

    if(images == array[k]){
        return alert("image already exists")
    }
    
    array.push(images);
    document.getElementById('images').value = '';
    // let image = document.getElementByClassName(".Image")
    // console.log(array);
    // let y = sessionStorage.setItem

    sessionStorage.setItem("x",JSON.stringify(array));

    
}
// ADD()


function remove() {
    let images = document.getElementById("images").value;
    array.splice(i,1)
    window.location.reload;
    sessionStorage.setItem("x",JSON.stringify(array));
}