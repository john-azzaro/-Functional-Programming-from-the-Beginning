# Functional Programming Study

* [What is Functional Programming?](#What-is-Functional-Programming)
* [What is a function?](#What-is-a-function)
* [How does a function work?](#How-does-a-function-work)
* [How do you define a function?](#How-do-you-define-a-function)
* [What is hoisting, scope, and scope chain?](#What-is-hoisting-scope-and-scope-chain)
* [What are side effects?](#What-are-side-effects)
* [](#)
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

## If a function does not return something, it is a procedure.
<dl>
<dd>

**If a function does not RETURN something, it is a procedure.** 

In the context of functional programming, keep in mind that just because a function has a function keyword doesnt mean it can maintain itself as a function. In other words, any function that calls a procedure CANNOT be called a function... it becomes a procedure as well. This is important in order to take advantage of function programming.
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

## Pass "parameters"into a function and "arguments" into it's invocation.
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

## A pure function when given the same input will have the same output.
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
In the event that you identify an impurity in your code, you can contain the impurity such that it does not effect other parts of your application. One way to contain functional impurities is to *contain* the impurity by ***wrapping*** a function around it. In this way, you can contain the effects to a single function call. In the example below we have an array of books on cars. The current function we have will modify the books array by sorting alphabetically by title. However, this is 
```JavaScript
let books = [
  { id: 1, title: "Fixing Old Cars"},
  { id: 2, title: "Selling New SUVs"},
  { id: 3, title: "Buying New Sports Cars"},
];

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

console.log(sortBooksByName()); 
```




</dd>
</dl>

<br>
<br>
<br>
<br>
