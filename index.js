let image = document.querySelector("img");
console.log(image);
window.onresize = function () {
  if (window.innerWidth<= 375) { 
 
    image.src = "./images/image-product-mobile.jpg";
  } 
  else{
    image.src = "./images/image-product-desktop.jpg";
  }
};
