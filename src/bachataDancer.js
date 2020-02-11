var BachataDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="bachata"></span>');
      
};

BachataDancer.prototype = Object.create(Dancer.prototype);
BachataDancer.prototype.constructor = BachataDancer;

BachataDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
