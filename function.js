//Que-1.Create one function with zero parameter having a console statement;

 function hello() {
    console.log('Hello');
}


//Que-2.Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function sum(a,b){
    console.log(a+b);
}
sum(3,4)


//Que.3-Create one arrow function.

hello = () => {
    return "Hello World!";
  }


//Que-4.Print output: undefined
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();


//Que-5.Print output: undefined
                       21
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};


//Que-6.Print output: ReferenceError : a is not defined

var x = 21;
a();
b();
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};


//Que-7.Write a function that accepts parameter n and returns factorial of n.

function factorial(n){
    let fact = 1 
    
    if (n == 0 || n == 1){
        return(fact);
    }
    else{
        for(let i=n; i>=1; i--){
            fact = fact*i;
        }
        return(fact);
    }
 }
 console.log(factorial (5));

 


