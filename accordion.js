window.onload = function() {

  // Makes headline, subhead, byline fade away when scrolling
  document.addEventListener("scroll", function(){
    document.querySelector(".top").style.opacity = 1 - document.body.scrollTop / 100;
    console.log(document.body.scrollTop);
  });

  // Handles quotes accordion element
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }

}



