---
layout: post
title:  "Linux Shell - Processes and Jobs"
categories: blog linux
author: Utkarsh Raghav
---
In linux you have control over not just commands input or outputs, but also over execution. You may run commands while a job runs in background. You may cancel the commands before they finish executing, or you may interrupt a command to be started again later from where you left off. Background operations are particulary useful for long jobs such as *apt update* or *apt upgrade*, where instead of waiting at the terminal until the job execution completes, you can place it in the background. Meanwhile, you can continue executing other linux commands in foreground.

### Running in background:
When you place a job in the background, *a user job number*, placed in square brackets and *a system process number* is displayed.
- The user job number is the number by which the user references the job.
- The system process number is the number by which system identifies the job.
You can place multiple commands in background. Each is classified as a job and is given a number.
The queued jobs can be listed using **jobs** command.

{% highlight shell %}
$ sudo apt-get update &
[1] 534
$ cat *.py > pyPrograms &
[2] 535
{% endhighlight %}

The jobs can be referenced using **%** symbol followed by job number. Or you can give the job name string, if it's a unique job name. For Example - `$ fg %lpr`

### Bringing jobs to foreground:
