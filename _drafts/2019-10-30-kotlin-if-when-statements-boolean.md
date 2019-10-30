---
layout: post
title:  "If, When statements and Booleans in Kotlin"
categories: blog Kotlin
author: Utkarsh Raghav
---
In the following tutorial, we're going to understand how to use condtional if statements and uses of boolean type in a program written in Kotlin.

#### Note :-<br>
- This tutorial assumes, you have a basic working knowledge of IntelliJ Idea.
- Have Kotlin installed setup in your machine.

### Booleans
Represents a value which is either true or false. On the JVM, non-nullable values of this type are represented as values of the primitive type boolean.
#### Functions callable on Booleans
- and : Performs a logical and operation between this Boolean and the other one. Unlike the && operator, this function does not perform short-circuit evaluation. Both this and other will always be evaluated.
- compareTo : Compares this object with the specified object for order. Returns zero if this object is equal to the specified other object, a negative number if it's less than other, or a positive number if it's greater than other.
- equals : Indicates whether some other object is "equal" to this one.
- hashCode : Returns a hash code value for the object.
- not : Returns the inverse of this boolean.
- or : Performs a logical or operation between this Boolean and the other one. Unlike the \|\| operator, this function does not perform short-circuit evaluation. Both this and other will always be evaluated.
- toString : Returns a string representation of the object.
- xor : Performs a logical xor operation between this Boolean and the other one.

### If
#### if statements
#### if-else statements
#### if as an expression
#### if-else-if chain

### When
#### when - a replacement of switch
#### when - as an expression


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
