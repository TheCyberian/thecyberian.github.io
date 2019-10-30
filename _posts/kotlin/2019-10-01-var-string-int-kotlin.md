---
layout: post
title:  "Variables, Strings and Numbers in Kotlin"
categories: blog Kotlin
author: Utkarsh Raghav
---
In the following tutorial, we're going to understand how to declare and initialize String and Int variables in Kotlin.

#### Note :-<br>
- This tutorial assumes, you have a basic working knowledge of IntelliJ Idea.
- Have Kotlin installed setup in your machine.
- **Follow the last tutorial for setting up a new class file before you can begin writing script.**

Before we begin, we need to have a main function. This main function is called upon when the file is being executed, just like Java's main function.

## Declaring variables and constants :
There are two ways to declare variables in Kotlin.

1. Using *var* keyword.
2. Using *val* keyword.

In Kotlin, use val to declare a constant or var keywords to declare a variable. You can specify a type such as String or Int after the variable name. In the example below, we declared a constant fName of type String with the val keyword.

`val fName: String = "Mike"`

But in Kotlin, it's often possible to omit the type from the declaration and the compiler won't complain.

`val lName = "Shelby" // will still compile`

In the above line of code, you'll observe that we did not explicitly state the type String. The code above will still work because the compiler will implicitly infer the type using type inference.

The difference between the *val* and *var* keywords is that the former is immutable, while the latter is mutable.

{% highlight kotlin %}
  fun main(args: Array<String>) {
    val date = "21st March, 1907"
    date = "29th December, 1960" // will give error as *val* cannot be changed

    var car = "Hyundai Verna"
    car = "Mercedes-Maybach" // can be changed
  }
{% endhighlight %}

Note that for a variable declared with the *var* keyword which has its type inferred by the compiler, assigning another value of a different type won't work. In other words, **the value of the variable can change, but its type cannot!** For example:

{% highlight kotlin %}
var age = 12
age = "12 years old" // Error: type mismatch
{% endhighlight %}

## Numbers
### Types of numbers in Kotlin
The integer types are:
- Byte—8 bit
- Short—16 bit
- Int—32 bit
- Long—64 bit


The floating-point types are:
- Float—32 bit
- Double—64 bit

{% highlight kotlin %}
val myInt = 24
val myLong = 34L
val myFloat = 3.43F
val myDouble = 405.718
val myHexadecimal = 0xAF
val myBinary = 0b0101011
{% endhighlight %}

To convert a number from one type to another, you have to explicitly invoke the conversion functions.
Each number type has helper functions that convert from one number type to another:
Eg. toByte(), toInt(), toLong(), toFloat(), toDouble(), toChar(), toShort(), toString().

## Strings

Strings can be created with either double quotes or triple quotes. In addition to that, escape characters can be used with double quotes.
{% highlight kotlin %}
val myString = "String"
val escapeString = "String with new line \n"
{% endhighlight %}
To create a string that spans multiple lines in the source file, we use triple quotes:
{% highlight kotlin %}
val multiLineString = """This is 1st line
                         This is 2nd line
                         This is 3rd line """
{% endhighlight %}
Kotlin also supports string interpolation. This is easy way to build dynamic string than concatenation, which is what we use in Java. Using string templates, we can insert variables and expressions to create complex strings.
{% highlight kotlin %}
val age = 20
val ageMessage = "Your age is $age" // Your age is 20
{% endhighlight%}
In the code above, we created a string literal, and inside it, we used a variable by the use of a $ character in front of the variable name. Note that if the variable is not correct or doesn't exist, the code won't compile.

What about if you need to use $ in your string? You just escape it with backslash "\\".
Also, you can call methods from within an interpolated String; you have to wrap it in curly braces ${}.
{% highlight kotlin %}
val name = "Cyberian"
val message = "The first letter in my name is ${name.first()}" // The first letter in my name is C
{% endhighlight %}

Another cool thing you can do, is to perform some logic inside the curly braces when creating a String literal.
{% highlight kotlin %}
val age = 40
val anotherMessage = "You are ${if (age > 60) "old" else "young"}" // You are young
{% endhighlight %}

But more on that later, in booleans section.

<br/>
<br/>
*Keep coding! Have fun.*
