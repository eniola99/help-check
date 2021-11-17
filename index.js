import Express from 'express';
import mysql from 'mysql';
import faker from 'faker';
import bodyparser from 'body-parser';
import ejs from 'ejs';



index.use(bodyparser.urlencoded({extended: true}));

var index = Express();
var port = 8080;


var connection = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	database	: 'user_id'
});



index.get('/', function(req, res){
    var q = 'SELECT COUNT(*) AS count FROM users';
    connection.query(q,function(err, result){
        if (err) throw err;
        var count = result[0].count;

        // res.send('We have ' + count + ' users in our database!!!');
        res.render('home.ejs', { count});
    });


index.post('/register', function(req, res){
        console.log('thanks for registering' + req.body.email);
})
  
});
index.get('/kudi', function(req, res){
    var kudi = 'This is the official app of Nurudeen Qudus Eniola';
    res.send(kudi); 
});
index.get('/random_num', function(req, res){
    var num = Math.floor((Math.random() * 10) + 1);
    res.send('Your lucky number is ' + num);
});

index.listen(port, function(){
    console.log('server is listening on port ' + port);
});