---
layout: post
title:  "If, When statements and Booleans in Kotlin"
categories: Kotlin
author: Utkarsh Raghav
---

In the following tutorial, we're going to understand how to use condtional if statements and uses of boolean type in a program written in Kotlin.

#### Note :-<br>

-   This tutorial assumes, you have a basic working knowledge of IntelliJ Idea.
-   Have Kotlin installed setup in your machine.

## Booleans

Represents a value which is either true or false. On the JVM, non-nullable values of this type are represented as values of the primitive type boolean.

### Functions callable on Booleans

-   and : Performs a logical and operation between this Boolean and the other one. Unlike the && operator, this function does not perform short-circuit evaluation. Both this and other will always be evaluated.
-   compareTo : Compares this object with the specified object for order. Returns zero if this object is equal to the specified other object, a negative number if it's less than other, or a positive number if it's greater than other.
-   equals : Indicates whether some other object is "equal" to this one.
-   hashCode : Returns a hash code value for the object.
-   not : Returns the inverse of this boolean.
-   or : Performs a logical or operation between this Boolean and the other one. Unlike the \|\| operator, this function does not perform short-circuit evaluation. Both this and other will always be evaluated.
-   toString : Returns a string representation of the object.
-   xor : Performs a logical xor operation between this Boolean and the other one.

## If

### if statements :

The **if** statement allows you to specify a section of code that is executed only if a given condition is true-

{% highlight kotlin %}
    var n = 20
    if(n % 2 == 0) {
    	println("$n is even.")
    }
    // Displays - "20 is even."
{% endhighlight %}

The curly braces are optional if the body of if statement contains a single line -
```
    if(n % 2 == 0) println("$n is even.")
```

### if-else statements:
The **if-else** statement executes one section of code if the condition is true and the other if the condition is false.

{% highlight kotlin %}
    var n = 27
    if(n % 2 == 0) {
    	println("$n is even.")
    } else {
      println("$n is odd.")
    }
    // Displays - "27 is odd."
{% endhighlight %}

Similar to if statement, the curly braces are optional for **if-else** if the body of the statement contains a single line -
```
    if(n % 2 == 0) println("$n is even.") else println("$n is odd.")
```
### if as an *expression*:
In Kotlin, one can use if as a statement as well as an expression i.e., you can assign the result of an if-else expression to a variable.

For Example -

{% highlight kotlin %}
  var x = 12
  var y = 35

  var max = if(x > y) x else y
  println("max($x, $y) = $max")

  // Displays - "max(12, 35) = 35"
{% endhighlight %}

**When using if as an expression, it is compulsory to have an else branch, else the compiler will throw an error.**
The if-else branches can also have block of code. In case of block of code, the last expression is the value assigned to the variable being expressed -

{% highlight kotlin %}
  var x = 12
  var y = 25

  var max = if(x > y) {
      println("$x is greater than $y")
      x
  } else {
      println("$x is less than or equal to $y")
      y
  }
  println("max($a, $b) = $max")
{% endhighlight %}

#### Output

```
12 is less than or equal to 25
max(12, 25) = 25
```

Unlike Java, Kotlin doesn’t have a ternary operator because we can easily achieve what ternary operator does, using a single line if-else expression.


### Chained *if-else-if*:
if-else-if chain can be written like the below code, although there's a elegant way to do it instead of chaining multiple if-else conditions. We'll be looking at it next.

{% highlight kotlin %}
  var age = 17
  if(age < 12) {
      println("Child")
  } else if (age in 12..17) {
      println("Teen")
  } else if (age in 18..21) {
      println("Young Adult")
  } else if (age in 22..30) {
      println("Adult")
  } else if (age in 30..50) {
      println("Middle Aged")
  } else {
      println("Old")
  }

// Displays - "Teen"

{% endhighlight %}


## When
### when - a replacement of *switch* and *if-else-if* chain:
If you're familiar with Java, you must have come across **switch** statement. In Kotlin, we have a cleaner way to achieve that, as described in the below example:

{% highlight kotlin %}
  var day = 1
  when(day) {
      1 -> println("Monday")
      2 -> println("Tuesday")
      3 -> println("Wednesday")
      4 -> println("Thursday")
      5 -> println("Friday")
      6 -> println("Saturday")
      7 -> println("Sunday")
      else -> println("Invalid Day")
  }
// Displays - "Monday"
{% endhighlight %}
**when** expression matches the given argument with all the branches one by one until a match is found. Once a match is found, it executes the matched branch. If none of the branches match, the else branch is executed by default.

### when - *as an expression*:
Similar to **if**, **when** can be used as an expression as well.

For Example:
{% highlight kotlin %}
  var day = 4

  var dayInString = when(day) {
      1 -> "Monday"
      2 -> "Tuesday"
      3 -> "Wednesday"
      4 -> "Thursday"
      5 -> "Friday"
      6 -> "Saturday"
      7 -> "Sunday"
      else -> "Invalid Day"
  }

  println("Today is $dayOfWeekInString")	// Today is Thursday
{% endhighlight %}

In the next Kotlin article, we'll be developing our first android app, written completely in Kotlin language.
Stay tuned.

<br/>
<br/>
*Keep coding! Have fun.*
