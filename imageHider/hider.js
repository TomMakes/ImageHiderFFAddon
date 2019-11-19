// Store all the images that are on the webpage so that they can be later retrieved.
var imageGallery = document.images;

// Replaces all the images on the webpage with grey boxes.
function hideAllImages() {
  for(var i=0; i < imageGallery.length; i++) {
    imageGallery[i].src = "https://steamuserimages-a.akamaihd.net/ugc/858351445637712318/F98B1E3CDDAD0994EDDC78945349B80EB26C0A42/";
  }
}
document.body.style.border = "5px solid blue";
hideAllImages();