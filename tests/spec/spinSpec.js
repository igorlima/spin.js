describe('Usage Option Test', function() {

  var spinner     = null,
      result      = null,
      $           = jQuery,
      target      = $("<div>")[0],
      assert      = chai.assert,
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

    it('should have 34 div elements, when create a spinner as {lines: 17}', function(done) {
      runSpinner( {lines: 17} );
      result = $(target).find('.spinner div').length;
      assert( result === 34, "The number of lines should be 34. The double of 17." );

      done();
    });

    it('should have 12px of width, when create a spinner as {length: 7}', function(done) {
      runSpinner( {length: 7} );
      result = $(target).find('.spinner div div').first().css('width');
      assert( result === "12px", "The width of spinner should be 12px. A sum of 5px plus 7 (length)." );

      done();
    });

    it('should have 8px of height, when create a spinner as {width: 8}', function(done) {
      runSpinner( {width: 8} );
      result = $(target).find('.spinner div div').first().css('height');
      assert( result === "8px", "The height of spinner should be 8px." );

      done();
    });

    it('should have 21px of translate, when create a spinner as {radius: 21}', function(done) {
      runSpinner( {radius: 21} );
      result = $(target).find('.spinner div div').first().css('transform');
      assert( result === "rotate(0deg) translate(21px, 0px)", "The translate of spinner should be 21px." );

      done();
    });

    it('should have 25px of border radius, when create a spinner as {corners: 10}', function(done) {
      runSpinner( {corners: 10} );
      result = $(target).find('.spinner div div').first().css('border-top-left-radius');
      assert( result === "25px", "The border-radius of spinner should be 25px. A multiple of 2.5 times." );

      done();
    });

    it('should have 6deg of rotate, when create a spinner as {rotate: 6}', function(done) {
      runSpinner( {rotate: 6} );
      result = $(target).find('.spinner div div').first().css('transform');
      assert( result === "rotate(6deg) translate(10px, 0px)", "The rotate of spinner should be 6deg." );

      done();
    });

    it('should clockwise, when create a spinner as {direction: 1}', function(done) {
      runSpinner( {direction: 1} );
      result = $(target).find('.spinner > div').first().attr('style');
      assert( result.indexOf('opacity-100-25-0-12') !== -1, "The first spinner should be 0." );
      
      result = $(target).find('.spinner > div').last().attr('style');
      assert( result.indexOf('opacity-100-25-11-12') !== -1, "The last spinner should be 11." );

      done();
    });

    it('should counterclockwise, when create a spinner as {direction: -1}', function(done) {
      runSpinner( {direction: -1} );
      result = $(target).find('.spinner > div').first().attr('style');
      assert( result.indexOf('opacity-100-25-11-12') !== -1, "The first spinner should be 11." );
      
      result = $(target).find('.spinner > div').last().attr('style');
      assert( result.indexOf('opacity-100-25-0-12') !== -1, "The last spinner should be 0." );

      done();
    });

    it("should be red, when create a spinner as {color: '#f00'}", function(done) {
      runSpinner( {color: '#f00'} );
      result = $(target).find('.spinner div div').first().css('background-color');
      assert( result === "rgb(255, 0, 0)", "The color should be red." );

      done();
    });

    it('should be faster (4 laps per second), when create a spinner as {speed: 4}', function(done) {
      runSpinner( {speed: 4} );
      result = $(target).find('.spinner > div').first().attr('style');
      assert( result.indexOf('0.25s') !== -1, "The spinner should have a speed as 4 laps per second." );

      done();
    });

    it('should be trails as 50, when create a spinner as {trail: 50}', function(done) {
      runSpinner( {trail: 50} );
      result = $(target).find('.spinner > div').first().attr('style');
      assert( result.indexOf('opacity-50-25-0-12') !== -1, "The spinner should have a trail as 50." );

      done();
    });

    it('should have shadow, when create a spinner as {shadow: true}', function(done) {
      runSpinner( {shadow: true} );
      result = $(target).find('.spinner > div').first().find('div').first().css('box-shadow');
      assert( result === "rgb(0, 0, 0) 0px 0px 4px", "The first div of spinner should not be shadow." );
      
      var regex = /rgba[(]0, 0, 0, 0.09\d\d\d\d\d[)] 0px 0px 1px/;
      result = $(target).find('.spinner > div').first().find('div').last().css('box-shadow');
      assert( regex.test(result), "The first div of spinner should be shadow." );

      done();
    });

    it("should have 'indicator' as class name, when create a spinner as {className: 'indicator'}", function(done) {
      runSpinner( {className: 'indicator'} );
      result = $(target).find('div.indicator').length;
      assert( result === 1, "The spinner should have 'indicator' as class name." );

      done();
    });

  });

});
