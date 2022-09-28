// products

let aMenu= document.querySelectorAll('#a_menu')
let menuImg = document.querySelectorAll('.menuImg')
let galeryProduct = document.querySelector('.galeryProduct')
// console.log(menuImg);
galeryProduct.src=menuImg[0].src;


console.log(galeryProduct.src)
for (let i = 0; i < aMenu.length; i++) {
    const element = aMenu[i];
    element.addEventListener('click', (e)=>{
        sliderProduct(menuImg[i]);
    })
}
const sliderProduct = (element) => {
        galeryProduct.src = element.src;
}
function redirect(id) {
    window.location.href = `http://localhost:3000/products/${id}`;
}
