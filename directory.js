const express = require('express');
const mustacheExpress = require('mustache-express');
const robotMembers =require('./robotdata.json');
const app = express();

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.get('/solorobots', function(request, response){
  response.render('solorobots', { robotdata: robotMembers.users });
});

app.get('/robotdirectory', function(request, response){
  response.render('robotdirectory', { robotdata: robotMembers.users });
});


app.get('/solorobots/:name', function(request, response){
  let person = robotMembers.find(function(member) {
    return member.name.toLowerCase() === request.params.name;
  })
  response.render('robot_data', person);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
