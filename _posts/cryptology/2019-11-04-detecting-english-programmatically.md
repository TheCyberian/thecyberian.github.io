---
layout: post
title:  "Detect English with Python3"
categories: Cryptology Python
author: Utkarsh Raghav
---
We know that the affine cipher encryption is limited to a few thousand keys. This means it is minor task to perform a brute-force
attack against it. But as a cryptanalyst, it'll be difficult to even check a few thousands of decrypted outputs to see whether encryption was cracked and if so, at which key number.

To achieve that, we need to figure out a way such that, our program computes that whether the decrypted items are random gibberish or English words. We need to program the computer to be able to recognize if the plaintext is garbage text or English text.

That way, if the computer decrypts with the wrong key, it knows to go on and try the next possible key. And when the computer tries a key that decrypts to English text, it can stop and bring that key to the attention of the cryptanalyst. Now the cryptanalyst won’t have to look through thousands of incorrect decryptions.

But the question here is, How can a computer understand English ?
Simple answer, **IT CAN'T** at least not directly. Although, we have another way to do this. We know that all english text words have one thing in common, i.e., they can be found in a **Dictionary**. Once we have the words, we can basically test to see if the word we are checking is present in the Dictionary.

So we need to write a script that let's us check that. It wouldn't be accurate 100% of times or work 100% of the times. But it gives us a pretty good starting point to work with. Let's call the function **isEnglish()** and it's return value will be a boolean.

Before we begin, you can download \*<a id="Dictionary" href="/assets/files/dictionary.txt">this file</a> which contains about 45000 words.

#### Step 1:
We begin by setting up 2 constants, UPPERLETTERS and LETTERS_AND_SPACE.
UPPERLETTERS is a constant containing the 26 uppercase letters, and LETTERS_AND_SPACE constant contains these letters
(and the lowercase letters returned from UPPERLETTERS.lower()).

It also contains the space character, the tab character, and the newline character. The tab and newline characters are represented
with escape characters \t and \n.
```
UPPERLETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
LETTERS_AND_SPACE = UPPERLETTERS + UPPERLETTERS.lower() + ' \t\n'
```
#### Step 2:
Then we write a function to load the dictionary file into memory. The function opens the dictionary file, reads the words splitting them at the new line "\\n" character and loading each of them into *englishWords* python dictionary and returns it on exiting, after closing the dictionary file.

```
def loadDictionary():
    dictionaryFile = open('path/to/dictionary.txt')
    englishWords = {}
    for word in dictionaryFile.read().split('\n'):
        englishWords[word] = None
    dictionaryFile.close()
    return englishWords
```

#### Step 3:
The below function will take one string argument and return a float value indicating the amount of recognized English words in it. The value 0.0 will mean none of the words in message are English words and 1.0 will mean all of the words in message are English words, but most likely the function will return something in between 0.0 and 1.0. The isEnglish() function will use this return value as part of whether it returns True or False.
```
ENGLISH_WORDS = loadDictionary()

def getEnglishCount(message):
    message = message.upper()
    message = removeNonLetters(message)
    possibleWords = message.split()
    if possibleWords == []:
        return 0.0 # no words at all, so return 0.0
    matches = 0
    for word in possibleWords:
        if word in ENGLISH_WORDS:
            matches += 1
    return float(matches) / len(possibleWords)
```

#### Step 4:
In the above function, we have called a method called *removeNonLetters(message)*.
The function returns a string that is same as the passed argument, with all the numbers and punctuation characters removed.

The code in removeNonLetters() starts with a blank list and loops over each character in the message argument. If the character exists in the LETTERS_AND_SPACE string, then it is added to the end of the list. If the character is a number or punctuation mark, then it won’t exist in the LETTERS_AND_SPACE string and won’t be added to the list.

Let's implement that now.
```
def removeNonLetters(message):
    lettersOnly = []
    for symbol in message:
        if symbol in LETTERS_AND_SPACE:
            lettersOnly.append(symbol)
    return ''.join(lettersOnly)
```

#### Step 5:
As discussed earlier, the *isEnglish()* function will accept a string argument and return a Boolean value that indicates whether or not it is English text. But to improve it's usage, it can take three parameters. The second and third parameters (wordPercentage and letterPercentage) are set to default values.

If isEnglish() is called with only one argument, the default arguments are used for the wordPercentage (20%) and letterPercentage (85%) parameters.

The percentage will always be between 0% (meaning none of the words) and 100% (meaning all of the words). Our isEnglish() function will consider a string to be English if at least 20% of the words are English words that exist in the dictionary file and 85% of the characters in the string are letters (or spaces). User can change the value of wordPercentage parameter to get more accurate results.

```
def isEnglish(message, wordPercentage=20, letterPercentage=85):
    wordsMatch = getEnglishCount(message) * 100 >= wordPercentage
    numLetters = len(removeNonLetters(message))
    messageLettersPercentage = float(numLetters) / len(message) * 100
    lettersMatch = messageLettersPercentage >= letterPercentage
    return wordsMatch and lettersMatch
```

#### Step 6 :
Now let's test the script out.

```
Python 3.7.5rc1 (default, Oct  8 2019, 16:47:45)
[GCC 9.2.1 20191008] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import detect_english
>>> detect_english.isEnglish("A computer would deserve to be called intelligent \
... if it could deceive a human into believing that it was human. - Alan Turing")
True
>>> detect_english.isEnglish("This is a Test String.")
True
>>>
```

Please find the below source code of the script.

{% highlight Python%}
UPPERLETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

LETTERS_AND_SPACE = UPPERLETTERS + UPPERLETTERS.lower() + ' \t\n'


def loadDictionary():
    dictionaryFile = open('dictionary.txt')
    englishWords = {}
    for word in dictionaryFile.read().split('\n'):
        englishWords[word] = None
    dictionaryFile.close()
    return englishWords


ENGLISH_WORDS = loadDictionary()


def getEnglishCount(message):
    message = message.upper()
    message = removeNonLetters(message)
    possibleWords = message.split()
    if possibleWords == []:
        return 0.0 # no words at all, so return 0.0
    matches = 0
    for word in possibleWords:
        if word in ENGLISH_WORDS:
            matches += 1
    return float(matches) / len(possibleWords)


def removeNonLetters(message):
    lettersOnly = []
    for symbol in message:
        if symbol in LETTERS_AND_SPACE:
            lettersOnly.append(symbol)
    return ''.join(lettersOnly)


def isEnglish(message, wordPercentage=20, letterPercentage=85):
    wordsMatch = getEnglishCount(message) * 100 >= wordPercentage
    numLetters = len(removeNonLetters(message))
    messageLettersPercentage = float(numLetters) / len(message) * 100
    lettersMatch = messageLettersPercentage >= letterPercentage
    return wordsMatch and lettersMatch

{% endhighlight %}

In the next Cryptology article, we'll move forward with cracking the Affine Cipher.

<br/>
<br/>
*Keep coding! Have fun.*

###### \*Courtsey: Hacking Secret Ciphers with Python - By Al Sweigart
