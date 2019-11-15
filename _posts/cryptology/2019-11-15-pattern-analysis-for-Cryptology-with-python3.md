---
layout: post
title:  "Pattern Analysis for Cryptology Using Python3"
categories: Cryptology Python
author: Utkarsh Raghav
---

We implemented the substitution cipher in the last article and we know now that the number of possible keys is just too many to be brute forced. Therefore, to break it we need to utilize an intelligent attack.

One of those attacks is Pattern Analysis or Pattern recognition. In layman terms, we need to generate word patterns from the dictionary file and compare them with the patterns in encrypted text. By doing so, we can effectively guess cipher text’s potential decryption letters.

A word pattern basically, will be a set of numbers with periods in between the numbers that tells us the pattern of letters for a word, in either ciphertext or plaintext. A plaintext word and its encrypted text word will always have the same word pattern, no matter which simple substitution key was used to do the encryption.

Creating word patterns for cipherwords is easy:-
The first letter gets the number 0 and the first occurrence of each different letter after that gets the next number.

For example:
-   The word pattern for “cat” is 0.1.2.
-   The word pattern for “catty” is 0.1.2.2.3.
-   The word pattern for “roofer” is 0.1.1.2.3.0.
-   The word pattern for “blimp” is 0.1.2.3.4.
-   The word pattern for “classification” is 0.1.2.3.3.4.5.4.0.2.6.4.7.8.

In our program, a cipherletter mapping dictionary will have 26 keys, one for each letter. If we reduce the number of potential decryption letters for a cipherletter to just one letter, then we have solved what that cipherletter decrypts to. Even if we do not solve all 26 cipherletters, we might be able to hack most of the ciphertext’s cipherletters.

But first we must find the pattern for every word in the dictionary file and sort them in a list so it will be easy to get a list of all the candidates for a given cipherword’s word pattern. We can use the same dictionary file from the <a id="Dictionary" href="/assets/files/dictionary.txt">detect english article</a>.

Since the word patterns for words will never change, we just calculate the word pattern for every word in a dictionary file once and store them into another python file. When we represent a cipherletter mapping in Python code, we will use a dictionary value. Our python script will create the dictionary value with word pattern for every word in the dictionary file. Our hacking program will just import the created python file to look up the possibilities for required word patterns.

### Python implementation
Let's get started now.

#### Step 1:
We first import pprint module, which allows to pretty print the strings. **pprint** module lets us write the dictionary values to output file cleanly. We decalre getWordPattern() function, which takes a word parameter, and returns the word's pattern.

- First, in order to make sure all the letters have the same case, the word parameter is changed to an uppercase version of itself. We then create *nextNum* to store the next number which is used when a new letter is found.
- Variable *letterNums* stores a dictionary with keys of single-letter strings of single letters, and values of the integer number for that letter. As we find new letters in the word, the letter and its number are stored in *letterNums*.

```
import pprint

def getWordPattern(word):
  word = word.upper()
  nextNum = 0
  letterNums = {}
  wordPattern = []

```

#### Step 2:
We then declare variable *wordPattern* which will be the string that is returned from this function. This string will be built one character at a time, so we will use the list-append process to do this, and join it all together before returning the string. This is why wordPattern starts as a blank list instead of a blank string.

It is very inefficient for Python to concatenate strings, since python creates new String each time you concatenate a character value to it as it's immutable. It is much faster to start with a blank list instead of a blank string, and then use the append() list method instead of string concatenation as python lists are mutable. After you are done building the list of strings, you can convert the list of strings to a single string value with the join() method.

Doing that for thousands of dictionary values would affect the performance of the script drastically.

The *for* loop will loop through each character in the word parameter, assigning each character to a variable named letter.
If condition inside the loop checks if letter hasn't been seen before by checking that letter does not exist as a key in the *letterNums* dictionary.

If it hasn't seen this letter before, it adds this letter as the key and the string form of nextNum as the key’s value to the *letterNums* dictionary. For the next new letter we find we want to use the next integer after the one currently in nextNum anymore, we increment the integer in nextNum by 1. *letterNums[letter]* evaluates to the integer used for the letter in the letter variable, so this is appended to the end of wordPattern. The letterNums dictionary is guaranteed to have letter for a key, because if it hadn’t, if condition would have added it to letterNums.

```
import pprint

def getWordPattern(word):
  word = word.upper()
  nextNum = 0
  letterNums = {}
  wordPattern = []
  for letter in word:
      if letter not in letterNums:
          letterNums[letter] = str(nextNum)
          nextNum += 1
      wordPattern.append(letterNums[letter])
  return '.'.join(wordPattern)
```

#### Step 3:
We can now write the main function of the program. We begin by declaring *allPatterns* dictionary value. This is the dictionary value we'll be writing into the python file.
```
def main():
    allPatterns = {}
```

It will store the patterns as keys and the values as the list of english words which share the similar patterns.

Example:
```
'0.1.0.0.2': ['BOBBY','DADDY','LILLY','LULLS','MOMMY','MUMMY','PEPPY','POPPY','PUPPY']
```

#### Step 4:
We then open the dictionary file and read all the words, storing them in a list in the process and then close the file.
We then loop over wordList variable, storing value in word variable and calling getWordPattern() function on it.

There must be a value for the pattern first before we can append word to allPatterns[pattern], otherwise this would cause an error. So, the if condition will check if the pattern is not already in allPatterns. If pattern is not a key in allPatterns yet, it creates a list with word in it to store in allPatterns[pattern]. If the pattern already is in allPatterns, we do not have to create the list. We will just append the word to the list value that is already there.

```
    fo = open('dictionary.txt')
    wordList = fo.read().split('\\n')
    fo.close()
    for word in wordList:
        pattern = getWordPattern(word)
        if pattern not in allPatterns:
            allPatterns[pattern] = [word]
        else:
            allPatterns[pattern].append(word)
```
#### Step 5:
Now that we have all patterns set into *allPatterns* as dictionary values, we can write it to a file, a python file in our case.
We are saving it as a python file, so that we can import it directly when we begin writing the substitution cipher hacking script.
```
fo = open('word_patterns.py', 'w')
fo.write('allPatterns = ')
fo.write(pprint.pformat(allPatterns))
fo.close()
```

With this done, we are good to go for hacking the substitution cipher. We'll see in the next article, why it wasn't a good idea to use substitution cipher, and how it breaks in a matter of seconds even when it seemed impossible to break with billions of possible encryption keys.

### Source Code:

{% highlight Python3 %}
import pprint

def getWordPattern(word):
    word = word.upper()
    nextNum = 0
    letterNums = {}
    wordPattern = []
    for letter in word:
        if letter not in letterNums:
            letterNums[letter] = str(nextNum)
            nextNum += 1
        wordPattern.append(letterNums[letter])
    return '.'.join(wordPattern)

def main():
    allPatterns = {}
    fo = open('dictionary.txt')
    wordList = fo.read().split('\\n')
    fo.close()
    for word in wordList:
        pattern = getWordPattern(word)
        if pattern not in allPatterns:
            allPatterns[pattern] = [word]
        else:
            allPatterns[pattern].append(word)

    fo = open('wordPatterns.py', 'w')
    fo.write('allPatterns = ')
    fo.write(pprint.pformat(allPatterns))
    fo.close()

if __name__ == '__main__':
    main()
{% endhighlight %}

<br/>
<br/>
*Keep coding! Have fun.*

###### Reference: Hacking Secret Ciphers with Python - By Al Sweigart
