var KeyboardLines = require('node-hid-stream').KeyboardLines;

module.exports = function(RED) {
  
    function setupDevice(_this, hidDevice) {
        let msg = {};
        try {
            var lines = new KeyboardLines({
                vendorId : hidDevice.vendorId,
                productId : hidDevice.productId
            });

            lines.on("data", function(data) {
                msg.payload = data;
                _this.send(msg);
            });
      
            _this.status({
              fill: "green",
              shape: "dot",
              text: "connected"
            });
      
        } catch (err) {

            msg.payload = err;
            _this.send(msg);

            _this.status({
                fill: "red",
                shape: "ring",
                text: "disconnected"
            });
        }

        _this.on('close', function() {
            if(lines)
              lines.close();
        });
    }
  
  
    function HIDToText(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var hidDevice = RED.nodes.getNode(config.hidDevice);
        setupDevice(this, hidDevice);
    }


    RED.nodes.registerType("hid-to-text", HIDToText);
  }
