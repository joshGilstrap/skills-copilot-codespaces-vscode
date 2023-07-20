// Create a web server that can respond to requests for comments
// from a particular user. For example, if you make a request to /comments/1,
// it should give you some comments for user 1. If there are no comments for that user
// it should return a 404.
// The comments are kept in a global variable called 'comments', that's already defined and initialized.
// The variable is an array that looks something like this:
// [
//   { id: 1, username: 'dickeyxxx', comment: 'NODE FTW' },
//   { id: 2, username: 'bob', comment: 'you are so right' },
//   { id: 3, username: 'max', comment: 'javascript is cool' },
//   { id: 4, username: 'max', comment: 'javascript is cool' }
// ]
// You can run the server by typing `node solutions/params.js` into the terminal.

var http = require('http');
var url = require('url');
var comments = require('./data/comments');

var server = http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname;
  var id = parseInt(path.replace('/comments/', ''), 10);
  var comment = comments.filter(function(comment) {
    return comment.id === id;
  })[0];
  if (comment) {
    res.write(JSON.stringify(comment));
  } else {
    res.statusCode = 404;
    res.write('404');
  }
  res.end();
});

server.listen(4000);
console.log('Server listening on port 4000');