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
