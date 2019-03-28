function init() {
    let acc = document.getElementsByClassName("accordion");
    let activePanel;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
        if(typeof activePanel ==="object" && typeof activePanel.nextElementSibling.style.maxHeight === "string") {
          console.log("Boom!")
          console.log(activePanel.nextElementSibling.style.maxHeight);
          activePanel.classList.toggle("active");
          let panel = activePanel.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          } 
        };
        activePanel = this;
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


