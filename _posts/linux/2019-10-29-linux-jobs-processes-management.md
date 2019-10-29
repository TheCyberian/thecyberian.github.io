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
You can bring a to foreground from background with the command, **fg**.
- If only one job is in the background, the **fg** command alone will be bring it to the foreground.
- If only more than one job is in the background, job number is used with the command, as mentioned earlier.

{% highlight shell %}
$ fg %1
sudo apt-get update &
$
{% endhighlight %}

### Cancelling jobs:
For cancelling a job, you can force it to end with the **kill** command. The **kill** command takes as its arguement either the user job number or the system process number. The user job number must be preceded by a percent sign(%). The job number can be listed using the **jobs** command.

{% highlight shell %}
$ jobs
[1] + Running sudo apt-get update
[2] - Running cat *.py > pyPrograms
$ kill %2
{% endhighlight %}

### Suspending or Stopping jobs:
You can suspend a job and stop it with *Ctrl+Z* key. This places the job to the side until it is restarted. The job is not ended; it merely remains suspended until user wants to continue it.
You can restart the job in either the foreground or the background using the **fg** or **bg** command.
- The **fg** command restarts a suspended job in the foreground.
- The **bg** command places the suspended job in the background.

{% highlight shell %}
$ sudo apt-get update
^Z
$ bg
{% endhighlight %}
