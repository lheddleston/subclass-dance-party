$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction =  window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random() - 300,
      $("body").width() * Math.random() - 300,
      Math.random() * 1000
    );
   
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
});

