div = document.querySelector("div");
span = document.querySelector("span");
c1 = document.querySelector(".c1");

div.addEventListener("mouseover", function(){
    //this.setAttribute("class", "c1");
    this.classList.toggle("c3");
    this.removeAttribute("c3");
});
c1.addEventListener("click", function(){
    //this.setAttribute("class", "c2");
    this.classList.toggle("c1");
    this.removeAttribute("c1");
});
c1.addEventListener("dblclick", function(){
    //this.setAttribute("class", "c2");
    this.classList.toggle("dis");
    this.removeAttribute("dis");
});
span.addEventListener("click", function(){
    
});