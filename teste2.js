var KeyboardLines = require('node-hid-stream').KeyboardLines;
var lines = new KeyboardLines({ vendorId: 1452, productId: 566 });

lines.on("data", function(data) {
  // The user has pressed w, a, s & d, ENTER (simultaneously (why? I don't know))
  console.log(data); //  "wasd"
});