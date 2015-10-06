'use strict';


//Hoist Problem #1:

// var myvar = 'my value'; 

// (function() { 
//     console.log(myvar);
//     var myvar = 'local value'; 
// })();

//The return is undefined, because the var myvar is being hoisted above the console log, without the variable definition of 'local value', and it is overriding the less specifically scoped value of 'my value'.

// var myvar = 'my value';
// (function() {
// 	var myvar = null;
// 	console.log(myvar);
// 	myvar = 'local value';
// })();

//Hoist Problem #2:

// var flag = true; 

// function test() {
//     if(flag) {
//         var flag = false;
//         console.log('Switch flag from true to false');
//     }
//     else {
//         flag = true;
//         console.log('Switch flag from false to true');
//     }
// }
// test();

//The return will be false, which console.logs 'Switch flag from false to true' because the var flag is hoisted above the if statement and overrides the global scoped var definition of true.

// var flag = true;

// function test() {
// 	var flag = null;
// 	if(flag) {
// 		console.log('Switch flag from true to false');
// 	}
// 	else {
// 		flag = true;
// 		console.log('Switch flag from false to true')
// 	}
// }
// test();

//Hoist Problem #3:

// var message = 'Hello world'; 

// function saySomething() {
//     console.log(message);
//     var message = 'Foo bar';
// }
// saySomething();

//This will return undefined, because the var message is hoisted above the console.log inside the function say something. It also overrides the more globally scoped definition for the same var outside of the function.

// var message = 'Hello world'; 

// function saySomething() {
// 	var message = null;
//     console.log(message);
//     message = 'Foo bar';
// }
// saySomething();

//Hoist Problem #4: 

// var message = 'Hello world'; 

// function saySomething() {
//     console.log(message);
//     message = 'Foo bar';
// }
// saySomething();

//This will return 'Hello world', since the message variabe inside the function is not a new variable.. it will not be hoisted to the top of the function before the console.log.

// var message = 'Hello world'; 

// function saySomething() {
// 	var message = 'Hello world';
//     console.log(message);
//     message = 'Foo bar';
// }
// saySomething();

//Hoist Problem #5:

// function test() {
//     console.log(a);
//     console.log(foo());

//     var a = 1;
//     function foo() {
//         return 2;
//     }
// }

// test();

//This will return undefined for the first console.log and 2 for the second console.log because:

//The var a is hoisted above the console.log for a, so it only logs an empty variable named a.

//The function foo is hoisted above the console.log calling for foo, so it logs the value of foo properly.

// function test() {
// 	var a = null;
// 	function foo() {
// 		return 2;
// 	}

// 	console.log(a);
// 	console.log(foo());
// }

// test();

//Hoist Problem #6:

// (function() {
//     console.log(bar);
//     foo();

//     function foo() {
//         console.log('aloha');
//     }

//     var bar = 1;
//     baz = 2;
// })();

//This returns three parts:

//undefined, since the undefined var of bar is hoisted above the console log calling it.

//'aloha' since the function of foo is hoisted above the function call.

//It also returns an error because baz is changed but never defined.

// (function() {
// 	var bar = null;
// 	function foo() {
//         console.log('aloha');
//     }

//     console.log(bar);
//     foo();

//     bar = 1;
//     baz = 2;
// })();

//Hoist Problem #7:

// var run = false;

// function fancy(arg1, arg2) {
//     if(run) {
//         console.log('I can run');
//     }
//     else {
//         console.log('I can\'t run');
//     }

//     function run() {
//         console.log('Will I run?');
//     }
// }
// fancy();

//This will return 'I can run', because the function run is hoisted above the if statement, and within run, it overrides the false definition provided by the global definition with a string statement... which is truthy.

// var run = false;

// function fancy(arg1, arg2) {
// 	function run() {
//         console.log('Will I run?');
//     }
//     if(run) {
//         console.log('I can run');
//     }
//     else {
//         console.log('I can\'t run');
//     }
// }
// fancy();

//Hoist Problem #8:

// var run = false;

// function fancy(arg1, arg2) {
//     if(run) {
//         console.log('I can run');
//     }
//     else {
//         console.log('I can\'t run');
//     }

//     var run = function() {
//         console.log('Will I run?');
//     }
// }
// fancy();

//This one is sneaky. It returns 'I can\'t run', because the var run is hoisted above the if statement, not the function(since it is defined through the var... which is hoisted undefined... and that is a falsy value).

// var run = false;

// function fancy(arg1, arg2) {
//     var run = null;

//     if(run) {
//         console.log('I can run');
//     }
//     else {
//         console.log('I can\'t run');
//     }

//     run = function() {
//         console.log('Will I run?');
//     }
// }
// fancy();