var BlinkyDancer = function(top, left, timeBetweenSteps) {

  
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="blinkyDancer"></span>');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

// call the old version of step at the beginning of any call to this new version of step
// toggle() is a jQuery method to show/hide the <span> tag.
// See http://api.jquery.com/category/effects/ for this and
// other effects you can use on a jQuery-wrapped html tag.
BlinkyDancer.prototype.step = function () {

  // COULD BE IMPORTANT - we used to have 
  // var oldStep = Dancer.step and then call that

  Dancer.prototype.step.call(this);
  this.$node.toggle();

};