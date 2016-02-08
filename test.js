var C = require('events');

var c = new C();


c.on('sayhello', function(){
    console.log('Hi, Hello');
})

c.emit('sayhello');

