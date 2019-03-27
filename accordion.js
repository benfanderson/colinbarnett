window.onload = function() {

  // Makes headline, subhead, byline fade away when scrolling
  document.addEventListener("scroll", function(){
    document.querySelector(".top").style.opacity = 1 - document.body.scrollTop / 100;
  });

  // Handles quotes accordion element
  let acc = document.getElementsByClassName("accordion");
  let activeButton;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("panelVisible");
      if (typeof activeButton === "object" && activeButton.nextElementSibling.classList.contains("panelVisible")) {
        activeButton.classList.toggle("active");
        activeButton.nextElementSibling.classList.toggle("panelVisible");
      }
      activeButton = this;
      
      // var panel = this.nextElementSibling;
      // if (panel.style.maxHeight){
      //   panel.style.maxHeight = null;
      // } else {
      //   panel.style.maxHeight = panel.scrollHeight + "px";
      // } 
    });
  }

}



