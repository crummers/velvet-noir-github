$(document).ready(() => {
  $('#js-navbar-toggle').on('click', () => {
    $('#js-menu').toggleClass('active')
  });

  $('#js-menu').on('click', () => {
    $('#js-menu').removeClass('active')
  });

  $( "form" ).on( "submit", function( event ) {
  event.preventDefault();
  $.get('post_form.php' + $('form').serialize());
  $.post('post_form.php', $('form').serialize());
});

})
