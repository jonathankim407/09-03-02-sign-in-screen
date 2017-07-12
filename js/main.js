document.addEventListener('DOMContentLoaded', function(event) {

  var signIn = document.querySelector('.signin');
  var modal = document.querySelector('.modal');
  var close = document.querySelector('.close');
  var submit = document.querySelector('.submit');
  var input = document.querySelectorAll('input');

  signIn.addEventListener('click', function(event) {

    modal.style.display = 'block';

  });

  close.addEventListener('click', function(event) {

    modal.style.display = 'none';

  });

  submit.addEventListener('click', function(event) {

    input.forEach(function(input) {

      input.classList.add('error');

    });

  });

});
