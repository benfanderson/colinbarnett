window.onload = function() {
    // Makes headline, subhead, byline fade away when scrolling
  document.addEventListener("scroll", function(){
    document.querySelector(".top").style.opacity = 1 - document.body.scrollTop / 100;
    console.log(document.body.scrollTop);
  });

  // Handles quotes accordion element
    let acc = document.getElementsByClassName("accordion");
    let panel = document.getElementsByClassName('panel');

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            let setClasses = !this.classList.contains('active');
            setClass(acc, 'active', 'remove');
            setClass(panel, 'panelVisible', 'remove');
            
            if (setClasses) {
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("panelVisible");
            }
        }
    }

    function setClass(els, className, fnName) {
        for (i = 0; i < els.length; i++) {
            els[i].classList[fnName](className);
        }
    }

};