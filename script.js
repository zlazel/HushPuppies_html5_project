"use strict"
window.onscroll = function () { stikyNav() };
function stikyNav() {
    if (window.scrollY > 80) {
        document.getElementById("top-header").style.display = "none";
        document.getElementById("small-logo").style.display = "inline-block";
        document.getElementById("navbar").style.position = "fixed";
        document.getElementById("navbar").style.top = "0px";
        document.getElementById("scrolltotop").style.display = "block";
        //document.getElementById("top-header").classList.toggle("hide");
        console.log("Scroll Y:" + window.scrollY);
    }else if(window.scrollY < 30){
        // window.scrollTo(0,0);
        document.getElementById("top-header").style.display = "inline-block";
        document.getElementById("small-logo").style.display = "none";
        document.getElementById("navbar").style.position = "relative";
        document.getElementById("scrolltotop").style.display = "none";
        document.getElementById("navbar").style.top = "0px";
        //document.getElementById("top-header").classList.toggle("hide");
        console.log("Scroll Y:" + window.scrollY);
    }
}
var rightPosition = 0;
var indx = 1;
function next() {
    document.getElementById("products-zone-ul").style.right= rightPosition+"%";
    rightPosition=(rightPosition+25)%100;
}
function pre() {
    document.getElementById("products-zone-ul").style.right= rightPosition+"%";
    rightPosition=(rightPosition-25)%100;    
 }

 function toggleSlide() {
    var i = 0;
    var t = setInterval(() => {
        // console.log(0);

        if (i % 2 == 0) {
            // console.log(document.getElementById("home-main-slide2").style.display);
            document.getElementById("home-main-slide2").style.display = "inline-block";
            document.getElementById("home-main-slide1").style.display = "none";
        } else {
            // console.log(2);
            document.getElementById("home-main-slide2").style.display = "none";
            document.getElementById("home-main-slide1").style.display = "inline-block";
        }
        i++;


        if(indx > 4)
        {
            indx =indx%4;
            console.log(indx)
        }else{
            document.getElementById("shoe1").src= "images/Desktop_Slide_1_Shoe_"+indx+".png"
            console.log(indx +"sad")

        }
        indx++;
    }, 3000);
    
}
toggleSlide();
