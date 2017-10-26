(function () {
  var AC = {
    state: {
      currentTemperature: 20,
      temperatureOnRemote: 20,
      isRemoteInRange: true
    },

    init: function () {
      var self = this;
      this.setUpKeys();
      // Print current temperature each second.
      setInterval(function () {
        console.log("AC running at: ", self.state.currentTemperature, "deg temperature");
      }, 1000);

      // Toggle isRemoteInRange after each 5 seconds.
      // @todo Randomise this later.
      setInterval(function () {
        self.state.isRemoteInRange = !self.state.isRemoteInRange;
        var message = self.state.isRemoteInRange ? "Remote is in Range" : "Remote is NOT in range";
        console.log(message);
      }, 5000);
    },

    setUpKeys: function () {
      var self = this;
      document.addEventListener('keydown', function (e) {
        switch (e.key) {
          case 'ArrowUp':
              self.state.temperatureOnRemote++;
              self.updateTemperature();
            break;

          case 'ArrowDown':
              self.state.temperatureOnRemote--;
              self.updateTemperature();
            break;
        }
      });
    },

    updateTemperature: function () {
      if (this.state.isRemoteInRange) {
        this.state.currentTemperature = this.state.temperatureOnRemote;
      }
    }
  };

  AC.init();
})();

