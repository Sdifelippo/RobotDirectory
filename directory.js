const express = require('express');
const mustacheExpress = require('mustache-express');
const robot = require('./robotdata.json');
const app = express();


app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.get('/robotdirectory', function(request, response) {
  response.render('robotdirectory', {staff: robot.users})
})


app.get('/:username', function(request, response) {
  const user = robot.users.find(function(user){return user.username === request.params.username});
  response.render('solorobots', {staff: user});
})


app.listen(3000, function() {
  console.log('I\'m Alive!!!')
});
