describe('bachataDancer', function() {

  var bachataDancer, clock; 
  var timeBetweenSteps = 100;
  
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bachataDancer = new bachataDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bachataDancer.$node).to.be.an.instanceof(jQuery);  
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(bachataDancer.$node, 'togle');
    bachataDancer.step();
    expect(bachataDancer.$node.toggle.called).to.be.true;    
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(bachataDancer, 'step');
      expect(bachataDancer.step.step.callCount).to.be.equal(0);

      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(bachataDancer.step.callCount).to.be.equal(2);
      clock.tick(timeBetweenSteps);
      expect(bachataDancer.step.callCount).to.be.equal(3);
    });
  });
});
