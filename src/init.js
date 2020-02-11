$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction =  window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
   
    $('body').append(dancer.$node);
  });

  $('.addBlinkyDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction =  window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      400 + Math.random() * 100
    );

    $('body').append(dancer.$node);
  }); 
  $('.addBachataDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction =  window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      100 + Math.random() * 1000
    );

    $('body').append(dancer.$node);
  }); 
  $('.addRobotDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction =  window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
  }); 

});

