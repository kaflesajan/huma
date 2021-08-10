function showme() {
    document.getElementById("myDIV").classList.toggle("showme");
  }

var scrollpos = window.scrollY;
var header = document.getElementById("header");

function add_class_on_scroll() {
    header.classList.add("stt");
}

function remove_class_on_scroll() {
    header.classList.remove("stt");
}

window.addEventListener('scroll', function(){ 
    //Here you forgot to update the value
    scrollpos = window.scrollY;

    if(scrollpos > 10){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
    console.log(scrollpos);
});

