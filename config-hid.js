const fs = require('fs');

module.exports = function(RED) {
    function ConfigServer(n) {
        RED.nodes.createNode(this,n);
        this.vendorId = n.vendorId;
        this.productId = n.productId;
    }
    RED.nodes.registerType("config-hid", ConfigServer);
}