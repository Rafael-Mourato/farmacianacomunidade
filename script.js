let count = 1
document.getElementById("radio1").checked = true;

setInterval( function(){
  nextImage();
}, 2500)

function nextImage(){
  count++;
  if(count>14){
    count = 1;
  }
  document.getElementById("radio"+count).checked = true;
}

$(document).ready(function() {
  $('a').on('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();
  
      var hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800, // duração da animação em milissegundos
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});
