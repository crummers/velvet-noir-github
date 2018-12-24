$(document).ready(() => {
  $('#js-navbar-toggle').on('mouseenter', () => {
    $('#js-menu').addClass('active').on('mouseleave', () => {
      $('#js-menu').removeClass('active');
    });
  });

  $('#js-menu').on('click', () => {
    $('#js-menu').removeClass('active')
  });
})
