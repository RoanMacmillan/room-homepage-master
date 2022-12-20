let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  

  let j;
  let descs = document.getElementsByClassName("myDescs");
  if (n > descs.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = descs.length}
  for (j = 0; j < descs.length; j++) {
    descs[j].style.display = "none";  
  }
  
  descs[slideIndex-1].style.display = "block";  


}


const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

prevBtn.addEventListener('click', () => {

    plusSlides(-1);

})

nextBtn.addEventListener('click', () => {

    plusSlides(1);

})



const hamburgerBtn = document.querySelectorAll('.hamburger');
const navMenu = document.getElementById('mobile-menu');
const modal = document.querySelector('.modal');

hamburgerBtn.forEach((btn) => {

    btn.addEventListener('click', () => {

        navMenu.classList.toggle('open');
        modal.classList.toggle('active');
        
})


})