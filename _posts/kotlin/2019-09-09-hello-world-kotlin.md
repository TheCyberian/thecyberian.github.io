---
layout: post
title:  "Hello World program in Kotlin"
categories: blog Kotlin
author: Utkarsh Raghav
---
## Creating a Hello world program with kotlin and IntelliJ Idea.

In the below tutorial, we're going to write a simple Hello World script in Kotlin. We will get familiar with creating kotlin files and basic syntaxes in further posts.

#### Note :-<br>
- This tutorial assumes, you have a basic working knowledge of IntelliJ Idea.
- Have Kotlin installed setup in your machine.

### Step 1:
Open up IntelliJ Idea and Create a new Kotlin project with a JVM target based on the IntelliJ IDEA build system.

### Step 2:
Create a new Kotlin class file, named "Helloworld" under src folder.
<br/>

<img id="intelliJ" src="/assets/images/kotlin-project.png" alt="kotlin-project" style="width: 275px;">

### Step 3:
For executing code in Kotlin, we need to have a main function. This main function is called upon when the file is being executed, just like Java's main function.
The syntax for main function is :

{% highlight kotlin %}
  fun main(args: Array<String>) {
    // Code goes here
  }
{% endhighlight %}


### Step 4:
For printing, we call *println("String")* method, which prints the passed string arguement and a new line after that.

{% highlight kotlin %}
  fun main(args: Array<String>) {
    println("Hello World !!")
  }
{% endhighlight %}

And unlike java, we don't have to provide semi colons after each line.

### Step 5:
And that's it. Our Hello world program is ready to be executed. Now we can execute Kotlin script from within IntelliJ by clicking run. But to understand how Kotlin works, we will go ahead and execute it via command line.

{% highlight shell %}
  $ kotlinc Helloworld.kt
  $ kotlin HelloworldKt
  Hello World !!
{% endhighlight %}

The first line, *$ kotlinc Helloworld.kt* compiles the kotlin file to class. The second line executes the created class file.
<br/>

<img id="intelliJ" src="/assets/images/class-files-kotlin.png" alt="kotlin-project" style="width: 150px;">

And with this we have completed our first program in Kotlin. :)

<br/>
<br/>
*Keep coding! Have fun.*
