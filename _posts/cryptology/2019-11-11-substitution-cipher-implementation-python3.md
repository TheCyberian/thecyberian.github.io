---
layout: post
title:  "Implement Substitution Cipher with Python3"
categories: Cryptology Python
author: Utkarsh Raghav
---
Until now, we have learnt about two of the symmetric Ciphers, namely Caesar's and Affine Cipher. Both  of these had less number of keys which can be easily brute forced.

In this article, we'll discuss about Simple Substitution Cipher. This cipher is much better in aspect of number of keys it uses, making it invulnerable to Brute force attacks. Although, there are different techniques of attacks which still enable us to break it, it's still much stronger encryption when compared to Caesar's and Affine.

To implement the simple substitution cipher, we choose a random letter to encrypt each letter of the alphabet.
Each letter is used once and only once. The key becomes a string of 26 letters of the alphabet in random order.

There are 26! possible keys, which is equal to 26 * 25 * 24 *.....* 2 * 1 = 403,291,461,126,605,635,584,000,000 possible orderings for keys. Pretty much impossible to brute force with the current computing power.

To put things in perspective, with current computing power we can break DES, which implements a 56-bit keys(2<sup>56</sup>). It still takes a few days at times to break it.
- So, if we take 2<sup>88</sup> and expand it as, 2<sup>56</sup> x 2<sup>32</sup>
- And, 2<sup>32</sup> nearly equals 4 x 10<sup>9</sup>
- To make things simple, let's get rid of 4 and expand 10<sup>9</sup>.
- 2<sup>88</sup> = 2<sup>56</sup> x 1,000,000,000
- This means, it's still a **billion times** stronger than what we can brute force today. In future we might be able to achieve that kind of super computing powers. But not today.

But still this cipher is not very strong, and can be easily broken.
Provided the message is of reasonable length, the cryptanalyst can deduce the probable meaning of the most common symbols by doing a simple pattern analysis of the ciphertext. But that's a topic for another article. Now let's get to implementing substitution cipher in Python3.

We'll be following the below algorithm to implement Substitution Cipher encryption:
1. Generate and validate random key containing all 26 letters of alphabet, without repetetions.
2. This key will be used to substitute LETTERS present on the same respective indexs.
3. Declare an empty string, for creating the translated string.
4. For encryption, begin by looping over symbols in message string, changing it uppercase.
5. Find the index of the symbol in the letters, then using the index copy the respective symbol from the key to translated string.
6. Repeat until the string is completed.
7. For decryption, replace LETTERS and String and repeat the process from step 3 to step 6.

So, let begin now.

### Step 1:
Typing a string for a key that contains each letter of the alphabet can be difficult. To help us with this, the *getRandomKey()* function returns a valid key to use.

If user wants to enter their own key, *checkValidKey(key)* function allows us to validate that the key doesn't contain any duplicates, by sorting and comparing it to LETTERS symbol set. If it isn't, the system exits.
```
def getRandomKey():
    key = list(LETTERS)
    random.shuffle(key)
    return ''.join(key)

def checkValidKey(key):
    keyList = list(key)
    lettersList = list(LETTERS)
    keyList.sort()
    lettersList.sort()
    if keyList != lettersList:
        sys.exit('There is an error in the key or symbol set.')
```

### Step 2:
Since, the encryption process is similar to decryption, one method is enough to handle them. Although, for readability purposes, we can use the wrapper functions.
```
def encryptMessage(key, message):
    return translateMessage(key, message, 'encrypt')


def decryptMessage(key, message):
    return translateMessage(key, message, 'decrypt')
```
### Step 3:
The function translateMessage(), for encrypting, works to find the index of the symbol in the LETTERS, then using the index copy the respective symbol from the *key* to the translated string. For decryption, it just replaces symbols in LETTERS with the symbols in key. And then does the same process as encryption.
```
def translateMessage(key, message, mode):
    translated = ''
    charsA = LETTERS
    charsB = key
    if mode == 'decrypt':
        charsA, charsB = charsB, charsA

    for symbol in message:
        if symbol.upper() in charsA:
            symIndex = charsA.find(symbol.upper())

            if symbol.isupper():
                translated += charsB[symIndex].upper()
            else:
                translated += charsB[symIndex].lower()
        else:
            translated += symbol
    return translated
```

### Step 4:
The main() function runs by defining a key(which could have been created using getRandomKey() function as well),
a mode of running, calling the wrapper functions based on the mode selected and at last, printing the mencrypted or decrypted message.

```
def main():
    myMessage = 'If a man is offered a fact which goes against his instincts, he will scrutinize it closely, and unless the evidence is overwhelming, he will refuse to believe it. If, on the other hand, he is offered something which affords a reason for acting in accordance to his instincts, he will accept it even on the slightest evidence. The origin of myths is explained in this way. -Bertrand Russell'
    myKey = 'LFWOAYUISVKMNXPBDCRJTQEGHZ'
    myMode = 'encrypt'
    checkValidKey(myKey)
    if myMode == 'encrypt':
        translated = encryptMessage(myKey, myMessage)
    elif myMode == 'decrypt':
        translated = decryptMessage(myKey, myMessage)

    print('Using key %s' % (myKey))
    print('The %sed message is:' % (myMode))
    print(translated)
```

This is it, we have successfully implemented substitution cipher. In the upcoming article, we'll see some concepts of Pattern analysis which will help us to break substitution cipher smartly, even when it has a billion times more possible keys than the DES, the most secure encryption of the 20th century(not anymore though, in the 21st century, now we have AES and 3DES).

### Source Code :
{% highlight python %}
import sys, random

LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

def main():
    myMessage = 'If a man is offered a fact which goes against his instincts, he will scrutinize it closely, and unless the evidence is overwhelming, he will refuse to believe it. If, on the other hand, he is offered something which affords a reason for acting in accordance to his instincts, he will accept it even on the slightest evidence. The origin of myths is explained in this way. -Bertrand Russell'
    myKey = 'LFWOAYUISVKMNXPBDCRJTQEGHZ'
    myMode = 'encrypt' # set to 'encrypt' or 'decrypt'
    checkValidKey(myKey)
    if myMode == 'encrypt':
        translated = encryptMessage(myKey, myMessage)
    elif myMode == 'decrypt':
        translated = decryptMessage(myKey, myMessage)

    print('Using key %s' % (myKey))
    print('The %sed message is:' % (myMode))
    print(translated)


def checkValidKey(key):
    keyList = list(key)
    lettersList = list(LETTERS)
    keyList.sort()
    lettersList.sort()
    if keyList != lettersList:
        sys.exit('There is an error in the key or symbol set.')


def encryptMessage(key, message):
    return translateMessage(key, message, 'encrypt')


def decryptMessage(key, message):
    return translateMessage(key, message, 'decrypt')


def translateMessage(key, message, mode):
    translated = ''
    charsA = LETTERS
    charsB = key
    if mode == 'decrypt':
        charsA, charsB = charsB, charsA

    for symbol in message:
        if symbol.upper() in charsA:
            symIndex = charsA.find(symbol.upper())

            if symbol.isupper():
                translated += charsB[symIndex].upper()
            else:
                translated += charsB[symIndex].lower()
        else:
            translated += symbol
    return translated


def getRandomKey():
    key = list(LETTERS)
    random.shuffle(key)
    return ''.join(key)


if __name__ == '__main__':
    main()

{% endhighlight %}

### Output :
#### encryption
```
$ python3 simple_substitution_cipher.py
Using key LFWOAYUISVKMNXPBDCRJTQEGHZ
The encrypted message is:
Sy l nlx sr pyyacao l ylwj eiswi upar lulsxrj isr sxrjsxwjr, ia esmm rwctjsxsza sj wmpramh, lxo txmarr jia aqsoaxwa sr pqaceiamnsxu, ia esmm caytra jp famsaqa sj. Sy, px jia pjiac ilxo, ia sr pyyacao rpnajisxu eiswi lyypcor l calrpx ypc lwjsxu sx lwwpcolxwa jp isr sxrjsxwjr, ia esmm lwwabj sj aqax px jia rmsuijarj aqsoaxwa. Jia pcsusx py nhjir sr agbmlsxao sx jisr elh. -Facjclxo Ctrramm
```

#### decryption
```
$ python3 simple_substitution_cipher.py
Using key LFWOAYUISVKMNXPBDCRJTQEGHZ
The decrypted message is:
If a man is offered a fact which goes against his instincts, he will scrutinize it closely, and unless the evidence is overwhelming, he will refuse to believe it. If, on the other hand, he is offered something which affords a reason for acting in accordance to his instincts, he will accept it even on the slightest evidence. The origin of myths is explained in this way. -Bertrand Russell

```


<br/>
<br/>
*Keep coding! Have fun.*

###### Reference: Hacking Secret Ciphers with Python - By Al Sweigart
