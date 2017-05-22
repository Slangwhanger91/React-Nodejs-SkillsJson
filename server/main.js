var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = require('../react_component/./shitty-react.jsx');

app.get('/', function(request, response){
    var html = ReactDOMServer.renderToString(
        React.createElement(Component)
    );
   response.send(html);
});

var port = 3000;
app.listen(port, function(){
   console.log('http://localhost:'+port) ;
}); 