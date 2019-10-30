---
layout: post
title:  "How to setup selenium webdriver with java and eclipse"
categories: Selenium Java
author: Utkarsh Raghav
---
In the following tutorial, we're going to understand how to setup a basic environment for getting started with automation using selenium with java programming language.

#### Note :-<br>
Before we begin, we need to have performed the following steps:

1. Install java on your computer.
- For Windows systems, java should be pre installed.
If you're having any issues, follow this [link](https://www.java.com/en/download/faq/win10_faq.xml).
- For Linux systems, type the following command in the terminal :
`sudo apt-get install openjdk-8-jdk`
2. Install eclipse IDE from [eclipse.org](https://www.eclipse.org/downloads/). Make sure you have java installed before you try installing eclipse.
3. Download the selenium Jar files from [seleniumhq.org](https://www.seleniumhq.org/download/).

#### Now we'll begin configuring Eclipse IDE for working with selenium webdriver.

### Step 1:
Open up Eclipse and Create a new Java project in the Eclipse workspace.
<br/>

<img id="eclipse-create-project" src="/assets/images/selenium/eclipse-create-project.png" alt="eclipse-project" style="width: 500px;">

### Step 2:
Right click on the newly created project and create a new package with the *src* folder, by navigating
*New > Package*, and then give name of the package, then click on finish button.

<img id="eclipse-create-project" src="/assets/images/selenium/eclipse-create-package.png" alt="eclipse-project" style="width: 550px;">

### Step 3:
Create a new Java class inside the new package by right-clicking on it and then selecting -
*New > Class*, and then name the class. Remember to follow the basic java convention for naming a class file, i.e., all class names should start with Capital letter.

### Step 4:
Now put selenium WebDriver's jar files into Java Build Path by :
1. Right-click on the project and navigate to **'Build Path' > 'Configure Build Path...'**.
2. Click on the Libraries tab, and then click on *"Add External JARs..."*.
3. When you click on *"Add External JARs..."* a pop-up window opens up. Select the JAR files which we downloaded initially.
4. After selecting jar files, click on OK button. Select all jar files and add. Finally click on *'Apply and Close'* button.

With this done, we are ready to start coding the selenium automation scripts. In the next post we'll begin to code and learn how to trigger browsers and open different webpages/websites.


<br/>
<br/>
*Keep coding! Have fun.*
