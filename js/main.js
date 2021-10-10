//pre-Loader
function preLoader() {
  setTimeout(showPage, 500);
}
function showPage() {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("body").style.display = "block";
}
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
})
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
//menu navigator
// $('#nav-tab a').on('click', function (e) {
//   e.preventDefault()
//   $(this).tab('show');
//   document.getElementsByClassName('tap-pane') = "block";
// })

// var tabEl = document.querySelector('button[data-bs-toggle="tab"]')
// tabEl.addEventListener('shown.bs.tab', function (event) {
//   event.target // newly activated tab
//   event.relatedTarget // previous active tab
// })
// var triggerTabList = [].slice.call(document.querySelectorAll('#nav-menu-1'))
// triggerTabList.forEach(function (triggerEl) {
//   var tabTrigger = new bootstrap.Tab(triggerEl)

//   triggerEl.addEventListener('click', function (event) {
//     event.preventDefault()
//     tabTrigger.show()
//   })
// });
 
// $('#nav-tab a').on('click',function(event){
//  event.preventDefault();
//  if($('#nav-tab a').hasAttribute('class','active')){
//   console.log('fuck off')
// }
// })
