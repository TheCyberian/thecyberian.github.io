---
layout: post
title:  "Linux Shell - Processes and Jobs"
categories: blog linux
author: Utkarsh Raghav
---
In linux you have control over not just commands input or outputs, but also over execution. You may run commands while a job runs in background. You may cancel the commands before they finish executing, or you may interrupt a command to be started again later from where you left off. Background operations are particulary useful for long jobs such as *apt update* or *apt upgrade*, where instead of waiting at the terminal until the job execution completes, you can place it in the background. Meanwhile, you can continue executing other linux commands in foreground.

### Running in background:
