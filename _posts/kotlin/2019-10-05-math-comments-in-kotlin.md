---
layout: post
title:  "Basic arithmetic operations and comments in Kotlin"
categories: Kotlin
author: Utkarsh Raghav
---
In the following tutorial, we're going to understand how to perform basic maths operations and writing comments in between program in Kotlin.

#### Note :-<br>
- This tutorial assumes, you have a basic working knowledge of IntelliJ Idea.
- Have Kotlin installed setup in your machine.
- **Follow the last tutorials for setting up a new class file before you can begin writing script.**

Before we begin, we need to have a main function. This main function is called upon when the file is being executed, just like Java's main function.

## Declaring comments :
There are two ways to put comments in Kotlin.

1. Using // for in-line comments.
2. Using /\*\*/ for comments spanning multiple lines.

In Kotlin, similar to Java, just use // to declare an in-line comment or /\*\*/ to declare a multi-line comment.

{% highlight kotlin %}
  fun main(args: Array<String>) {
    val date = "21st March" // This is an in-line comment
    /*
    This however
    is a multi-line
    comment
    */
  }

{% endhighlight %}

## Basic arithmetic operations
### Types of numbers in Kotlin

Kotlin has *5 Arithmetic* Operators, similar to Java, listed below :

- Addition operator (+)
- Subtraction operator (-)
- Multiplication operator (\*)
- Division operator (/)
- Modulus operator (%)

### Syntax
#### Addition Operator

`var variable_one = variable_two + variable_three`

For example:
{% highlight kotlin %}
var sum = 10+21
{% endhighlight %}

#### Subtraction Operator

`var variable_one = variable_two - variable_three`

For example:
{% highlight kotlin %}
var sub = 110-20
{% endhighlight %}

#### Multiplication Operator

`var variable_one = variable_two * variable_three`

For example:

{% highlight kotlin %}
var mul = 100*21
{% endhighlight %}

#### Division Operator

`var variable_one = variable_two / variable_three`

For example:

{% highlight kotlin %}
var div = 100/25
{% endhighlight %}

#### Modulus Operator

`var variable_one = variable_two % variable_three`

For example:

{% highlight kotlin %}
var mod = 25%6
{% endhighlight %}

#### Arithmetic Operations Example Program in Kotlin

{% highlight kotlin %}
fun main(args: Array<String>) {
    val num1 = 200;
    val num2 = 10

    //Addition
    val addition = num1+num2
    //Subtraction
    val subtraction = num1-num2
    //Multiplication
    val multiplication = num1*num2
    //Division
    val division = num1/num2
    //Modulus
    val modulus = num1%num2

    println("Sum of $num1 and $num2 is : $addition")
    println("Difference of $num1 and $num2 is : $subtraction")
    println("Product of $num1 and $num2 is : $multiplication")
    println("Division of $num1 and $num2 is : $division")
    println("Modulus of $num1 and $num2 is : $modulus")
}
{% endhighlight %}

#### Sample Output
{% highlight kotlin %}
Sum of 200 and 10 is : 210
Difference of 200 and 10 is : 190
Product of 200 and 10 is : 2000
Division of 200 and 10 is : 20
Modulus of 200 and 10 is : 0
{% endhighlight %}

<br/>
<br/>
*Keep coding! Have fun.*
