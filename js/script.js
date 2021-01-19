/* logic to upload images 
var images = ['img/alien.png', 'img/connect4.png', 'img/database.png'];
var arrayImg = document.getElementById('column');


function uploadImages(imgSrc){
    var img = document.createElement('img');
    img.src = imgSrc; 
    img.width = '240';
    img.height = '150';
    return img;
}
images.forEach(img => {
    arrayImg.appendChild(uploadImages(img))
});


