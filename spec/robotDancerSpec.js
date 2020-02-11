describe('robotDancer', function() {

  var robotDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    robotDancer = new RobotDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(robotDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(robotDancer.$node, 'toggle');
    robotDancer.step();
    expect(robotDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(robotDancer, 'step');
      expect(robotDancer.step.callCount).to.be.equal(0);

      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(robotDancer.step.callCount).to.be.equal(2);
      clock.tick(timeBetweenSteps);
      expect(robotDancer.step.callCount).to.be.equal(3);
    });
  });     
}); 
