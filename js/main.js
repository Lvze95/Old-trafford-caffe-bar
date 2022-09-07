$(document).ready(function() {
    $('.loader-wrapper').fadeOut('slow');
});
$("#navbarNav").on('show.bs.collapse', function() {
    $('a.nav-link').click(function() {
        $("#navbarNav").collapse('hide');
    });
});

var nav = document.getElementById("navbarNav");
var link = nav.getElementsByClassName("nav-link");
for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}
var audio, mutebtn;
function initAudioPlayer(){
    audio = new Audio();
    audio.src = "../loop/loop.mp3";
    audio.loop = true;
    audio.volume = 0.2;
    audio.play();
    mutebtn = document.getElementById("mutebtn");
    mutebtn.addEventListener("click", mute);
    function mute(){
        if(audio.muted){
            audio.muted = false;
        }else {
            audio.muted = true;
        }
    }
    $(function() {
        var i = 0;
        $('#mutebtn').on('click', function() {
           i++;
            if( i % 2 == 0){
                $(this).addClass('fa-volume-up').removeClass('fa-volume-mute');
            }
            else{
                $(this).addClass('fa-volume-mute').removeClass('fa-volume-up');
            }
        });
    });
}
window.addEventListener("load", initAudioPlayer);


const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 800) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})
