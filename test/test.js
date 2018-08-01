//-Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser
//-Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
var assert = require('assert'),
index = require('../index'),
others = require('../others');
//chai:
//var chai = require('chai');


//Chai options:chai
//-should:
//var should = chai.should();
//(variable).should.be.a(<type>);
//"Hello".should.be.a('string');
//(variable).should.equal(ans);
//(variable).should.have.lengthof(<num>);
//(variable).should.have.property(<name>).with.lengthof(<num>);
//
//-expect: 
//var expect = chai.expect;
//expect(result).to.be.a(<type>);
//expect(result).to.equal(ans);
//expect(result).to.have.lengthof(<num>);
//expect(result).to.have.property(<name>).with.lengthof(<num>);
//
//-assert:
//var assertc = chai.assert;
//assertc.typeOf(func, <type>, <optional message>);
//assertc.equal(func, <ans>);
//assertc.lengthOf(func, <num>)
//assertc.property(func/val, <name>);
//assertc.lengthOf(func.<name>, <num>);


function GenericTest() {
	describe("Generic test", function() {
		before(function() {
			console.log("start testing");
		});
		after(function() {
			console.log("Completed");
		});
		
		describe('Array', function() {
			describe('#indexOf()', function() {
				it('should return -1 when the value is not present', function() {
				  assert.equal(-1, [1,2,3].indexOf(4));
				});
			});
		});
	});
}
function IndexTest(){
	describe('In index.js', function() {
		describe('sayHello', function() {
			it('should return Hello', function(){
			  assert.equal("Hello", index.sayHello());
			});
		});
		describe('sayBoo', function() {
			it('should return Boo', function(){
			  assert.equal("Boo", index.sayBoo());
			});
		});
		describe('capitalize', function() {
			it('should return "Hello World!" when passed "hello world!"', function() {
			  assert.equal("Hello World!", index.capitalize("hello world!"));
			});
		});			
		describe('factorial', function() {
			it('should return 720 when passed 6', function(){
			  assert.equal(720, index.factorial(6));
			});
		});
		describe('add3', function() {
			it('if passed 5 should return 8', function(){
				result = index.add3(5);
			  assert.equal(8, result);
			});
			it('if passed 10 should return 3', function(){
				result = index.add3(10);
			  assert.equal(13, result);
			});
		});
	});		
}
function OthersTest(){
	describe('In others.js', function() {
		describe('say3', function() {
			it('should return "3"(string)', function() {
			  assert.equal("3", others.say3());
			});
		});
		describe('num3', function() {
			it('should return 3(int)', function() {
			  assert.equal(3, others.num3());
			});
//			it('should return int', function() {
//				var resu = others.num3();
//				assertc.typeOf(resu, 'number', "The value returned by num3 is of type: "+typeof(resu)+".");
//				(others.num3()).should.be.a(typeof(1));
//				expect(others.num3()).to.be.a(typeof(1));
//			});
		});
	});
}

GenericTest();
//IndexTest();
//OthersTest();
