---
layout: post
title:  "Linux Shell: Scripting"
categories: Linux
author: Utkarsh Raghav
---
A shell script is basically bunch of Linux commands combined together to perform a specific task.
Although, the shell has a flexible and powerful set of programming tools allowing user to build complex scripts. It supports
local and global variables, passing arguements from one script to another. It has complete set of control structures, includings **if** statements and **loops**.

### Shell Variables:
As a user, you can define variables within shell and these variables are what are referred to as **shell variables**.
When declaring variable's name below points should be kept in mind
- The variable name can be any set of alphabetic characters, including underscores. The name can even contain numbers, but number cannot be the first character.
- A variable name cannot have any other characters, like exclamation point, ampersand, or even space. Such symbols are reserved by the shell for its own use.

For assignin values, like most other programming language, you have to use assignment operator "=". But be careful not to place any spaces around the operator. It will cause the operation to fail. That's cause shell will try to parse it as a commmand.

And when referencing the declared variables, you should precede the variable name with *$* symbol.
```
$ port = 'Chennai'

Command 'port' not found, did you mean:

  command 'poet' from deb libpoet-perl (0.16-1)
  command 'sort' from deb coreutils (8.30-3ubuntu2)

$ port='Chennai'
$ echo $port
Chennai
```
Note that in shell, strings can be declared with both Double Quotes and Single quotes.

- In case you want a variable to be evaluated into another string variable, you should make sure to declare the string variable with Double quotes.
Example:
```
$ s="One of the port cities of India is $port"
$ echo $s
One of the port cities of India is Chennai
```
- In case you **do not** want a variable to be evaluated into another string variable, you should declare the string variable within Single quotes.
Example:
```
$ s='One of the port cities of India is $port'
$ echo $s
One of the port cities of India is $port
```
- Another time you may want to use Single quotes is when you want to assign a written command to a variable. You can then use variable name to execute the linux command. (it kind off works similar to *alias*, in matter of functionality. However, we'll be discussing more about *alias* keyword in later articles.)
```
$ lsf='ls -F'
$ $lsf
bin@   cdrom/  etc/   initrd.img@      lib@    lib64@	lost+found/  mnt/  proc/  run/	 snap/	swapfile  tmp/	var/	  vmlinuz.old@
boot/  dev/    home/  initrd.img.old@  lib32@  libx32@	media/	     opt/  root/  sbin@  srv/	sys/	  usr/	vmlinuz@
```
- In a situation where you want to store output of a linux command into a variable, you can use **Back Quotes**.
Example:
```
$ listc=`ls *.c`
$ $listc
$ echo $listc
reverse-shell-tcp.c tcpclient.c tcp-server.c udpclient.c udpserver.c wide-chars.c
```

### Shell Scripts:
You can place shell commands in a file and then have the shell read and execute the commands in the file.
A file which contains shell commands is called a **shell script**.
- The *sh* command can be used to execute the scripts. To make a shell script file run as system command or be run by calling it's name, it should have executable permissions.

Example:
```
$ cat lsc.sh
ls *.c
$ sh lsc.sh
reverse-shell-tcp.c  tcpclient.c  tcp-server.c	udpclient.c  udpserver.c  wide-chars.c
$ chmod u+x lsc
$ ./lsc
reverse-shell-tcp.c  tcpclient.c  tcp-server.c	udpclient.c  udpserver.c  wide-chars.c
```
- Passing command line arguements to shell scripts can also be done. And there are two ways to do it :
  1. If the number of arguments is know, then the arguements are referenced sequentially starting with 1, preceded by a *$* sybmol.
```
$ cat lsc
ls *.$1
$ ./lsc c
reverse-shell-tcp.c  tcpclient.c  tcp-server.c	udpclient.c  udpserver.c  wide-chars.c
```
  2.
```
  $ $ cat printdocs
cat -n $* | lpr &
  $ $ ./printdoc tcp-server.c tcpclient.c
```

#### BASH Test Operators
Before we begin with loops and if-then-else structures, let's understand some of the BASH Operators

| Integer Comparisons   | Function  |   
|-----------------------|-----------|
|   -gt         | Greater than  |   
|   -lt         | Less than     |
|   -ge         | Greater than or equal to   |
|   -le         | Less than or equal to   |
|   -eq         | Equal to  |   
|   -ne         | Not equal to |

| String Comparisons   | Function  |   
|-----------------------|-----------|
|   -z         | Tests for Empty String  |   
|   =         | Tests for equality of strings  |
|   !=        | Tests for inequality of strings |

| Logical Operators   | Function  |   
|-----------------------|-----------|
|   -a         | Logical AND  |   
|   -o         | Logical OR  |
|   !        | Logical NOT |

### for Loop :
For loops can be implemented in shell programs in two different ways :
- for-in structure : It's designed to reference a list of values sequentially, working on two operands: a variable and a list of values.

Syntax:
```
for *var* in *list-values*
do
  command
done
```
- for structure : It's designed to reference the list of values of the command line arguements.

Syntax:
```
for *var*
do
  command
done
```


### if-then-else structure :
**if** command begins wiht keyword 'if' and is followed by a Linux command, who exit condition will be evaluated.
Also, the end of a *if-then* must be indicated with the keyword **fi**
If the condition is true, if block executes; if it's false, **else** block executes.

Syntax:
```
if *command* then
  command
fi
```

```
if *command* then
  command
else
  command
fi
```

Example of Code:
{% highlight shell %}
$ cat ping-sweep.sh
#!/bin/bash

read -p  "Enter your Subnet: " Subnet

for IP in $(seq 1 254)
do
	ping -c 1 $Subnet.$IP > /dev/null 2>&1
	if [ $? -eq 0 ]; then
		echo "$Subnet.$IP is alive."
	else
		echo "$Subnet.$IP is down!!!"
	fi
done

{% endhighlight %}
The above example is a shell script used for ping sweeping a network. It takes a user input, for subnet mask.
Then loops over possible clients in the subnet, pinging them. If they respond, it prints a message stating the client machine is alive, else it prints a message saying machine is down.


<br/>
<br/>
*Keep coding! Have fun.*

###### Reference: Hacking Secret Ciphers with Python - By Al Sweigart
