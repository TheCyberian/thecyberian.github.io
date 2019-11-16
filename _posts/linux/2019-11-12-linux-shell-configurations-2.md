---
layout: post
title:  "Linux Shell: Configurations - II"
categories: Linux
author: Utkarsh Raghav
---
In the last part of this article on linux shell configuration, we discussed some common features of bash such as *aliases* and how shell operations can be controlled and configured for your use.
We saw that we can configure the shell with shell parameters, as well as some system variables which are set by shell itself.
<img id="shell-config" class="mx-auto" src="/assets/images/posts/shellconfig.jpeg" alt="the-shell-configurations" style="width: 800px;">

In this article we'll learn, as a user, how you can change them for your own personalized version of shell. You can get a list of system variables by using the `printenv` command inside the shell.

```
$ printenv
SHELL=/bin/bash
TERM=xterm
USER=demouser
LS_COLORS=rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:su=37;41:sg=30;43:ca:...
MAIL=/var/mail/demouser
PATH=/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games
PWD=/home/demouser
LANG=en_US.UTF-8
SHLVL=1
HOME=/home/demouser
HISTSIZE=1000
HISTFILE=.bash_history
LOGNAME=demouser
LESSOPEN=| /usr/bin/lesspipe %s
LESSCLOSE=/usr/bin/lesspipe %s %s
_=/usr/bin/printenv
```

And if you wanted to change any of them you can do that by simply assigning them the value within the shell.

```
$ echo $HISTSIZE
1000
$ HISTSIZE=1001
$ echo $HISTSIZE
1001
```
But these changes will only stay active in the current shell and will disappear when you open up a new shell. This happens due to the initialization files.

### Using initialization files:
We read about some of initialization file, such as .bash_profile, .bashrc etc, in the last article. These files are essentially shell scripts, which are executed before something else executes, setting up the field for the bigger process.

In the previous case, whenever we open a new shell terminal, **.bashrc** script file executes, initializing some of system variables for us to be able to use the shell. One of those variables being HISTSIZE.

Basically, there are two categories of initialization files read by the shell, namely system-wide startup files and user-specific startup files:

1. system-wide startup files – These files contain global configuration that will apply to all users on the system, and are generally present in the /etc directory. These include: /etc/profiles and /etc/bashrc or /etc/bash.bashrc.
2. user-specific startup files – These files store configurations that apply to a single user of the system and are normally located in the user's home directory as dot files. These are prioritized and will override the system-wide configuration. They include: .profiles, .bash_profile, .bashrc and .bash_login.


### Configuring the Login Shell: .bash_profile
The *.bash_profile* or *.profile* file is the BASH shell's login initialization file. It's a script file that automatically executes whenever a user logs in.
The file contains shell commands that define system environment variables used to manage your shell. For example. when you log in, your shell needs to know what directories hold the Linux commands. It references the PATH variable to find the pathnames for these directories. In the .bash_profile file, an assignment operation does just this, and executes everytime a user logs in.

##### Exporting variables
Parameter variables also need to be exported, using the *export* command, to make them accessible to any subshell you may enter. Genrally, the .bash_profile file ends with an export command with a list of all variables defined in the script file. If a variable is not exported or not present in this list, you may not be able to access it.

Example:
```
export HISTSIZE=1001
```
##### Defining Variables
A snippet from .bash_profile is provided below. Note how **PATH** is assigned, the value from **$HOME** variable. Both PATH and HOME are parameter variables the system has already defined.
```
# if running bash
if [ -n "$BASH_VERSION" ]; then
    # include .bashrc if it exists
    if [ -f "$HOME/.bashrc" ]; then
	. "$HOME/.bashrc"
    fi
fi

# set PATH so it includes user's private bin if it exists
if [ -d "$HOME/bin" ] ; then
    PATH="$HOME/bin:$PATH"
fi

export PATH
```
PATH holds the pathnames of directories searched for any of the commands you enter in the shell. HOME holds the pathname of your home directory. The assignment `PATH="$HOME/bin:$PATH"` redefines PATH to include bin directory from within your home directory, enabling localized search for commands, including the ones created by you. The PATH variable is then exported, so it can be accessed by any sub-shells.

The .bash_profile file is editable, just like any other shell script. It can be edited using any of the editors available to you.



### Configuring the BASH Shell: .bashrc
The **.bashrc** file is a configuration file executed each time you enter the BASH shell or generate a subshell.
If BASH shell is your login shell, .bashrc executes along with your .bash_login file.

##### User's .bashrc script
Each time a subshell is created the .bashrc file is executed. This has the effect of exporting any local variables or aliases you have defined in the .bashrc shell initialization file.
The .bashrc file usually contains the definition of aliases and any feature variables used to turn on shell features. In effect, .bashrc defines them in each shell.
You can add any commands or definitions from what we have covered till now, to your .bashrc file. If you have made changes to .bashrc, you need to restart the shell or re-execute the file using below command.
```
$ . .bashrc
```
##### The global *bashrc* file
The global bashrc file is located in /etc directory, named **bash.bashrc**. This file is executed for all users, and it contains global aliases and features needed by all users. Several other specialized aliases and variables are set using configuration files located in the **/etc/profile.d** directory.


### BASH Shell Logout File: .bash_logout
The .bash_logout file is also a configuration file, but is executed when the user logs out. It is designed to perform any operations you want done whenever you logout.
It generally contains shell commands that form a kind of shutdown procedure, instead of variable definitions. Actions to be taken before you logout may include clearing the screen and issuing a farewell message.

As with other initialization files, you can add your own shell commands to .bash_logout. In practice, the .bash_logout is not automatically created for you when your account is first created. You have to create it yourself, adding farewell message and other operations you want to be performed.

Example of .bash_logout file content.
```
#! /.bash_logout
clear
echo "Logging Out!!"
```
In this article, we saw how initialization files work and how we can use them to set up the shell the way we want it to.
This is just one of the examples where linux presents flexibility to its user, and let's user decide how their system should work.

In the next Linux article, we'll be going over linux file structures. We'll see how to perform operations and manage the files effectively.  


<br/>
<br/>
*Keep coding! Have fun.*
