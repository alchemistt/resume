mybutton = document.getElementById("myBtn");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function toggle(i) {

    var burger = document.getElementById("togglebuttonburger");
    var close = document.getElementById("togglebuttonclose");
    var conatiner = document.getElementById("conatiner");

    if (i == 1) {
        console.log(false);
        burger.style.display = "none";
        conatiner.style.paddingTop = "155px"
        close.style.display = "block";

        // console.log(elmnt);


    } else {
        conatiner.style.paddingTop = "50px"
        close.style.display = "none";
        burger.style.display = "block";


        console.log(true);


    }

}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function skillset() {
    var elmnt = document.getElementById("skillset");
    console.log("element" + elmnt);
    document.body.scrollTop = 0;
    elmnt.scrollIntoView();
}