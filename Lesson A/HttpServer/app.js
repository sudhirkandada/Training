/**
 * Created by skandada on 3/7/2016.
 */

(function () {

    // "require" http module
    var http = require('http');

    const httpServer = new http.Server();

    httpServer.listen(80, function () {
        console.log('I\'m listening on port 80!!!!');
    });
})();