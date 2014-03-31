(function () {

  window.Car = function (color, driver) {
    // TODO
    this.color = color;
    this.driver = driver;
    this.state = 'off';
    this.ignite = function() {
    	if (this.driver && this.driver.hasDriversLicense ==  true) {
    		this.state = 'running';
    		return 'Vroom!';
    	} else if (this.driver && this.driver.hasDriversLicense ==  false) {
    		this.state = 'off';
    		return 'Sorry, you do not have a license.';
    	} else{
    		this.state = 'off';
    		return 'There is no driver to start the car!';
    	}
    }
  };

})();
