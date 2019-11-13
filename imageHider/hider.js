// Store all the images that are on the webpage so that they can be later retrieved.
var imageGallery = document.images;

// Replaces all the images on the webpage with grey boxes.
function hideAllImages() {
  for(var i=0; i < imageGallery.length; i++) {
    imageGallery[i].src = "https://www.nwwoodgallery.com/sites/default/files/styles/square/public/field/image/brand/thoe.jpg?itok=F-l3B5Di&c=ad7ecc07621b71c24fef9c53bef07d32";
  }
}
document.body.style.border = "5px solid blue";
hideAllImages();