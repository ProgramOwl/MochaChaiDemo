var express = require('express');
var app = express();

app.get('/', function (req, res, $http) {
	res.send("Boo testing the repo!");
});

function cap(word){
	var words = word.split(" ");
	var sum ="";
	for(var i=0; i<words.length; i++){
		sum +=" " + (words[i].charAt(0).toUpperCase() + words[i].substr(1, words[i].length));
	}
	return sum.substr(1, sum.length);
}

function factorial(n){
	if (n < 0) {
		return NaN;
	}
	if (n === 0) {
		return 1;
	}
	
	return n * factorial(n - 1);
}

function hello(){
	return "Hello and Good bye!";
}
function boo(){
	return "Boo";
}


module.exports = {
	sayHello: function(){
		return hello();
	},
	sayBoo: boo(), 
	capitalize: function(w){
		return cap(w);
	},
	factorial: function(n){
		return factorial(n);
	},
	add3: function(n){
		return n + 3;
	}
};

app.listen(3000);