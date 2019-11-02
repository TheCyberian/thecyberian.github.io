---
layout: post
title:  "Counter App: Kotlin Android App"
date:   2019-10-30 06:49:11
categories: Android Kotlin
author: Utkarsh Raghav
---
## Creating a simple Counter application using Kotlin for Android

In the following tutorial, we'll be working to create a simple kotlin application for android platform. The tutorial has been divided into 5 steps, each step moving progressively on top of last one.

<img id="kotlin-android" class="mx-auto" src="/assets/images/posts/kotlin-android.png" alt="board" style="width: 500px;">

The app is a simple counter, which on press of a button will keep track of counter and display it on the screen. It'll reset to zero on press of **reset** button.<br>

#### Note :-<br> This tutorial assumes, you have a basic working knowledge of android studio and the framework in place.
<br>

### Step 1:
First, launch the Android Studio and open a new project with an empty activity, and language selected as **Kotlin**. Once the gradle build finishes, continue with setting up the layout of the application. <br>
An empty Android studio project by default has a TextView set up within a Constraint Layout. So, go ahead and delete the Text View and constraint layout. Pull in a linear layout in place of the it.

### Step 3:
Add a new TextView. The text of this will be initially set to zero.

### Step 3:
Now add two buttons, one for as a *Increment* button and another as a *Reset* button.
Add `onClick` function to each of the buttons
- `android:onClick="increment"`.
- `android:onClick="reset"`

The UI will look something like below:

<img id="app-screen" src="/assets/images/counter-screen-snap.png" alt="counter-app-ui" >

### Step 4:
If you have worked with Android before, you must be well aware of the java function, **findViewById(int value of Id)**.
We can do this in Kotlin too, but Kotlin comes with a elegant way to handle it. The kotlin android extension plugin, lets you access views from the code by directly using the id of element declared in the XML.

You can set it up by, putting the following lines in your app's **build.gradle** file.
{% highlight gradle %}
apply plugin: 'com.android.application'
apply plugin: 'kotlin-android'
apply plugin: 'kotlin-android-extensions'
{% endhighlight %}

After that, it's as simple as a simple import. Import the following line for the *activity_main.xml*, in *MainActivity.kt* and you're good to go.
{% highlight kotlin %}
import kotlinx.android.synthetic.main.activity_main.*
{% endhighlight %}

### Step 5:
Add the following code to *MainActivity.kt*.

{% highlight kotlin %}
class MainActivity : AppCompatActivity() {

    var count = 0
\\ Nothing changed in the onCreate function
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

\* In reset function, set the count variable back to zero, refer the
textView with it's ID and set text property to string value of count. *\
    fun reset(view : View){
        count = 0
        textView.text = count.toString()
    }

\* In increment function, add one tp the count variable value, again
refer the textView with it's ID and set text property to string
value of count. *\
    fun increment(view : View){
        count++
        textView.text = count.toString()
    }
}
{% endhighlight %}

And that's it. Our application is good to go.

<br/>
<br/>
*Keep coding! Have fun.*
