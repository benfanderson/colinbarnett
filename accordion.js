function init() {
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


  // Makes headline, subhead, byline fade away when scrolling
  document.addEventListener("scroll", function(){
    document.querySelector(".top").style.opacity = 1 - document.body.scrollTop / 100;
  });

  // $(window).scroll(function(){
  //   if (window.matchMedia("(min-width: 479px)")) {
  //     $(".top").css("opacity", 1 - $(window).scrollTop() / 50);
  //   } if ((window.matchMedia("(min-width: 1000px)"))) {
  //     $(".top").css("opacity", 1 - $(window).scrollTop() / 100);
  //   } else {
  //     $(".top").css("opacity", 1 - $(window).scrollTop() / 320);
  //   }
    
  // });

  // $(window).scroll(function(){
  //   $(".top").css("opacity", 1 - $(window).scrollTop() / 320);
  // });

  
}

window.onload = init;


