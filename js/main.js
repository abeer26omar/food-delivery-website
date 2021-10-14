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

