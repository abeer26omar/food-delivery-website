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
  }
  else
  {
    menu.style.display = "none"; 
  }
})