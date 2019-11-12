---
layout: post
title:  "Linux Shell: Standard I/O, Filename Pattern matching"
categories: Linux
author: Utkarsh Raghav
---
In the following article, we'll be going over the ways to manage and control the standard input and output of/from the terminal. We'll be understanding how we can pipe different commands outputs together. But first, we'll be understanding pattern matching for filename expansion.

#### Note :-<br>
The shell commands demoed have been executed on Ubuntu, which is a debian based derivative of Linux.

<img id="the-shell" class="mx-auto" src="/assets/images/posts/linux-shell.jpg" alt="board" style="width: 550px;">

## Filename Pattern Matching
Filenames are most common arguements used in commands and often you may know only a part of the filename, or maybe you want to refer multiple files with similar names or extensions. This is where pattern matching comes into play.

The shell uses matching operators to search for files and expand a list of found filenames. These filenames can then become arguements for commands such a **rm**, which can operate on multiple files.
The matching can be done in three different ways, using three different matching operators :

- Matching multiple characters using asterisk (\*)
{% highlight shell %}
$ ls
docA docB document mydoc monday wednesday
$ ls doc*
docA docB document
$ ls *day
monday wednesday
$ ls w*d*
wednesday
{% endhighlight %}

- Matching single character using question mark (?)
{% highlight shell %}
$ ls
doc1 docB document
$ ls doc?
doc1 docB
{% endhighlight %}

- Matching a range of characters using square brackets [*'range-numeric or alphabetic'*]
{% highlight shell %}
$ ls
doc1 doc2 doc3 docA docB docD document
$ ls doc[1B]
doc1 docB
$ ls doc[1-3]
doc1 doc2 doc3
$ ls doc[B-E]
docB docD
{% endhighlight %}

You can combine brackets with other expansion operators to perform flexible checks.
{% highlight shell %}
$ ls *.[co]
main.c main.o calc.c
{% endhighlight %}
In the combination `*.[co]`, asterisk matches all files and brackets match only files ending with extensions **.c** or **.o**.

#### Note
Curly braces '{}' are often used for generating names list in some linux distros, that you can use to create or modify files or directories. Since, it doesn't match on existing filenames, we will not be covering it here. But it can be used to create pattern-based names.

<br/>
## Standard Input/Output and Redirection
The data from input and output operations is organized as a file in Linux. Data input from keyboard, and even data output from command or a program, is placed in a continous stream of bytes. These data streams are referred to as *standard input* and *standard output* in Linux. There is a separate data stream reserved for error messages and is called *standard error*.

Since, the *standard input* and *output* are organized in same way as a file, they can interact with files pretty easily. Linux allows us to redirect the standard output so that, instead displaying the output on screen, you can save it in a file.
It also allows us to take input from a file **(or from the output of another command by using pipes '|')**, instead of taking it from keyboard.


### Standard Output Redirection: > and >>
To redirect the flow of output stream, we use '>' or '>>' characters after the complete command, followed by the path to the filename where we want the output stream to be written.

As it may appear, the flow redirection is happening after the command execution, it's not so. The redirection operation happens first, the redirection is set up for the newly created file and only after that the command execution begins.

If the file already exists, the file is destroyed and new file with same name is created, in it's place.

For Example:
{% highlight shell %}
$ ls -l *.py > pythonPrograms
{% endhighlight %}

For appending the standard output to an already existing file, you can use the '>>' operator.

{% highlight shell %}
$ cat newPrograms >> pythonPrograms
{% endhighlight %}

### Standard Input Redirection
Many linux commands receive data from a standard input, which inturn is a device or a file. The default device is keyboard.
The operator for input redirection is '<'.

You can combine the redirection operations of standard input and output together as well.

For Example:
{% highlight bash shell %}
$ cat < myData
Hello Jake
How are you today ?
$ cat < myData > newData
{% endhighlight %}

### Pipes: |
When you need to send data from standard output of one command to input of the another command, pipes come into play.
You can combine **pipe** operation with other shell operations. It's important to understand that **pipe** operation works on the standard output of a command. The contents of complete files can be piped from one command to another.

For Example: You want to send a list of your filenames(**ls** command) to the printer to be printed(**lpr** command).
You can pipe the output of **ls** into **lpr** command.

{% highlight bash shell %}
$ ls | lpr
$ ls *.c | lpr
$ cat myFile | lpr
$ sort myFile | more
{% endhighlight %}

In the upcoming linux article, we'll be learning how to work with jobs. Handling them effectively by understanding background processes, interruptions and how to kill a process. :)


<br/>
<br/>
*Keep coding! Have fun.*
