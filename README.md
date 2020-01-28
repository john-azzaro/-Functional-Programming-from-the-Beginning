# Functional Programming Study

* [What is Functional Programming?](#What-is-Functional-Programming)
* [What is a function?](#What-is-a-function)
* [How does a function work?](#How-does-a-function-work)
* [How do you define a function?](#How-do-you-define-a-function)
* [What is hoisting, scope, and scope chain?](#What-is-hoisting-scope-and-scope-chain)
* [What are side effects?](#What-are-side-effects)
* [What is a pure function?](#What-is-a-pure-function)
* [What are side effects?](#What-are-side-effects)
* [What are arguments?](#What-are-arguments)
* [What is a high-order function?](#What-is-a-high-order-function)
* [What-is-point-free-and-equational-reasoning?](#What-is-point-free-and-equational-reasoning)
* [What is closure?](#What-is-closure)
* [What is lazy and eager execution?](#What-is-lazy-and-eager-execution)
* [What is memoization?](#What-is-memoization)
* [What is referential transparency?](#What-is-referential-transparency)
* [What is Partial Application?](#What-is-Partial-Application)
* [What is Currying?](#What-is-Currying)
* [What is composition?](#What-is-composition)
* [](#)





<br>
<br>
<br>
<br>

# What is Functional Programming?
<dl>
<dd>

## Functional programming is a paradigm.
**Functional programing (FP) is a paradigm where the process of building software by composing pure functions, avoiding shared state, mutable data, and side effects.** Functional programming tends to be *provable*, *concise*, *predicatable*, and *easier to test* than other programming paradigms such as Object Oriented Programming (OOP).

## Functional programming is declaritive.
**Functional programming is *declarative* in that your code should tell a story.** For example, when you comment on code you need to explain the "why" and not the "what", such as why you have a for-loop iterating over an array rather than saying you have a for-loop which should be obvious.

**In contrast to the declaritve is the *imperative* where the reader of that code somewhere down the line has to read and mentally execute it**. In essence, code being imperiative means inferring from the code to understand what it is doing. In this way, imperative code can be harder to fix and maintain.


</dd>
</dl>

<br>
<br>
<br>
<br>

# What is a function?
<dl>
<dd>

## A function is a repeatable process that takes inputs and returns outputs.
**A function is a readable and repeatable process or behavior that not only takes some input but returns some output.** A function is *repeatable* (i.e. can be called multiple times) and *determinate* (i.e. predictable). Functions are *modular* and are the fundamental building blocks of JavaScript that perform tasks or calculate values. A function is a semantic relationship between the input and the computed output (i.e. a relationship between what you put in and what you get out).

</dd>
</dl>

<br>
<br>
<br>
<br>

# How does a function work?
<dl>
<dd>

## A function is defined, passed an input, and returns an output when invoked.
At the heart of a function is the ability to define that function, take an input, and through the contents of your main block of code, return an output that is predictable. To better explain this, lets first look at the primary parts of a function. In the example directly below we have a *function declaration* (which is one of serveral ways you can define a function). In this example, we first add a ```function``` prefiex to define it. Then, we name it and pass in input *parameters*. In the body of the function, we then ```return``` the resulting output. And when we are ready to use this function we "call" a function, which means you can invoke the function name and pass any "arguments" (which directly correlate to the parameter slot in the defined function) which are needed to return a result. 
```JavaScript
    //FUNCTION KEYWORD        //NAME       //CALL SIGNATURE (W/PARAMETER)
    //               \           |         /
                    function myFunction(str) {
                      return str;                     //MAIN BLOCK of function that RETURNS a result
                    }
                    
                    myFunction("Hello!"));            //CALL (W/ARGUMENT)
```

<br>

## There a four primary parts of a function.
There are FOUR primary parts of a function that you need to be familiar with, specifically: 
1. Function keyword
2. Name
3. Callsignature (with or without parameters)
4. Main block of the function (where your code will go) inbetween curly braces.

<br>

| **Component:**           | **ID:**              | **Description:**                            |
| ------------------------ | ---------------------| ----------------------------------------------|
|   ***function***               | *Keyword*              |  Functions are "defined" with the ```function``` keyword and are often called "declaring" a function.             |
|   ***myFunction***             |  *Name*                |  The name of the function is used to "invoke" the function elsewhere in your code. It can be optional (i.e. anonymous function) and can include upper and lower case letters, 0-9 numbers, underscore (_), cash sign ($), and some special characters.             |
|   ***(str)***                  |  *Call Signature*      | A call signature contains "parameters", which are seperated by commas. You can have as many parameters as you wish. Additionally, remember the parameters are *local* and ONLY available inside the function.             |
|    ***{...}***                 |  *Main Block*          |  Since the objective of a function is to do something, the main block of your function has *instructions* which are themselves *statements* enclosed by braces (i.e. {} ). These statements are seperated by semicolons (;). |
|    ***return***             |     *Return*             |   The "return" statement returns a result, such as an object, an array, or even another function back to the caller. The return statement must be in the body of the function. Although it is technically optional, the use of "return" makes it a function and if there is not a return, it is called a *procedure*.             |
|    ***myFunction();***         |   *Invocation*         |   "calling" the function name allows the function to be used elsewhere in your code. Use the parentheses to call a function. Inside the parentheses, you pass "arguments" which will fit into the slot allocated in the function call signature.            |

<br>

## Each part of a function has special quirks and features.
As mentioned, the example above is of a *function declaration* which is largely the standard layout of a function. However, much of the same information applies to other ways we can declare a function. In addition, each of the components have thier own particular quirks, features, functionalities, etc. There's a LOT quirks and features to consider, but here are some interesting ones to keep in mind:

<br>

However, No functionality is chnaged, only the style of the code which is intended to be more semantic. The only drawback is that you do clutter up the code.

<br>

## All functions in JavaScript are "variadic".
<dl>
<dd>

All functions in JavaScript are ***variadic***, meaning that no matter how many parameters are declared, you can pass as many or as few as you want. In the example, below, if you pass in 3 arguments to a function that expects only 1, you only get one back as a result.
```JavaScript
  function variadicExample(item1) {              // 1 defined parameter.
    return item1;
  }

  console.log(variadicExample(1,2,3))            // 1 (from 3 arguments passed in). 
```

</dd>
</dl>

<br>

## If a function does not return something, it is a procedure.
<dl>
<dd>

**If a function does not RETURN something, it is a procedure.** In the context of functional programming, keep in mind that just because a function has a function keyword doesnt mean it can maintain itself as a function. In other words, any function that calls a procedure CANNOT be called a function... it becomes a procedure as well. This is important in order to take advantage of function programming.
```JavaScript
  function addNumbers(a = 0, b = 0, c = 0) {     // Does not RETURN, is procedural.
    let total = a + b + c;
    console.log(total);
  }

  function moreNumbers(a = 2,...args) {          // Returns something, but relies on procedural.
    return addNumbers(a, 20,...args);
  }

  moreNumbers(); 
```

</dd>
</dl>

<br>

## Pass "parameters" into a function and "arguments" into it's invocation.
<dl>
<dd>

**When you define a function, you pass in parameters into thier respective slot in the call signature.** 

For example, if you had ```function add(num1, num2) {...}```, ```num1``` and ```num2``` are the paramters.  **When you invoke a function (i.e. call a function after it has been declared), you pass in values as arguments.** For example, if you invoke the function ```add``` you would pass in the two numbers in the call signature like so: ```add(1, 2)```.
```JavaScript
  function add(num1, num2) {...}       // When declared, "num1" and "num2" here are PARAMETERS.

  add(num1, num2);                     // When invoked, "num1" and "num2" here are ARGUEMENTS.
```

</dd>
</dl>

<br>

## Parameters have different forms, such as inputs, default parameters, etc.
<dl>
<dd>

**You can pass parameters to a function as inputs:**
```JavaScript
  function add(num1, num2) {...};
```
**You can insert default parameters INSIDE the call signature:**
```JavaScript
  function add(num1, num2 = 5) {...};
```
**You can pass in default parameters in the function body with an OR operator.** 

Note that you do NOT instantiate the default parameter as a variable.
```JavaScript
  function add(num1, num2) {
    num2 = num2 || 5
  };
```

</dd>
</dl>

<br>

## Parameters should be ordered general (on the left) to specific (on the right).
<dl>
<dd>

Parameter order matters a lot. When you order your parameters, you need to go from general (on the left) to specific(on the right). The order of those inputs matter because you are going to provide those inputs one at a time and unfold them in that order. So for example a callback would come before something like an array because the array has specific data in it.

</dd>
</dl>

<br>

## Functions can be nested and called with sets of parentheses.
<dl>
<dd>

For example, you can acutally nest functions inside another function and call the function *successively* inside a series of parentheses. Note a few things here. First, a function returns a function (which can return a function etc.). Second, the way we call this function is in the order the parameters are executed (i.e. num1 > num2 > string). When you call the "add" function, you encapsulate each call signature in order.
```JavaScript
  function add(num1, num2) {
    return function addString(string) {
      return `${string} is: ${num1 + num2}`
    };
  }

  console.log(add(1,2)("the sum of num1 and num2"));
```

</dd>
</dl>

<br>

## Function calls should be semantic.
<dl>
<dd>

The name of a function call describes it purpose, so you want to keep the code more semantic.  The function call should describe its purpose. When making function calls more semantic, you do tend to clutter up your code. However, no functionality has changed... only the style of the code which is intended to be more semantic and readable to the user.

```JavaScript
  
  function ajax(url, data, callback) {...};

  ajax(CUSTOMER_API, {id:25}, renderCustomer);                      // Although this works, it no very readable.
  
  ----------

  function getCustomer(data, callback) {
    return ajax(CUSTOMER_API, data, callback);
  }
  getUser({id: 25}, renderCustomer)                          // This is more semantic even though it adds more code.
```

</dd>
</dl>


</dd>
</dl>


<br>
<br>
<br>
<br>

# How do you define a function?
<dl>
<dd>

## Functions can be defined as declarations, expressions, or as IIFE's
There few ways to define a function: **Named functions (declaration and expression) and Immediately invoked function expressions.** Although they each do the same thing, namely defining a function, each does so in a different way or, as in the case of the Immediately Invoked Function Expression, executed in different ways.

<br>

## A function declaration is hoisted.
A **function declaration** is a common way defining a function. Function declarations are hoisted (i.e. how the browser parses JavaScript reading through once and executing on the second pass) with it's contents to the top level. This even applies to function declarations inside a function which would be hoisted to the top. Here's an example of a function declaration:
```JavaScript
  function addDeclaration(num1, num2) {
    return num1 + num2;
  }
```
<br>

## A function expression is NOT hoisted.
A **function expression** (or "definition expression" or "function literal") is a JavaScript pattern that lets you create a variable and execute it as a function. As a variable, a function expression can be set to a number, a string, an object, or even a function. Unlike a function declaration, function expressions are NOT hoisted with contents, but the reference to it may be hoisted if we assign it as a variable and you can use it everywhere a variable can go. Note that because of an issue with hoisting, if you invoke a function expression before the function itself, you will get an error. Also note that since a function expression is a variable (or if it is a const), we need to terminate the function with a semi-colon.
```JavaScript
  let addExpression = function(num1, num2) {
    return num1 + num2;
  };
```

And of course, this use ES6 syntax with the fat arrow function:
```JavaScript
  let addExpression = (num1, num2) => num1 + num2;
```

Function expressions can also be called through other variables:
```JavaScript
  let addExpression = function(num1, num2) {
    return num1 + num2;
  };

  let addThisUp = addExpression;          // variable called through another variable.
```

<br>

## Immediately invoked function expressions are invoked automatically.
An **Immediately invoked function expression** (or IIFE) is imvoked automatically on load. IIFE's do NOT have names since they run at start. Additionally, variables declared inside the function body will NOT be know outside an an IIFE.
```JavaScript
  (function(message) {
    console.log(message)
  })("This is an immediately invoked function expression");
```

</dd>
</dl>

<br>
<br>
<br>
<br>

# What is hoisting, scope, and scope chain?

<dl>
<dd>

## Hoisting refers to how browsers parse JavaScript. 
***Hoisting*** is the process of moving the FUNCTION DECLARATIONS to the top of the file automatically. 

On the first pass, the browser reads through the code once, setting aside space for variables, functions, etc. On the second pass, the browser reads through AGAIN and executes the code. With hoisting, we can call a FUNCTION before it has been defined.

However, you CANNOT call a function that is defined using FUNCTION EXPRESSION syntax. This is because when the JavaScript engine executes the code, it moves all the function DECLARATIONS to the top. When all the function declarations are 'HOISTED' to the top, we get the term 'hoisting'.

<br>

## Scope refers to the accessibility of variables in your code.
***Scope*** defines how declared variables and functions CAN or CANNOT be accessed at different places in your code. With **Global scope**, the function or variable is available EVERYWHERE in the code. With **Block (local) scope**, a variable is only available within the confines of the function. 

On the subject of global scope are some of the **negative attributes of global variables.** For example, GLOBALS tend to have unintended SIDE EFFECTS. SIDE EFFECTS occur when a local scope variable reaches into global and changes a value there. Side Effects are UNINTENDED since it can change an outside variable to carry out its instructions. And as you now know from the defintion of a function, when this happens, a code is INDETERMINATE. A function should be DETERMINATE, meaning that it should always return the same value and have NO side effects. A function that is determinate is a PURE function.

<br>

## Scope chain looks up to the global scope.
***Scope chain*** refers to the way the JavaScript interpreter determines the value of a variable. First, the interpreter looks locally for the variable. However, if it is not there, then the interpreter will look up the *scope chain* until it reaches *global scope*. One important concept in relation to scope chain is **variable shadowing** which means that if there is a global AND block scope variable, the local block variable will take precedence.

</dd>
</dl>

<br>
<br>
<br>
<br>

# What are side effects?
<dl>
<dd>

## A side effect is the undesired result of indirect inputs/outputs of a function. 
For example, take a look at the procedure below. While this bit of code technically will work, this is NOT a function because while there a relationship between the inputs and the outputs, the inputs and the outputs are INDIRECT so it is not a true function even thought there is a semantic relationship between the variables used in the function and the stated variables outside that function. Note that there are NO parameters listed and there is NO return keyword. Simply put, while this does work, there is a lack of security and proveability that makes this a true function.
```JavaScript
  function add() {                    // impure function with no parameters passed in.
    total = num1 + num2;              // ... and outside variables are still referenced.
  }

  let total; 
  let num1 = 2;                       // Indirect variables.
  let num2 = 3;
  add()
  total;

  console.log(total);                 // 5
```

<br>

## Direct inputs and outputs avoid side effects.
To make the example above a TRUE function, you need to pass in the inputs (i.e. num1 and num2) and return an output (num1 + num2). When you call the function and assign some arguments that correspond to the parameters of the function, it is DIRECT input semantically tied to DIRECT output. This is a true function. And perhaps the most important part of this is that the function call to get the reliable and predictable result.
```JavaScript
  function add(num1, num2) {          // Direct input.
    return num1 + num2;               // Direct output.
  }

  console.log(add(2, 3));             // 5 from a viable function call.
```

</dd>
</dl>

<br>
<br>
<br>
<br>

# What is a pure function?
<dl>
<dd>
 
## A pure function is a determinate function.
A pure function is a determinate function that always returns the same value with no side effects. For example, if a function relies on a variable outside itself, it can *mostly* be considered an *impure* function because that variable is subject to change. 
```JavaScript
  function add(num1, num2) {        // example of a pure function
    return num1 + num2;             
  }

  console.log(add(1,2));            // 3
```

<br>

## A pure function, when given the same input, will have the same output.
A pure function call MUST be predicatable and reliable. In other words, when you give a pure function a given input it will ALWAYS return a given output. So if you have a function that uses something that can be mutated outside the function, then that would NOT be reliable.
```JavaScript
  function generateId() {
    const id = Math.random();      
    return id;
  }

  console.log(generateId());         // output will not be predictable
```

<br>

## A function that references an outer const could be considered pure. 
Now, you could argue that referencing a ```const``` variable outside a function makes the function itself impure, you could also argue that since it is a *constant* it has a level of permanance to validate a function that uses it as a pure function.
```JavaScript
  const outerNum = 3;                // constant variable

  function add(num1, num2) {         // arguably, this is a "pure" function
    return num1 + num2 + outerNum;   // because "outerNum" is a constant.
  }

  console.log(add(1,2));             // 6
```

<br>

## Readability and surface area can contribute to a "pure" function.
Some pure functions can arguably remain "pure" depending on the amount of surface area the function has and the readability of the code itself. For example, you could have a nested function within a function and have that nested function reference an input outside of itself. However, that outer referenced variable when added to the arguments of a call can reduce the "surface area" so that the code is readable and obvious to the reader.
```JavaScript
  function addMore(num1) {                 // num1 passes in OUTSIDE inner function.
    return function add(num2, num3) {
      return num1 + num2 + num3;           // num1 used INSIDE the inner function.
    };
  }

  console.log(addMore(1)(2,3));            // 6
```

<br>

## Functional purity depends on your level of confidence.
In the end, you for a function to be pure depends on how confident you are that the input for your function will match the output in a predictable way. If you determine that the probablity is high that the resutl will be predictable, then you can most likely label it a pure function. Functional programming requires you to make sure that you have a higher (rather than lower) degree of confidence in the results of your function calls. 

<br>

## If functional impurities are unavoidable, extract them.
There may be cases where an impure function is unavoidable. In these cases you would want to make sure that they are extracted outside so that you can at least have a smaller (yet predictable) pure function. It should be noted that in most cases, when you need to do this you do not get rid of the impurity but you "extract" it to the outer layers so the side effects are isolated to the outer shell of your code.

For example, in the function below we want to create a new product. However, there is an "impure" part of this function named ```uniqueId```. The ```uniqueId``` property is "impure" because it can change based on the product. In other words, the result of this ```newProduct``` function is not predictable.
```JavaScript
  function newProduct(productId, comment) {
    let product = {
      id: uniqueId(),                          // id is the impurity bc uniqueId changes per product.
      text: comment
    }
  }
```

To make the function a little bit purer (i.e. more predictable), we need to "extract" that part of the function to the outer parts of our code. When you do this, you increase the level of confidence in the ```newProduct``` function and, should there be any errors or side effects, we know that we can look first at the outer shell first for bugs.
```JavaScript
  function newProduct(productId, comment) {
    let product = {
      id: productId(),                         //
      text: comment
    }
  }

  let productId = uniqueId();                 // the uniqueId part is "extracted".
```

<br>

## Contain function impurities by WRAPPING a function around it.
In the event that you identify an impurity in your code, you can contain the impurity such that it does not effect other parts of your application. One way to contain functional impurities is to *contain* the impurity by ***wrapping*** a function around it. In this way, you can contain the effects to a single function call. 

In the example below we have an array of books on cars. The current function we have will modify the books array by sorting alphabetically by title. However, **this is an impure function because ```sortBooksByName``` modifies the ```books``` variable which is outside itself.** In other words, we want a way to contain the modifications to the function itself so that we DO NOT modify the orginal ```books``` array.
```JavaScript
  let books = [                                         // original variable
    { id: 1, title: "Fixing Old Cars"},
    { id: 2, title: "Selling New SUVs"},
    { id: 3, title: "Buying New Sports Cars"},
  ];

  function sortBooksByName() {                          // sorts books by name
    books.sort(function byTitle( title1, title2) {
      if (title1.title < title2.title) {
        return -1;
      } else if (title1.title > title2.title) {
        return 1;
      }
    });
    return books;
  }

  console.log(sortBooksByName());   /* [  { id: 3, title: 'Buying New Sports Cars' },
                                          { id: 1, title: 'Fixing Old Cars' },
                                          { id: 2, title: 'Selling New SUVs' } ]       */
```

<dl>
<dd>
<dl>
<dd>
<dl>
<dd>

------
### First, wrap your existing impure function in a pure function.
------
Since we already have ```sortBooksByName```, we "wrap" another function around it and contain the impurity. To do this, we first need to wrap another function called ```getBooksByName``` around ```sortBooksByName``` and pass in ```books``` as a parameters. By doing this, we contain the impurity so it does not leak out into the rest of the scope.
```JavaScript
  function getBooksByName(books) {                         // wrapper function.
      function sortBooksByName() {                         
        books.sort(function byTitle( title1, title2) {
          if (title1.title < title2.title) {
            return -1;
          } else if (title1.title > title2.title) {
            return 1;
          }
        });
        return books;
      }
  }
```
------
### Second, make a local copy of your variable 
------
Since the objective here is to preserve the integrity of the outer variable (i.e. ```books```), what we want to do is create a copy and store it locally so that we keep the impurity within the wrapped function. And when we call the wrapped function ```sortBooksByName```, which although producing a side effect will only do so to the local copy and not the outer variable.
```JavaScript
function getBooksByName(books) {                         
  books = books.slice();                                 // local copy of "books".
  return sortBooksByName();                              // call sortsBookByName.

  function sortBooksByName() { 
     books.sort(function byTitle( title1, title2) {
       if (title1.title < title2.title) {
         return -1;
       } else if (title1.title > title2.title) {
         return 1;
       }
     });
     return books;
   }
}
                                      // Output of wrapped function:
console.log(getBooksByName(books));   /* [ { id: 3, title: 'Buying New Sports Cars' },
                                           { id: 1, title: 'Fixing Old Cars' },
                                           { id: 2, title: 'Selling New SUVs' } ]  */

                                      // Output of global variable:
console.log(books);                   /* [ { id: 1, title: 'Fixing Old Cars' },
                                           { id: 2, title: 'Selling New SUVs' },
                                           { id: 3, title: 'Buying New Sports Cars' } ]*/
```

</dd>
</dl>
</dd>
</dl>
</dd>
</dl>

<br>

## Or use an adapter to modify the orginal and reset back again.
When you use an adapter, you are effectively using a brute force method to maintain function purity. In the example below, we first create copies of the original books variable from outside the function and the local copy of books for inside our adapter. Then, we run the ```sortBooksByName``` so we can finally get the newly ordered book list. Then, we restore the original order back to the original outside ```books``` variable. And last, we can now return ```newBooks```.
```JavaScript
  function getBooksByName() {
    let originalBooks = books.slice();            // create a backup copy of the books array.
    books = originalBooks.slice();                // create a backup copy of the initial state of books.
    let newBooks = sortBooksByName();             // newly modified and ordered books.
    books = orginalBooks;                         // Then restore the original book order.
    return newBooks;                              // and lastly, return the newBooks which was reordered.
  }
```

</dl>
</dd>

<br>
<br>
<br>
<br>

# What are arguments?
<dl>
<dd>

## An argument is value passed as a parameter to a function.
To reiterate what was briefly touched on in "How a function works", an ***argument*** is a value that is passed into a function defintiion's *parameters*.
```JavaScript
  function add(num1, num2) {    // 2 and 3 are passed into the call signature as PARAMETERS
    return num1 + num2;
  }

  add(2,3);                     // 2 and 3 are the ARGUMENTS.
```

<br>

## Function programming mostly involve unary and binary inputs.
The shape of a function is defined by the number and kinds of things passed into and the number and kinds of thingsthat come out of it. In the case of functional programming, most would prefer to use a *unary* function that uses only a single input and then *binary* inputs that use only two inputs. Why? Simply put, the more inputs you have with a function, the harder it is to have them work with other functions.

A ***unary function*** takes a **single value** in and a **single value out**.
```JavaScript
  function add(num1) {                        // This is a unary function (single input).
    return 5 + num1;
  }
```

A ***binary function*** takes **two values** in and a **single value out**.
```JavaScript
  function add(num1, num2) {                  // This is a binary function (two inputs).
    return num1 + num2;
  }
```

A ***n-ary function*** takes more than two inputs.
```JavaScript
  function add(num1, num2, num3, num4) {     // This is a n-ary function (more than 2).
    return num1 + num2 + num3 + num4;
  }
```
</dl>
</dd>

<br>
<br>
<br>
<br>

# What is a high-order function?
<dl>
<dd>

## Adapters "adapt" the shape of a function.
Since JavaScript functions are *variadic*, meaning that no matter how many parameters you declare, you can pass as many or as few as you want, you can **adapt the shape** of a function. In otherwords, you have two pieces that do not fit and you need an adapter to make them fit.

To make an adapter, you can use a *high-order function* to wrap around your adapter. For example, if you invoke a function with 3 arguments but the function is binary (meaning, it takes in two values), the orginal function invocation is *n-ary* and was reduced to *binary* thus changing it's *shape*.

In the example below, we use the high-order function ```singleOutput``` to wrap around our adapter function ```one```:

```JavaScript
  function singleInput(fn) {                         // high-order function
    return function one(arg) {                       // adapter
      return fn(arg);
    };
  }

  function multipleInputs(...args) {  
    return args;
  }

  let testAdapter = singleInput(multipleInputs);


  console.log(testAdapter(1,2,3,4));
  ```

<br>

## "High-order" function utilities return adapter functions.
A ***high-order function*** is a function that recieves inputs of one or more functions and/or returns one or more functions. Basically, a high order function is the "wrapper" of another function which is returned. In contrast to a high-order function, a *single order function* does NOT receive or return a function. Note that the function returned from the high-order function (i.e. ```singleInput```) has a **single** variable. The high-order function adapts the n-ary function to fint a unary high-order function.
```JavaScript
  function singleInput(fn) {             // "singleInput" is a high-order function...
    return function one(arg) {           // that adapts another function (i.e. "one")...
      return fn(arg);                    // with the result.
    };
  }
```

## Adapter functions can perform shape adaptations.
For example, suppose you have a function needs to "flip" the order of arguments so that you can pass the arguments as parameters in a different order. In order to create this new shape adaptation that "flips" the order of the arguments, you can create a ***flip*** adapter.
```JavaScript
  function flip(fn) {                                   // flip high-order function
    return function flipped(arg1, arg2, ...args) {      // adapter function takes the collective arguments.
      return fn(arg2, arg1,...args);                    // and flips the first two.
    };
  }

  function f(...args) {                                 // function with collective arguments
    return args;
  }

  let flipThis = flip(f);

  console.log(flipThis(1,2,3,4));                        // [ 2, 1, 3, 4 ]
```
The example below reverses the entire input:

```JavaScript
  function reverseArguments(fn) {                       // reverse high-order function
    return function flipped(arg1, arg2, ...args) {      // adapter function takes the collective arguments.
      return fn(...args.reverse());                     // and flips all the arguments.
    };
  }

  function f(...args) {                                 // function with collective arguments
    return args;
  }

  let flipThis = flip(f);

  console.log(flipThis(1,2,3,4));                        // [ 4, 3, 2, 1 ]
```

## However, use adaptors sparingly since they are less familiar.
Although adapters can be execeptionally useful in your code, the problem is that if someone comes by later and reviews your code and they dont recognize or understand it, it can make the point of functional programming less impactful.

</dl>
</dd>

<br>
<br>
<br>
<br>

# What is point-free and equational reasoning?
<dl>
<dd>

## Equational reasoning is used to define a function point-free.
**Equational reasoning** means (within the context of functional programming) that if you have two things (i.e. functions, etc.) and they both have the same *shape*, then they are *interchangable*. In the example below, we have a function ```onCar``` that has the same shape (i.e. the functions are similar with the same parameter) to ```renderCar```. Since ```onCar``` is *equationally* (equivalent) to ```renderCar```, if you use ```renderCar``` as the argument with```getCar```, because the parameter is the same you can define the function ```getCar```, it is **point-free**, which means you can define a function *without* defining its points (i.e. inputs).
```JavaScript
  getCar(function onCar(car) {    // "onCar" is equational to... 
    return renderCar(car);        // ... "renderCar" bc of shape and parameter.
  });

  getCar(renderCar);              // so we can call getCar with renderCar "point-free".
```
<br>

## Equational reasoning creates visible relationships
In the example below, ```isEven``` is defined in terms of the ```isOdd``` function. Although you could just do the same code for isEven as you did with isOdd, but the befint of this is that you are creating a visible relationshop. This is not completely necessary, but in terms of functional programming could help your reader out.
```JavaScript
  function isOdd(num) {
    return num % 2 === 0;
  }

  function isEven(num) {
    return !isOdd(num)            // isEven is the negation of isOdd.
  }

  console.log(isEven(8));         // true
```

</dd>
</dl>

<br>
<br>
<br>
<br>

# What is closure?
<dl>
<dd>

## Closure is when you close over a variable that is around it.
Closure is when a function remembers the variables around it even when that function is executed elsewhere. For example, if you have a variable within a function and a function inside the function that uses that that variable, the inner function is "closing" around that variable.

In the example below, we have a function called ```counter``` with a ```count``` variable and a ```increment``` function that increments by one. When you call ```doCount``` the ```counter``` function runs and increments by one. For every successive time you call the ```counter``` function, the value will increment by one. So where is **closure** in this example?  

The inner function ```increment``` is "closed" around the ```count``` variable OUTSIDE the function. When you run ```doCount```, the increment is still remembered and updated. However, it is important to note that in terms of functional programming, this is NOT a pure function as the function does NOT return the same value everytime we call it.
```JavaScript
function counter() {
  let count = 0;                       
  return function increment() {                  // "increment" closes around the count variable. 
    return ++count;
  };
}

let doCount = counter();

console.log(doCount());                          // 1 
console.log(doCount());                          // 2
console.log(doCount());                          // 3
```
<br>

## Closure must be over non-changing values.
Closure is not exactly functionally pure. If you want to use closure in functional programming and keep the function pure, it must be over non-changing values. Otherwise you will get a class of bug that may work in many cases but will have issues at some point. In the example below, we have an example of closure with a pure function. The function ```addAnotherNum``` has the parameter "c". This parameter is passed into the inner ```addTwoNums``` function from outer scope. The ```addTwoNums``` function is closed over the variable "c" and this is why it is able to use that variable. 

In terms of functional programming, it is "safe" functionally because the variable does not change... it is a memory of thing that does not get modified.
```JavaScript
  function addAnotherNum(c) {                    
    return function addTwoNums(a,b) {            
      return a + b + c;                          // addTwoNums is closed around the "c" variable.
    };
  }
```

</dd>
</dl>


<br>
<br>
<br>
<br>

# What is lazy and eager execution?

<dl>
<dd>

## Lazy execution defers work until called.
**Lazy (i.e. deferred) execution is when you defer some work by putting it into a function and deferring it until the function is called.** In other words, you choose to put the code somewhere where it is executed *lazily* later. In the example below, when you call ```blockItOut```, you will call the ```repeater``` with a value of 8 resulting in 8 hashtags. The ```repeater``` function gives back a function called ```addBlock``` that is *closed* around the variable ```count```.  The variable ```blockItOut``` is declared with the amount to block out (i.e. 8) and when you call it, you will always get 8 hashtags (i.e. ########). 

What is important to consider with this example is *when* the work in this code happened. In the example below, the work is done inside ```addBlock``` which means that the work is done when you call the high-order function rather than inside the variable ```blockItOut```.

**Why would you want to defer the work?** If some work is computationally heavy and you were not sure the work didnt need to be called all the time, you would save on work that would otherwise be wasted. By adding an additional layer of function wrapping, work will only occur when the inner ```addBlock``` function is called. So you would want to do this if you have a function that was only occasionally called because you would have to call it every single time.

```JavaScript
  function repeater(count) {
    return function addBlock() {           // "addBlock" is deferred.
      return "".padStart(count, "#");
    }
  }

  let blockItOut = repeater(8);

  console.log(blockItOut());               // ########
  console.log(blockItOut());               // ########   (second time same)
  console.log(blockItOut());               // ########   (third time same)
```

<br>

## Eager execution executes once when called.
With eager execution, instead of work occuring when the function is called, the work occurs when the ```blockItOut``` function is called. The reason is because the variable ```str``` is declared outside the closure of the inner function. As opposed to lazy execution, the work is only done once. However, if ```blockItOut``` isnt called, work is done unnecessarily. Also note that unlike in lazy execution where the it was ```count``` that was closed over, in this case it is ```str``` and the place that we put that code is why it is eager (i.e. outside the inner function).
```JavaScript
  function repeater(count) {
    let str = "".padStart(count, "#");
    return function addBlock() {    
      return str;
    }
  }

  let blockItOut = repeater(8);

  console.log(blockItOut());               // ########
  console.log(blockItOut());               // ########   (second time same)
  console.log(blockItOut());               // ########   (third time same)
```


</dd>
</dl>


<br>
<br>
<br>
<br>

# What is memoization?
<dl>
<dd>

## Memoization contains the cache side effects of an inner function.

In other words, memoization is the caching of results so they cannot be observed by any other part of the program. The benefits of memoization is that work is deferred and then once done, it is cached for future use. The cost of memoization is that it takes up internal cache, so it takes up additional memory and for this reason you shouldnt use it for every function you make. If you expect for a function to be called multiple times with the same input, then you should use memoization. You need to be able to predict the expected use cases before you implement memoization

In the example below, we have a lazy execution and it is stored in cache. The function ```hashTagIt``` is closed over a variable that is changing, specifically ```str```. Although this seems like it is an impure function because the variable ```str``` can be changed, given the same input (i.e. 10), it does return the same output (i.e. ##########).
```JavaScript
  function repeat(count) {
    let str;                                 // variable "str" is undefined by default.
    return function hashTagIt() {            // When invoked, "hashTagIt" (w/ closed around str).
      if (str == undefined) {                // check to see if str is undefined (will only be once).
          str = "".padStart(count, "#");     // if it is, pad with hashtags...
      }
      return str;                            // and return str.
    };
  }

  let blockedOut = repeat(10);

  console.log(blockedOut());                 // ##########
  console.log(blockedOut());                 // ##########
```

## You can also use a memoization utility to do the same thing.
There are special functional utility libraries that exist that can do the same thing as what was done above that computes an output for an input once and then cache that information. Then, when you need to get the information, you can return it easily. To do this, you woudl simply wrap the inner function in a "memoize" or "memo" method.


</dd>
</dl>

<br>
<br>
<br>
<br>



# What is referential transparency?
<dl>
<dd>

**Referential transparency means a function can be replaced with its return value and not effect any part of the program.** A function is pure if it has referential transparency. Laguages like Haskel, referential is a key part of the langauge which the compiler can take advantage of. Thus, Haskel can memoize eveyrthing because it can do it with no issue. But although Haskell can do that, JavaScript cannot. But that does not mean that referential transparency is only useful to languages that the complier can use. 

The benefit of referential transparency is to the benefit of the reader. Within the confines of JavaScript, referential transparency matters because it puts the responsibility on you, the author of the code,to make it as easy apossible for the reader of your code, to look at a line and know exactly what it is going to do so you dont have to do that work over again. This lends to the argument that function purity matters a great deal.

</dd>
</dl>

<br>
<br>
<br>
<br>

# What is Partial Application?
<dl>
<dd>

## Partial application presets arguments for a function.
**Partial application is presetting arguments.** A *partial application* specializes a generalized function by taking a function as its first input and then the next inputs are a set of pameters that will go along with that function at some point. This featre is included in most functional libraries. In the example below, ```getCustomer``` uses a partial application which specifies the function (ajax) and the ordered parameters (CUSTOMER_API). When you call getCustomer, you are effectively calling ajax and passing in the url and data parameters as CUSTOMER_API and the object.

```JavaScript
  function ajax(url, data, callback) {...};

  let getCustomer = partial(ajax, CUSTOMER_API, {id:25});     
```

</dd>
</dl>

<br>
<br>
<br>
<br>

# What is Currying?
<dl>
<dd>

## Currying recieves each argument one at a time as a chained sequence.
**Currying is a common form of specialization that specializes a general function.** Based on the functionality of Haskel and the fact that its functions are unary, currying 
enables you to pass along one input at a time. In the example below you will see a *manual, 3 level curry* function, we have a function called ```ajax``` that has 3 levels: an ajax level, a getData level, and a getCallBack level. 
```JavaScript
  function ajax(url) {                                // level 1: ajax.
    return function getData(data) {                   // level 2: getData.
      return function getCallBack(callback) {...}     // level 3: getCallBack.
    }
  }
```

When you call the ajax function, you call the function with 3 sets of parentheses. These parentheses are for the different levels of the function. So there are 3 functions nested
and there are 3 function calls.
```JavaScript
  function ajax(url) {
    return function getData(data) {
      return function getCallBack(callback) {...}
    }
  }

  ajax(CUSTOMER_API) ({id:25}) (renderCustomer);    // call ajax with a chained sequence manual curry.
  //       |             |             |       
  //       |             |             |
  //    level 1       level 2       level 3
```

The benefit of currying is that when you do this, you can call the nested functions and save off the intermediate functions.
 ```JavaScript
  function ajax(url) {
    return function getData(data) {
      return function getCallBack(callback) {...}
    }
  }

  let getCustomer = ajax(CUSTOMER_API);               // Will return the level 1 with CUSTOMER_API.
  let getCurrentUser = getCustomer({id:25})           // Will return the level 2 via getCustomer.
```

## In JavaScript, you can make a utility to curry.
For this utility, you simply need to call curry, pass in how many inputs you expect to receieve, and then provide the function. Note that the curry utility will automatically adapt the function into the multi-level function from above. This utility creates a adapeter function (i.e. wrapper) whose job it is to expect another input until you provide th especified number of inputs, and then calls the underlying function.
```JavaScript
  let ajax = curry(
    3,
    function ajax(url, data, callback){...};
  );

  let getCustomer = ajax(CUSTOMER_API);               // Will return the level 1 with CUSTOMER_API.
  let getCurrentUser = getCustomer({id:25})           // Will return the level 2 via getCustomer.
```

</dd>
</dl>

<br>
<br>
<br>
<br>

# What is composition?
<dl>
<dd>

## Composition takes the output of one function as the input of another.
Composition is critical to understanding the output of one function becoming the input of another function. An important concept in composition is spotting when one function call produces an output that is then routed to another function call. Often, they will often placed in a variable and then the variable is passed. But you can also nest those calls together and make things a great deal more efficient.

## Abstraction takes two intertwined things and seperates them.
In abstraction, you have two or more things in a peice of code that intertwince together. In the example, we first have the concept of caluclating a shippinf rate. Second, we're adding that shippng rate to the basePrice. Those are two seperate concerns but they are wrapped up together. So abstraction is to tease apart these two concepts that are intertwined together so that they are seperate and when they are seperated, you can create a semantic boundry that allows you not to hide but seperate them. In other words, you could look at the seperate parts and understand them better.

## Think of composition as an assembly line.
Think of composition like an assembly line. Raw materials come in one end on the right and a finsihed product comes out on the left. So imagine you have a conveyer belt with those raw materials going through 3 machines, with each machine composing the product to different degrees of completion. Now suppose one day your boss came to you can said your competitors are making more of the product and faster than we are... can you figure out a way to compete. However, there is only so much room on your factory floor so you need to think of a way to fit more of thes emachines so you can make more of the product. 

In the example below, we have the INEFFICIENT production line to produce a product. We have the base price of 10. Then, there are three functions (i.e. the machines) that subtract, multiply, and increment by one which simulate the imporvements we make to the product. This example is inefficient because the temporary variable (tmp) take up space.

```JavaScript
let baseProduct = 10;
 
function minus2(x) {  
  return x - 2;
}
function triple(x) {
  return x * 3;
}
function increment(x) {
  return x + 1;
}

let tmp = increment(4);
console.log(tmp);                            // 5

tmp = triple(tmp);
console.log(tmp);                            // 13

totalProduct = baseProduct + minus2(tmp);
console.log(totalProduct );                  // 23

```

## Make the assembly line more efficient with nested calls.
To make the production line above more streamlined, a better way would be to removed the temporary variable and nest the function calls inside of another function call. In this streamlined production line, we first call ```increment``` with a value of 4, call ```triple```, and call ```minus2```. The temporary variables were removed, thus cleaning up the code.

```JavaScript
let baseProduct = 10;
 
function minus2(x) {  
  return x - 2;
}
function triple(x) {
  return x * 3;
}
function increment(x) {
  return x + 1;
}

totalProduct = baseProduct + minus2(triple(increment(4)));
console.log(totalProduct);                                      // 23
```

## Abstract the processes to semantically seperate concerns.
Now suppose that after the solution above is implementsed, your boss comes back and says that its difficult for workers to use. The boss asks if you can create a single machine that can do the the whole process. In the case of your machine, you have a place where you are making the product and adding that to the baseProduct. These two things are intertwined and need to be abstracted so that they can be reasoned about independently.

## Create an abstraction for the composition by wrapping it in a function.
The solution is to write a function that makes the product (i.e. ```minus2(triple(increment(4)))```) and takes in the value 15. Then, when you add it to the baseProduct, you simply have to add the improveProduct function to it. **In effect, imporveProduct has semantically seperated the two concerns and made it much cleaner.**  The improveProduct function is where we tell the supporting function how to improve the product and totalProduct is where we tell what to do with it... specifically adding it to the baseProduct.

To further the analogy, what you are doing is wrapping a box around the entire production line (i.e. minus2, triple, increment) and creating an access point where you can get to each stage of the process. The machine does what it needs to do, but as the engineer you have create the *abstraction* on how the production is done.

```JavaScript
let baseProduct = 10;
 
function minus2(x) {  
  return x - 2;
}
function triple(x) {
  return x * 3;
}
function increment(x) {
  return x + 1;
}

function improveProduct(x) {
  return minus2(triple(increment(x)));                          // 13
}

totalProduct = baseProduct + improveProduct(4);
console.log(totalProduct);                                      // 23
```

## Create a utility to make the composition more versatile.
Now suppose your boss asks that although the machine is good and it works well, other competitors are making machines that make machines! You can actually do this by making a utility that can take functions that are entirely different than the original machine to create a new one. In the example below, the utility take 3 functions and calls a new function that will call each of those function in succession, the out of one becomes the input of the next, etc, until the last output is finally returned. 

The composeThree utility is the higher-order utility that is a machine-making machine. You could take the composeThree utility and use it mulitple times in any different configuration you want, such as producing different products by passing event he same exiswting functions in a different order.

```JavaScript
let baseProduct = 10;
 
function minus2(x) {  
  return x - 2;
}
function triple(x) {
  return x * 3;
}
function increment(x) {
  return x + 1;
}

function composeThree(fn3, fn2, fn1) {                            // composition utility
  return function composed(v) {
    return fn3(fn2(fn1(v)));
  }
}
 
let calculateProduct = composeThree(minus2, triple, increment);    // Product 1
let calculateProduct2 = composeThree(increment, minus2, triple);   // Product 2


totalProduct = baseProduct + calculateProduct(4);
totalProduct2 = baseProduct + calculateProduct2(4);

console.log(totalProduct);                                         // 23
console.log(totalProduct2);                                        // 21

```
## A composed function is all about data flow.
Note that the return of the "composed" function is not only point free (i.e. it can be defined without defining its points/inputs). Note that the return is going to return in order from right to left. In so doing, composition is actually **declarative data flow**, which is the flow of data through a series of operations. Indeed, your program does not mean anything if it does not mean data flow... the whole point is that your program has data coming in, doing something, going back out. You should declare a programs data flow since a program is a series of state-transition-managed data flows.

## You can also "pipe" instead of compose.
When you compose, you feed the functions *right-to-left* (i.e. third(second(first(x))). However, you can also pipe (i.e. first(second(third(x))). Which is best is up to you, however compose seesm to favored by functional programmers much more than piping.

</dd>
</dl>

<br>
<br>
<br>
<br>

# What is associativity?
<dl>
<dd>

Associativity is a mathematical concept where if you were given "1 + 2+ 3", the plus-sign is associative. Specificaly, the way that you group them in does NOT matter. For example, you could group "1 + 2" and add that to "3" and you would still have the same sum.


</dd>
</dl>

<br>
<br>
<br>
<br>