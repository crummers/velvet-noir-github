let mainNav = $('#js-menu');
let navBarToggle = $('#js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('.active');

    if (mainNav.className == '.main-nav active') {
      mainNav.addEventListener('click', function() {
        mainNav.classList.remove('.active');
      });
    }
});

$(function () {

        $('Send Message').on('click', function (event) {

          event.preventDefault();

          $.ajax({
            type: 'post',
            url: 'post_form.php',
            data: $('form').serialize(),
            success: function () {
              alert('form was submitted');
            }
          });

        });

      });
