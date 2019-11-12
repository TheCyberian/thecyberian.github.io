---
layout: post
title:  "Linux Shell: Configurations - I"
categories: Linux
author: Utkarsh Raghav
---
In this two part article on linux shell configuration, we'll be understanding how to configure linux shells.
Since, the BASH shell is default for most Linux distros, we'll be discussing some common feature of it and learn how to configure the shell to make it's personalized version for your use. We'll going over variety of topics, including *aliases*, and shell initialization files.

The other shells such as *tcsh, ksh and zsh* share many of the features with BASH. You may check out respective manuals for these if you want to learn more, using `man` command, or by visiting the online manuals after installing the respective shells.

### Aliases
You may use **alias** command to create another name for the command. It doesn't replace the command, instead gives it a different name. An alias command begins with the keyword *alias* and the new name for command, followed by an equal sign and the command it will be referencing.
**Keep in mind, their shouldn't be any spaces surrounding the equal sign as discussed in previous shell articles.**
Also, if any commands used contain spaces in them, they need to be enclosed in single quotes.

Example.
```
$ alias lst=ls
$ ls
myFiles myPrograms
$ lst
myFiles myPrograms
```

#### Aliasing commands and options:
You may alias a command with it's respective options, but you need to envelope both command and option in single quotes.

Example.
```
$ alias lss='ls -s'
$ lss
4 myFiles 8 myPrograms
$ alias lst='ls -t'
myPrograms myFiles
```

You can also use a command name as an alias. It's useful in case where you should use commands only with specific switches, else there might me unexpected things occur.
For instance, using commands **rm, cp, mv** with switch *-i* ensures a prompt is displayed before the command executed. This can help you avoid, unexpected file deletion or making sure that an existing file is not overwritten without your confirmation.

Example.
```
$ alias rm='rm -i'
$ alias cp='cp -i'
$ alias mv='mv -i'
```
#### Aliasing commands and arguements:
If you execute a command that has an arguement with complex patterns on regular basis, you should alias it.
```
$ alias lsc='ls *.[co]'
$ lsc
reverse-shell-tcp.c  tcpclient.c  tcp-server.c  udpclient.c  udpserver.c  wide-chars.c
```

To get a list of all defined aliases, you can use *alias* command itself. It'll will return a list of all aliases defined already.
You can remove an alias by using *unalias* command.

```
$ alias
lss='ls -s'
lst='ls -t'
$ unalias lss
```
### Shell Initialization and Configurations
Each type of shell has it's own set of initialization and configuration files. The BASH uses, **.bash_profile, .bashrc** and **.bash_logout** files. The TCSH shell uses **.login, .tcshrc** and **.logout** files instead. The Z shell has several initialization files: **.zshenv, .zlogin, .zprofile, .zschrc and .zlogout.**

Applications often setup the configuration files in a user's home directory. These may be single files or directory containing multiple files. Usually the name of such files and directories begins with a period( in Linux, the file names beginning with a period are considered hidden by default and wouldn't show up on a normal *ls* command, use *ls -a* instead).

#### Controlling Shell Operations
The BASH shell has several features that allow you to control the way different shell operations work.
BASH shell features are turned on and off with set command: -o for turning it on; +o for turning it off.
$ set -+o *feature*

In the below table we discuss three of the most common features.

| Features   | Description  |   
|------------|--------------|
|  ignoreeof | Disables Ctrl-D logout     |
|  noclobber | Doesn't overwrite files through redirection   |
|   noglob   | Disables special characters used for filename expansion: *,?,~,[]   |

#### Environment Variables, Subshells and export keyword
Upon logging into your system account, Linux generates your user shell. In this shell you may execute commands and define variables. You may also create and execute shell scripts. When a shell script is executed, the system generates a subshell.
When the script has finished executing, the shell will terminate and you will be returned to shell from which it was triggerred.
In this sense, there are multiple shells, each nested within the other. Variables defined within a shell are local to it.

You can define environment variables in all shell types. Although, the strategy used to implement these differs in different shells.

In TCSH shell, an environment variable is defined only once, it can be directly referenced by any subshells.

In BASH shell, however, a copy of environment variable is to be made in each sub shell, i.e., environment variables are to be exported.
For Example, if the EDITOR variable is exported , a copy of it will be automatically defined in each subshell for yoou.

An environment variable in bash can be considered as a regular variable with additional capabilities. To make a regular variable into environment variable, just apply **export** command to an already defined variable. The **export** command basically instructs the system to define a copy of that variable for each new shell.

#### Configuring shell with shell parameters
On logging in, Linux will set certain parameters for your login shell. Parameters can be either variables or features.
Linux reserves a predefined set of variables for shell and system use. Many of these parameter shell variables are defined by the system when you log in. Some parameter shell variables are set by the shell automatically and others are set by the initialization scripts, described in the next article.

Functionally, it is better to think of these as system-level variables, as they play a major part in configuring your entire system, setting valuess such as location of executable commands on the system, number of history commands allowed or even hostname of the system displayed to the network.

A reserved set of keywords is used for the names of these system variables, as discussed in the last Linux article, these names shouldn't be used as name for your own variables.

For Example: Keyword **HOME** is used by system to define HOME variable, which holds pathname of user's home directory.

In the next Linux article we'll see the list of the reserved keywords and also understand how to use the initialization files to personalize the shell for our use. We'll also be going through multiple shell variables and understand there usefulness in the smooth working of the Linux shell.

<br/>
<br/>
*Keep coding! Have fun.*
