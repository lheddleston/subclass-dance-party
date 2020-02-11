var RobotDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('robotDancer');
  // this.colors = ['magenta', 'darkmagenta', 'hotpink', 'crimson', 'darkviolet'];
  // this.currentColor = 0;
};

RobotDancer.prototype = Object.create(Dancer.prototype);
RobotDancer.prototype.constructor = RobotDancer;

RobotDancer.prototype.step = function() {

// console.log(this.colors);
// console.log(this.currentColor);

//   if (this.currentColor === 4) { 
//     this.currentColor = 0; 
//   } else { 
//     this.currentColor++; 
//   }

//   this.$node.animate({'borderColor': this.colors[this.currentColor]});
  
  Dancer.prototype.step.call(this);
  
};