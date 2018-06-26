var hidHandler = require('hid-handler');

hidHandler.on('key', function (event) { // catch key events (emitted by keyboard devices)
  console.log('key event :', event.toString());
});

hidHandler.on('event', function (event) { // catch all events for all devices
  console.log('event :', event.toString()); // event class toString to display nice events status
  console.log('device :', event.hid.deviceKey.toString()); // hid device key concerned
});

hidHandler.on('click', function (event) { // catch click events (emitted by mouse or pad devices)
  console.log('click event :', event.toString());
});

hidHandler.on('wheel', function (event) { // catch wheel events (emitted by mouse devices)
  console.log('wheel event :', event.toString());
});

hidHandler.on('move', function (event) { // catch move events (emitted by mouse devices)
  console.log('move event :', event.toString());
});

process.on('SIGINT', function () { // properly stop the handler in a simple main app
  hidHandler.stop();
});

hidHandler.init({
  supportedDevices: {                           // object or array of devices
    type: 'keyboard',                           // if not specified, only generic events are emitted
    vendorId: 0x5ac,                           // required
    productId: 0x236                           // required
  }});



hidHandler.start();