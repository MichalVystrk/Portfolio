// Získání modálního okna a zavíracího tlačítka
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("imgInModal");
var span = document.getElementsByClassName("close")[0];

// Kliknutí na obrázek (miniatura) a zobrazení v modálu
document.querySelectorAll('.img-thumbnail').forEach(img => {
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

// Zavření modálního okna
span.onclick = function () {
    modal.style.display = "none";
}

// Zavření modálního okna při kliknutí mimo obrázek
modal.onclick = function(event) {
    if (event.target !== modalImg) {
        modal.style.display = "none";
    }
}