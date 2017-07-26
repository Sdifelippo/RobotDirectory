const express = require('express');
const mustacheExpress = require('mustache-express');
const robotMembers = require('./data.js');
const app = express();

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

// app.get('/solorobots', function(request, response){
//   response.render('solorobots', { data: robotMembers.users });
// });
//
// app.get('/robotdirectory', function(request, response){
//   response.render('robotdirectory', { data: robotMembers.users });
// });

// app.get('/robot_data/:users', function(request, response){
//   let index = parseInt(request.params.users);
//   response.render('staff_member', staffMembers[index]);
// });

// app.get('/robot_data/:name', function(request, response){
//   let person = robotMembers.find(function(member) {
//     return member.name.toLowerCase() === request.params.name;
//   })
//   response.render('robotMembers', person);
// });


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
