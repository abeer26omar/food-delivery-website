//pre-Loader
function preLoader() {
  setTimeout(showPage, 500);
}
function showPage() {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("body").style.display = "block";
}
/*-------------------------------------------------------------------------*/

//mobile menu
var btn = document.getElementById("mobil-menu");
var menu = document.getElementById("menu-ul");
btn.addEventListener('click', function(){
  if(menu.style.display === "none"){
    menu.style.display = "flex";
    btn.classList.add('open');
  }
  else
  {
    menu.style.display = "none";
    btn.classList.remove('open'); 
  }
});
/*-------------------------------------------------------------------------*/

// MouseHover Animation 
 var hoverLayer2 = $(".burger-promo-area");
 var heroImgfive = $(".sh-1");
 var heroImgsix = $(".sh-2");
 var heroImgseven = $(".sh-5");
 var heroImgeight = $(".sh-6");
 hoverLayer2.mousemove(function (e) {
   var valueX = (e.pageX * -1) / 100;
   var valueY = (e.pageY * -1) / 120;
   heroImgfive.css({
     transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
   });
 });
 hoverLayer2.mousemove(function (e) {
   var valueX = (e.pageX * -1) / 60;
   var valueY = (e.pageY * -1) / 80;
   heroImgsix.css({
     transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
   });
 });
 hoverLayer2.mousemove(function (e) {
   var valueX = (e.pageX * -1) / 40;
   var valueY = (e.pageY * -1) / 60;
   heroImgseven.css({
     transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
   });
 });
 hoverLayer2.mousemove(function (e) {
   var valueX = (e.pageX * -1) / 80;
   var valueY = (e.pageY * -1) / 100;
   heroImgeight.css({
     transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
   });
 });
 /*-------------------------------------------------------------------------*/

//animation 1
// const titleArea1 = document.querySelector('.common-title-area');
// titleArea1.classList.remove('fadeInLeft');

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       titleArea1.classList.add('fadeInLeft');
//       return;
//     }

//     titleArea1.classList.remove('fadeInLeft');
//   });
// });

// observer.observe(document.querySelector('.delivery-right'));

/***************************************************************/
// counter
// document.addEventListener("DOMContentLoaded" , function(){
//   const counter = document.querySelector('.count');
//   const speed = 200;
//   const startCount = () =>{
//   const target = +counter.getAttribute('data-target');
//   // console.log(target);
//   const count = +counter.innerText;
//   const inc = target / speed;
//   // console.log(inc)
//   if(count < target){
//     counter.innerText = count + inc ;
//     setTimeout(startCount , 1);
//     // console.log('counter works');
//   }
//   else{
//     count.innerText = target;
//   }
// }
// startCount();
// })

/******************owl carousal*****************************/
$(document).ready(function() {

  $('.owl-carousel').owlCarousel({
  mouseDrag:false,
  loop:true,
  margin:2,
  nav:true,
  responsive:{
  0:{
  items:1
  },
  600:{
  items:1
  },
  1000:{
  items:3
  }
  }
  });
  
  $('.owl-prev').click(function() {
  $active = $('.owl-item .item.show');
  $('.owl-item .item.show').removeClass('show');
  $('.owl-item .item').removeClass('next');
  $('.owl-item .item').removeClass('prev');
  $active.addClass('next');
  if($active.is('.first')) {
  $('.owl-item .last').addClass('show');
  $('.first').addClass('next');
  $('.owl-item .last').parent().prev().children('.item').addClass('prev');
  }
  else {
  $active.parent().prev().children('.item').addClass('show');
  if($active.parent().prev().children('.item').is('.first')) {
  $('.owl-item .last').addClass('prev');
  }
  else {
  $('.owl-item .show').parent().prev().children('.item').addClass('prev');
  }
  }
  });
  
  $('.owl-next').click(function() {
  $active = $('.owl-item .item.show');
  $('.owl-item .item.show').removeClass('show');
  $('.owl-item .item').removeClass('next');
  $('.owl-item .item').removeClass('prev');
  $active.addClass('prev');
  if($active.is('.last')) {
  $('.owl-item .first').addClass('show');
  $('.owl-item .first').parent().next().children('.item').addClass('prev');
  }
  else {
  $active.parent().next().children('.item').addClass('show');
  if($active.parent().next().children('.item').is('.last')) {
  $('.owl-item .first').addClass('next');
  }
  else {
  $('.owl-item .show').parent().next().children('.item').addClass('next');
  }
  }
  });
  
  });