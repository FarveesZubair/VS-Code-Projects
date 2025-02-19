const images = {
    nature: ["nature1.jpeg", "nature2.jpeg", "nature3.jpeg", "nature4.jpeg", "nature5.jpeg", "nature6.jpeg", "nature7.jpeg", "nature8.jpeg", "nature9.jpeg", "nature10.jpeg", "nature11.jpeg", "nature12.jpeg", "nature13.jpeg", "nature14.jpeg", "nature15.jpeg", "nature16.jpeg"],
    architecture: ["architecture1.jpeg", "architecture2.jpeg", "architecture3.jpeg", "architecture4.jpeg", "architecture5.jpeg", "architecture6.jpeg", "architecture7.jpeg", "architecture8.jpeg", "architecture9.jpeg", "architecture10.jpeg", "architecture11.jpeg", "architecture12.jpeg", "architecture13.jpeg", "architecture14.jpeg", "architecture15.jpeg", "architecture16.jpeg"]
};

const folder = window.location.pathname.includes("architecture") ? "architecture" : "nature";
const gallery = document.querySelector(".gallery");

if (gallery) {
    images[folder].forEach(img => {
        let imageElement = document.createElement("img");
        imageElement.src = img;
        imageElement.onclick = () => openLightbox(img);
        gallery.appendChild(imageElement);
    });
}

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const miniViewer = document.querySelector(".mini-viewer");
let currentIndex = 0;

function openLightbox(image) {
    lightbox.style.display = "block";
    lightboxImg.src = image;
    currentIndex = images[folder].indexOf(image);
    updateMiniViewer();
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images[folder].length) % images[folder].length;
    lightboxImg.src = images[folder][currentIndex];
    updateMiniViewer();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images[folder].length;
    lightboxImg.src = images[folder][currentIndex];
    updateMiniViewer();
}

function updateMiniViewer() {
    miniViewer.innerHTML = "";
    images[folder].forEach((img, index) => {
        let thumb = document.createElement("img");
        thumb.src = img;
        thumb.onclick = () => openLightbox(img);
        miniViewer.appendChild(thumb);
    });
}

function goBack() {
    window.history.back();
}
