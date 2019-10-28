---
layout: post
title:  "How to run selenium webdriver scripts on Google Chrome?"
categories: blog selenium
author: Utkarsh Raghav
---
In the following tutorial, we're going to understand how to trigger web applications/Urls in Chrome browser, and print the title of the webpage using selenium with java programming language.

#### Note :-<br>
Before we begin, we need to have performed the following steps:

1. Download the selenium Jar files from [seleniumhq.org](https://www.seleniumhq.org/download/).
2. Download the chrome driver zipfile from [seleniumhq.org](https://www.seleniumhq.org/download/), for you respective chrome version.

### Step 1:
Extract the driver files from the downloaded zip file and note the path where the *chromedriver.exe* file has been extracted.

### Step 2:
Now create a new project in eclipse and add all the necessary jar files to the *Build path*; refer last selenium article for steps to follow.

### Step 3:
Create a new Java class inside the new package by right-clicking on it and then selecting -
*New > Class*, and then name the class.

### Step 4:
To trigger chrome browser with selenium for opening a website and getting it's title we need to follow the following steps:
- Set the system property for chrome driver specifying the driver path.
- Initialize the Chrome driver from Webdriver class.
- Navigate to the URL
- Get the title of the web page
- Close the browser

Add the below code to the class file and compile.

{% highlight java %}
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Launch_Chrome {
    public static void main(String[] args)
    {
    	//setting the property for chrome driver
    	System.setProperty("webdriver.chrome.driver", "C:\\Seleniumjar and drivers\\chromedriver.exe");
    	//Initializing the Chrome webdriver
    	WebDriver driver = new ChromeDriver();
    	driver.get("https://www.facebook.com/");
    	//to get the title of page
    	System.out.println(driver.getTitle());
    	// to close the chrome driver we use
    	driver.close();

    }
  }
{% endhighlight %}

The above code shows how to launch the Chrome by using selenium webdriver, print the web page title, and then close the browser.

<br/>
<br/>
*Keep coding! Have fun.*
