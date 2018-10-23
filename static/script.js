// script.js
window.onload = function() {
  var e = document.getElementById('target');
  
  //マウスが乗ったとき
  e.addEventListener("mouseover", function(){
    e.style.color = 'blue';
  }, false);
  //マウスが離れたとき
  e.addEventListener("mouseout", function(){
    e.style.color = 'red';
  }, false);
}
