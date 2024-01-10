var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

var modal = document.getElementById("myModal-1");
var img = document.getElementById("myImg-1");
var modalImg = document.getElementById("img01-1");
var captionText = document.getElementById("caption-1");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close-1")[0];

span.onclick = function() { 
  modal.style.display = "none";
}
var modal = document.getElementById("myModal-2");
var img = document.getElementById("myImg-2");
var modalImg = document.getElementById("img01-2");
var captionText = document.getElementById("caption-2");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close-2")[0];

span.onclick = function() { 
  modal.style.display = "none";
}