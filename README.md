# Functional Programming Study

* [What is Functional Programming?](#What-is-Functional-Programming)
* [What is a function?](#What-is-a-function)
* [How does a function work?](#How-does-a-function-work)
* [How do you define a function?](#How-do-you-define-a-function)
* [](#)
* [](#)

<br>
<br>
<br>
<br>

# What is Functional Programming?
<dl>
<dd>

**Functional programing (FP) is a paradigm where the process of building software by composing pure functions, avoiding shared state, mutable data, and side effects.** Functional programming tends to be *provable*, *concise*, *predicatable*, and *easier to test* than other programming paradigms such as Object Oriented Programming (OOP).

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

**A function is a repeatable process or behavior that not only takes some input but returns some output.** A function is *repeatable* (i.e. can be called multiple times) and *determinate* (i.e. predictable). Functions are *modular* and are the fundamental building blocks of JavaScript that perform tasks or calculate values. A function is a semantic relationship between the input and the computed output (i.e. a relationship between what you put in and what you get out).

</dd>
</dl>

<br>
<br>
<br>
<br>

# What are the four primary parts of a functions
The best way to explain how a function works is to examine the primary parts of a function first to gain a better understanding of what a function is and what it does. Below we have an example of a *function declaration* (which is one of serveral ways you can define a function) with the core components marked and explained in detail below that. Note that when a function has been defined, you can "call" a function which means you can invoke the function name and pass any "arguments" that are needed to return a result. 
```JavaScript
    //FUNCTION KEYWORD        //NAME       //CALL SIGNATURE (W/PARAMETER)
    //               \           |         /
                    function myFunction(str) {
                      return str;                     //MAIN BLOCK of function that RETURNS a result
                    }
                    
                    myFunction("Hello!"));            //CALL (W/ARGUMENT)
```

<dl>
<dd>

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

</dd>
</dl>

<br>
<br>
<br>
<br>

# How do you define a function?
There are ways a few ways to define a function: ***Named functions (declaration and expression) and Immediately invoked function expressions.*** 

<dl>
<dd>

<br>

## Named functions are either function declaration or expressions.
A **function declaration** is a common way defining a function. Function declarations are hoisted (i.e. how the browser parses JavaScript reading through once and executing on the second pass) with it's contents to the top level. This even applies to function declarations inside a function which would be hoisted to the top. Here's an example of a function declaration:
```JavaScript
  function addDeclaration(num1, num2) {
    return num1 + num2;
  }
```
<br>

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

***Hoisting*** is the process of moving the FUNCTION DECLARATIONS to the top of the file automatically. 

Hoisting refers to how browsers parse JavaScript. On the first pass, the browser reads through the code once, setting aside space for variables, functions, etc. On the second pass, the browser reads through AGAIN and executes the code. With hoisting, we can call a FUNCTION before it has been defined.

However, you CANNOT call a function that is defined using FUNCTION EXPRESSION syntax. This is because when the JavaScript engine executes the code, it moves all the function DECLARATIONS to the top. When all the function declarations are 'HOISTED' to the top, we get the term 'hoisting'.

***Scope*** defines how declared variables and functions CAN or CANNOT be accessed at different places in your code. With **Global scope**, the function or variable is available EVERYWHERE in the code. With **Block (local) scope**, a variable is only available within the confines of the function. 

On the subject of global scope are some of the **negative attributes of global variables.** For example, GLOBALS tend to have unintended SIDE EFFECTS. SIDE EFFECTS occur when a local scope variable reaches into global and changes a value there. Side Effects are UNINTENDED since it can change an outside variable to carry out its instructions. When this happens, a code is INDETERMINATE. A function should be DETERMINATE, meaning that it should always return the same value and have NO side effects. A function that is determinate is a PURE function.

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

**A *side effect* is essentially a reference to the indirect inputs or outputs of a function.** 

For example, take a look at the procedure below. While this bit of code technically will work, this is NOT a function because while there a relationship between the inputs and the outputs, the inputs and the outpits are INDIRECT so it is not a true function even thought there is a semantic relationship between the variables used in the function and the stated variables outside that function. Note that there are NO parameters listed and there is NO return keyword. Simply put, while this does work, there is a lack of security and proveability that makes this a true function.
```JavaScript
  function add() {                    // no parameters passed in.
    total = num1 + num2;
  }

  let total; 
  let num1 = 2;                       // Indirect variables.
  let num2 = 3;
  add()
  total;

  console.log(total);                 // 5
```

To make the example above a TRUE function, you need to pass in the inputs (i.e. num1 and num2) and return an output (num1 + num2). When you call the function and assign some arguments that correspond to the parameters of the function, it is DIRECT input semantically tied to DIRECT output. This is a true function. And perhaps the most important part of this is that the function call to get the reliable and predictable result.
```JavaScript
  function add(num1, num2) {
    return num1 + num2;
  }

  console.log(add(2, 3));             // 5
```



</dd>
</dl>

<br>
<br>
<br>
<br>