describe('Usage Option Test', function() {

  var spinner     = null,
      result      = null,
      $           = jQuery,
      target      = $("<div>")[0],
      expect      = chai.expect,
      runSpinner  = function(opts) {
                      spinner = new Spinner(opts).spin(target);
                    };

  beforeEach(function() {
    $(target).empty();
  });

  afterEach(function() {
    spinner && spinner.stop();
  });

  describe('Spin Test Page', function() {

    it('should have 34 div elements (the double of 17), when create a spinner as {lines: 17}', function(done) {
      runSpinner( {lines: 17} );
      result = $(target).find('.spinner div').length;
      expect(result).to.equal(34);

      done();
    });

    it("should have 12px of width (a sum of 5px plus 7 'length'), when create a spinner as {length: 7}", function(done) {
      runSpinner( {length: 7} );
      result = $(target).find('.spinner div div').first().css('width');
      expect(result).to.equal("12px");

      done();
    });

    it('should have 8px of height, when create a spinner as {width: 8}', function(done) {
      runSpinner( {width: 8} );
      result = $(target).find('.spinner div div').first().css('height');
      expect(result).to.equal("8px");

      done();
    });

    it('should have 21px of translate, when create a spinner as {radius: 21}', function(done) {
      runSpinner( {radius: 21} );
      result = $(target).find('.spinner div div').first().css('transform');
      expect(result).to.equal("rotate(0deg) translate(21px, 0px)");

      done();
    });

    it('should have 25px of border radius (a multiple of 2.5 times), when create a spinner as {corners: 10}', function(done) {
      runSpinner( {corners: 10} );
      result = $(target).find('.spinner div div').first().css('border-top-left-radius');
      expect(result).to.equal("25px");

      done();
    });

    it('should have 6deg of rotate, when create a spinner as {rotate: 6}', function(done) {
      runSpinner( {rotate: 6} );
      result = $(target).find('.spinner div div').first().css('transform');
      expect(result).to.equal("rotate(6deg) translate(10px, 0px)");

      done();
    });

    it('should clockwise, when create a spinner as {direction: 1}', function(done) {
      runSpinner( {direction: 1} );
      result = $(target).find('.spinner > div').first().attr('style');
      expect(result,  "The first spinner should be 0." ).to.have.string("opacity-100-25-0-12");
      
      result = $(target).find('.spinner > div').last().attr('style');
      expect(result, "The last spinner should be 11." ).to.have.string("opacity-100-25-11-12");

      done();
    });

    it('should counterclockwise, when create a spinner as {direction: -1}', function(done) {
      runSpinner( {direction: -1} );
      result = $(target).find('.spinner > div').first().attr('style');
      expect(result, "The first spinner should be 11." ).to.have.string("opacity-100-25-11-12");
      
      result = $(target).find('.spinner > div').last().attr('style');
      expect(result, "The last spinner should be 0." ).to.have.string("opacity-100-25-0-12");

      done();
    });

    it("should be red, when create a spinner as {color: '#f00'}", function(done) {
      runSpinner( {color: '#f00'} );
      result = $(target).find('.spinner div div').first().css('background-color');
      expect(result).to.equal("rgb(255, 0, 0)");

      done();
    });

    it('should be faster (4 laps per second), when create a spinner as {speed: 4}', function(done) {
      runSpinner( {speed: 4} );
      result = $(target).find('.spinner > div').first().attr('style');
      expect(result).to.have.string("0.25s");

      done();
    });

    it('should be trails as 50, when create a spinner as {trail: 50}', function(done) {
      runSpinner( {trail: 50} );
      result = $(target).find('.spinner > div').first().attr('style');
      expect(result).to.have.string("opacity-50-25-0-12");

      done();
    });

    it('should have shadow, when create a spinner as {shadow: true}', function(done) {
      runSpinner( {shadow: true} );
      result = $(target).find('.spinner > div').first().find('div').first().css('box-shadow');
      expect(result, "The first div of spinner should not be shadow.").to.equal("rgb(0, 0, 0) 0px 0px 4px");
      
      var regex = /rgba[(]0, 0, 0, 0.09\d\d\d\d\d[)] 0px 0px 1px/;
      result = $(target).find('.spinner > div').first().find('div').last().css('box-shadow');
      expect( regex.test(result), "The first div of spinner should be shadow." ).to.be.ok;

      done();
    });

    it("should have 'indicator' as class name, when create a spinner as {className: 'indicator'}", function(done) {
      runSpinner( {className: 'indicator'} );
      result = $(target).find('div.indicator').length;
      expect(result).to.equal(1);

      done();
    });

  });

});
