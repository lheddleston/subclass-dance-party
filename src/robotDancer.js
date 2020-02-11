var RobotDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('robotDancer');
};

RobotDancer.prototype = Object.create(Dancer.prototype);
RobotDancer.prototype.constructor = RobotDancer;

RobotDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.animate();
};