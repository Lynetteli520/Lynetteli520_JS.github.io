var images = document.getElementsByTagName("figure");
var i;

for(i = 0; i < images.length; i++) {
    images[i].className += "one-third";
}

document.querySelector('footer').addEventListener("click", myFunction);

function myFunction() {
  document.querySelector('footer').remove();
}


var figures = document.getElementsByTagName("figure");
var i;

for(i = 0; i < figures.length; i++) {
    figures[4].addEventListener("click", myFunction);
    function myFunction() {
        figures[4].setAttribute("style", "visibility:hidden");

    }
}




var captions = document.getElementsByTagName("figcaption");
var i;

for(i = 0; i < captions.length; i++) {
    font_1st = getComputedStyle(captions[0]).getPropertyValue("font-family");
    captions[0].addEventListener("mouseover", In); 
    function In() {
        // captions[0].setAttribute("style", "font-family:Cursive");
        captions[0].style.fontFamily = "Cursive";

    }

    captions[0].addEventListener("mouseout", Out); 
    function Out() {
        // captions[0].removeAttribute("style");
        // captions[0].setAttribute("style", "font-family:" + font_1st);
        captions[0].style.fontFamily = font_1st;

    }
}


// Use an external JavaScript listener to change the font of the first figure caption to Cursive 
// when the figure caption is in focus and restore the font to “Times” when the focus state is over.  
//  Note you must use JavaScript to accomplish this, not the CSS hover state.  
//  You will need to use JavaScript to modify the html file to accomplish this task.

// var caps = document.getElementsByTagName("figcaption");
// var i;

// for(i = 0; i < caps.length; i++) {
//     // caps[i].className += "one-third";
//     caps[0].setAttribute("style", "font-family:Cursive");
// }

// event listener for keyup
var cpt = document.getElementsByTagName("figcaption");
for(i = 0; i < cpt.length; i++) {
        cpt[0].setAttribute("tabindex", "1");
}

for(i = 0; i < cpt.length; i++) {
    font_1st = getComputedStyle(cpt[0]).getPropertyValue("font-family");
    cpt[0].addEventListener("focus", focus); 
    function focus() {
        cpt[0].style.fontFamily = "Cursive";
    }
    cpt[0].addEventListener("blur", blur); 
    function blur() {
        cpt[0].style.fontFamily = font_1st;
        console.log('blur')
    }

}

// function checkTabPress(key) {
//     key = key || event;
//     if (key.keyCode == 9) {
//         tabindex="0"
//         for(i = 0; i < cpt.length; i++) {
//             function key() {
//                 cpt[0].setAttribute("style", "font-family:Cursive");
//                 alert('e')
//             }

//         }
        

//     }
// }

// var body = document.querySelector('body');
// body.addEventListener('keyup', checkTabPress);
