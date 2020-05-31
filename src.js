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

    if (i == 1) {
        console.log(false);
        burger.style.display = "none";

        close.style.display = "block";

        console.log(elmnt);


    } else {

        close.style.display = "none";
        burger.style.display = "block";


        console.log(true);


    }

}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function skillsetgit() {
    var elmnt = document.getElementById("skillset");
    elmnt.scrollIntoView();
}