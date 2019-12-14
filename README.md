# Functional Programming Study

* [What is Functional Programming?](#What-is-Functional-Programming)
* [What is a function?](#What-is-a-function)
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

## A function has a standard composition.
A function is comprised of: *function keyword, name, callsignature (with or without parameters), a main block of the function (where your code will go) inbetween curly braces.* To call a function, "call" the function name and pass any "arguments" that are needed.
```JavaScript
    //FUNCTION KEYWORD        //NAME       //CALL SIGNATURE (W/PARAMETER)
    //               \           |         /
                    function myFunction(str) {
                      return str;                     //MAIN BLOCK of function that RETURNS a result
                    }
                    
                    myFunction("Hello!"));            //CALL (W/ARGUMENT)
```
To understand the composition of a function better, let's look at each of the components of a function in closer detail:

| **Component:**           | **ID:**              | **Description:**                            |
| ------------------------ | ---------------------| ----------------------------------------------|
|   function               | Keyword              |  Functions are "defined" with the ```function``` keyword and are often called "declaring" a function.             |
|   myFunction             |  Name               |  The name of the function is used to "invoke" the function elsewhere in your code. It can be optional (i.e. anonymous function) and can include upper and lower case letters, 0-9 numbers, underscore (_), cash sign ($), and some special characters.             |
|   (str)                  |  Call Signature      | A call signature conatins "parameters", which are seperated by commas. You can have as many parameters as you wish. Additionally, remember the parameters are *local* and ONLY available inside the function.             |
|    {...}                 |  Main Block          |  Since the objective of a function is to do something, the main block of your function has *instructions* which are themselves *statements*. These statements are seperated by semicolons (;).   |
|    return              |     Return        |   The "return" statement returns a result, such as an object, an array, or even another function back to the caller. The return statement must be in the body of the function. Although it is technically optional, the use of "return" makes it a function and if there is not a return, it is called a *procedure*.             |
|    myFunction();         |   Invocation         |   "calling" the function name allows the function to be used elsewhere in your code. Use the parentheses to call a function. Inside the parentheses, you pass "arguments" which will fit into the slot allocated in the function call signature.            |

<br>

## Functions must return something, otherwise it is a "procedure".

<dl>
<dd>

In the context of functional programming, there are few things to keep in mind. First is that just because a function has a function keyword doesnt mean it can maintain itself as a function.
**What this means is that if a function does not RETURN something, it is a *procedure*.**  Any function that calls a procedure cant be called a function, it becomes a procedure as well. This is important in order to take advantage of function programming.

</dd>
</dl>

## Parameters" are passed into a function, "arguments" when invoked.

<dl>
<dd>

**When you *define* a function, you pass in *parameters* into thier respective slot in the call signature.** For example, if you had ```function add(num1, num2) {...}```, ```num1``` and ```num2``` are the paramters.  **When you *invoke* a function (i.e. call a function after it has been declared), you pass in values as arguments.** For example, if you invoke the function ```add``` you would pass in the two numbers in the call signature like so: ```add(1, 2)```.

</dd>
</dl>

## Functions can parameters in different forms, such as inputs and default parameters.

<dl>
<dd>

The standard way is to pass parameters to a function is as inputs:
```JavaScript
  function add(num1, num2) {...};
```
You can also insert a default parameter INSIDE the call signature.
```JavaScript
  function add(num1, num2 = 5) {...};
```
You can also pass in default parameters with an OR operator. Note that you do NOT instantiate the default parameter as a variable.
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
There are ways to define a function: ***Named functions (declaration and expression), Anonymous closure functions, and Immediately invoked function expressions***.
