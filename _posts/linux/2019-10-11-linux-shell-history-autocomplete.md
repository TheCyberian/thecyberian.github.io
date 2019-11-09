---
layout: post
title:  "The Linux Shell"
categories: Linux
author: Utkarsh Raghav
---
In the following article, we'll be going over the linux shell, it's types and some basic functionalities of the BASH or Bourne Again SHell.

#### Popular types of shells
1. bash - Bourne Again SHell
2. ksh - Korn Shell
3. zsh - Z Shell
4. tsch - TSCH Shell

#### Note :-<br>
The shell commands demoed have been executed on Ubuntu, which is a debian based derivative of Linux.

<img id="shell-shock" class="mx-auto" src="/assets/images/posts/bash-shellshock.png" alt="board" style="width: 570px;">

## The Command Line
The Linux CLI consists of a single line into which you enter commands with their required options and arguements. From a desktop environment (GNOME or KDE), you can access the CLI by opening a terminal window. If you start Linux command line interface, you will be presented with a BASH shell command line upon login.

The BASH shell has a dollar sign($) prompt as default, but Linux has several *other shell types(listed below)*,
each with it's own prompt. The root user has the '#' as the prompt in BASH. Shell prompt marks the beginning of the command line, as shown below :
{% highlight bash %}
$ ls -l
-rw-r--r-- 1 jake root 204 Oct 25 19:10 sys
{% endhighlight %}

There are a few ways in which you can execute commands over command line.

- You can pass a command on multiple lines using '\\'.
{% highlight bash %}
$ cp -i \
myData \
/home/jake/newProject/newData
{% endhighlight %}

- You can enter several commands at once using ';' to separate them.
{% highlight bash %}
$ ls ; date
bin    etc             lib     lost+found  proc  snap      tmp      vmlinuz.old
boot   home            lib32   media       root  srv       usr
cdrom  initrd.img      lib64   mnt         run   swapfile  var
dev    initrd.img.old  libx32  opt         sbin  sys       vmlinuz
Sat Oct 25 09:42:58 IST 2019
{% endhighlight %}

- You can conditionally run several commands by using '&&' operator. A command is executed only if the previous one is true.
{% highlight bash %}
$ date && ls
Sat Oct 25 09:44:13 IST 2019
bin    etc             lib     lost+found  proc  snap      tmp      vmlinuz.old
boot   home            lib32   media       root  srv       usr
cdrom  initrd.img      lib64   mnt         run   swapfile  var
dev    initrd.img.old  libx32  opt         sbin  sys       vmlinuz
{% endhighlight %}

The BASH shell, which is a default shell for Ubuntu, has a helpful capability which allows you to edit command line, allowing user to easily modify the commands entered before executing them. It lets you move anywhere on the command line and allows to insert or delete characters, as need for it arises. It's really helpful in case of complex commands.

## Autocomplete - Commands, Variables, Filenames and pretty much everything else

The BASH CLI has a built-in feature that performs auto completion. These can be put to effect using *TAB* key.
You enter an incomplete pattern as a command or variable and press *TAB* key to activate the autocomplete feature, which completes the pattern.
If more than one command or variable has the same prefix, shell simply beeps and waits for you to press the *TAB* key again. It then displays a list possible completions and redisplays the command line, allowing you to complete the name.
Autocomplete works with the following, but the text needs to be preceded by the special characters indicating the types.
- filenames begin with text or /
- shell variables begins with a $ sign
- username begin with a ~ sign
- hostname begin with @ sign
- commands, aliases

{% highlight bash %}
$ cat pre <tab>
$ cat preface
{% endhighlight %}

{% highlight bash %}
$ echo $HOM <tab>
$ echo $HOME
{% endhighlight %}

{% highlight bash %}
$ echo $H <tab> <tab>
$HISTCMD       $HISTFILE      $HISTSIZE      $HOSTNAME      
$HISTCONTROL   $HISTFILESIZE  $HOME          $HOSTTYPE      
$ echo $H
{% endhighlight %}


## History

The BASH Shell keeps a record of most recent commands executed on the shell. We can use *history* utility to see the set of most recent commands.
Each of these commands is technically referred to as an event.

{% highlight bash %}
$ history
1  history
2  clear
3  cp myData today
4  vi myData
5  mv myData reports
6  cd reports
7  ls
8  ls -l
9  history
{% endhighlight %}

The *history* utility allows you to reference an older event by placing it in the command line and allowing you to execute it. The easy way to do this is by using *UP ARROW* and *DOWN ARROW* keys. Pressing *UP ARROW* key once, places the last history event on your CLI, and vice-versa for the *DOWN ARROW*.

These history events are stored in *.bash_history* file by default. This could be changed by updating the $HISTFILE system variable.
{% highlight bash %}
$ echo $HISTFILE
.bash_history
{% endhighlight %}

The number of events allowed to be saved in the $HISTFILE is also stored in a system variable, called $HISTSIZE.
{% highlight bash %}
$ echo $HISTSIZE
1000
{% endhighlight %}

You can reference and execute history events by using **!** history command. The **!** is followed by reference that identifies the command from event history. The reference can be a number of event or prefix characters of the event.
{% highlight bash %}
$ !5
mv myData reports
$ !mv my
mv myData reports
{% endhighlight %}

A negative number offsets from the end of the list.
{% highlight bash %}
$ !-4
cd reports
{% endhighlight %}

To reference last event you can use **!!**. The **!!** executes the last command user executed.
{% highlight bash %}
$ !!
history
{% endhighlight %}

In the next Linux tutorial, we will be going over filename pattern matching, standard Input/Output and how to redirect it.
We'll also be understanding about *pipe* operations in Linux, and how it allows multiple commands to be executed together, with linked inputs and outputs.

<br/>
<br/>
*Keep coding! Have fun.*
