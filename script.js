$(document).ready(function() {
    $('#college-entrance-form').submit(function(event) {
      event.preventDefault();
  
      $.ajax({
        type: 'POST',
        url: 'process.php',
        data: $(this).serialize(),
        success: function(response) {
          $('#result').html(response);
          $('#result-container').removeClass('hidden');
        },
        error: function() {
          alert('An error occurred while processing the form.');
        }
      });
    });
  });