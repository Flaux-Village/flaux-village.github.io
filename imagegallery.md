---
layout: page
titre: Découvrir le village | Imagegallery
description: Portail du village de Flaux
keywords: mairie, commune, flaux, gard
titre_page: Imagegallery
date_texte: 1 juin 2020
illustration: /assets/illustrations/flauxcloche_landscape_980.JPG
description_illustration: La Mairie de Flaux.
introduction:
documents:


menu_secondaire:
- titre: Points d'intérêts
  addresse: /interets.html
- titre: Histoire
  addresse: /histoire.html

---


href="assets/illustrations/eglise/gallery-400h-eglisetombe.JPG">
Tombeau Gallo Romain dans l'église de Flaux</div>
 href="assets/illustrations/eglise/galleyr-400h-explic.JPG">
Traduction Inscription Tombeau</div>
href="assets/illustrations/eglise/gallery-400h-vitrail1.JPG">
Vitrail de l'église de Flaux</div>
href="assets/illustrations/eglise/eglisevitraildeux185.JPG">
href="assets/illustrations/eglise/gallery-400h-egliseinterieur.JPG">
 Eglise de Flaux</div>
href="assets/illustrations/eglise/gallery-400h-egliseflaux.JPG">
 Intérieur de l'église de Flaux</div>
href="assets/illustrations/30-flaux-lavoir-1.jpg">
Lavoir place du lavoir</div>
href="assets/illustrations/30-flaux-chapelle.jpg">
  Chapelle dans le village</div>
 href="assets/illustrations/30-flaux-fontaine.jpg">
  Fontaine place du lavoir</div>
href="assets/illustrations/gallery-400h-Cimetierechaine.JPG">
  Notre arbre, un Cèdre Noir Du Liban dans le cimetière</div>

<!DOCTYPE html>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
  font-family: Arial;
  margin: 0;
}

* {
  box-sizing: border-box;
}

img {
  vertical-align: middle;
}

/* Position the image container (needed to position the left and right arrows) */
.container {
  position: relative;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Add a pointer when hovering over the thumbnail images */
.cursor {
  cursor: pointer;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* Container for image text */
.caption-container {
  text-align: center;
  background-color: #222;
  padding: 2px 16px;
  color: white;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Six columns side by side */
.column {
  float: left;
  width: 16.66%;
}

/* Add a transparency effect for thumnbail images */
.demo {
  opacity: 0.6;
}

.active,
.demo:hover {
  opacity: 1;
}
</style>
<body>

<h2 style="text-align:center">Slideshow Gallery</h2>

<div class="container">
  <div class="mySlides">
    <div class="numbertext">1 / 6</div>
    <img src="assets/illustrations/eglise/auvis-lavoir-2.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">2 / 6</div>
    <img src="assets/illustrations/eglise/auvis-lavoir.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">3 / 6</div>
    <img src="assets/illustrations/eglise/flaux-chappelle.jpg" style="width:100%">
  </div>
    
  <div class="mySlides">
    <div class="numbertext">4 / 6</div>
    <img src="assets/illustrations/eglise/flaux-eglise-escalier2.JPG" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">5 / 6</div>
    <img src="assets/illustrations/eglise/flaux-eglise-tombe.JPG" style="width:100%">
  </div>
    
  <div class="mySlides">
    <div class="numbertext">6 / 6</div>
    <img src="assets/illustrations/eglise/flaux-eglise-vitrail.JPG" style="width:100%">
  </div>
    
  <a class="prev" onclick="plusSlides(-1)">❮</a>
  <a class="next" onclick="plusSlides(1)">❯</a>

  <div class="caption-container">
    <p id="caption"></p>
  </div>

  <div class="row">
    <div class="column">
      <img class="demo cursor" src="assets/illustrations/eglise/auvis-lavoir-2.jpg" style="width:100%" onclick="currentSlide(1)" alt="Lavoir des Auvis">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/illustrations/eglise/auvis-lavoir.jpg" style="width:100%" onclick="currentSlide(2)" alt="Lavoir des Auvis">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/illustrations/eglise/flaux-chappelle.jpg" style="width:100%" onclick="currentSlide(3)" alt="Église de Flaux">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/illustrations/eglise/flaux-eglise-escalier2.JPG" style="width:100%" onclick="currentSlide(4)" alt="Église de Flaux, escalier pour clocher">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/illustrations/eglise/flaux-eglise-tombe.JPG" style="width:100%" onclick="currentSlide(5)" alt="Tombeau époque Gallo-Romaine">
    </div>    
    <div class="column">
      <img class="demo cursor" src="assets/illustrations/eglise/flaux-eglise-vitrail.JPG" style="width:100%" onclick="currentSlide(6)" alt="Église de Flaux, vitrail">
    </div>
  </div>
</div>

<script>
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
</script>
    
</body>
</html>


