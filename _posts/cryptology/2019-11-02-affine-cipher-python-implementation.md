---
layout: post
title:  "Implement Affine cipher with Python3"
categories: Cryptology Python
author: Utkarsh Raghav
---
Affine cipher is an extended version of Shift cipher in some aspects. Caesar Cipher adds key to the alphabet indexes. In affine cipher, we multiply the key value with the index and then add key value to it.
We use a key consisting of two parts for this; k = (keyA, keyB)

Since, we are using multiplication while encrypting, you might think that we need to divide to decrypt with the affine cipher.
But there's a catch here, if you try it yourself, you’ll quickly understand that it doesn’t work.

<img id="affine-cipher" class="mx-auto" src="/assets/images/posts/dataencryption.jpeg" alt="affine-cipher" style="height:600px; width: 600px;">

To decrypt the affine cipher, we need to multiply by the key’s modular inverse. And to find modular inverse,
keyA and size of symbol set must be relatively prime, for us to be able to do so, i.e., Highest Common Factor or
Greatest Common Divisor must be 1 for them.

```
gcd(key, size of symbol set) == 1.
```

If that condition's not true, modular inverse for keyA and m *(Key Space)* doesn't exist, and the encryption will not work properly.

---
**Mathematically speaking,**

Let K, X, Y ε {0, 1, 2, .... m}, where

K - Encryption Key ;
X - Clear text ;
Y - Encrypted text ;
m - Size of Symbols list/Key space

*Only if GCD of keyA and m is equals to 1, then,*

Encryption Function (e):
Y = e<sub>K</sub> ≡ keyA*X + keyB mod m

Decryption Function (d):
X = d<sub>K</sub> ≡ keyA<sup>-1</sup>(Y - keyB) mod m

---

## Python implementation:

### Step 1:
Firstly, we import necessary modules.
- `sys` for using the *exit()* function.
- `random` for generating random key value if required by the user
- `math` for using the *gcd(a, m)* function.

And then we declare a SYMBOLS constant, containing all the supported symbols.

```
import sys, random, math

SYMBOLS = """ !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~"""

```

### Step 2:
We now declare a *main()* function, declaring myMessage, myKey and myMode variables. For simplicity of use, we'll declare only one key and programatically split it into two.
If myMode, is set to **encrypt**, *encryptMessage()* function is executed and returned value is stored into variable ***translated***.
Or, if myMode, is set to **decrypt**, *decryptMessage()* function is executed and returned value is stored into variable ***translated***.
```
def main():
    myMessage = """How long do you want these messages to remain secret? "I want them to remain secret for as long as men are capable of evil." -Neal Stephenson"""
    myKey = 1047
    myMode = 'decrypt' # set to 'encrypt' or 'decrypt'

    if myMode == 'encrypt':
        translated = encryptMessage(myKey, myMessage)
    elif myMode == 'decrypt':
        translated = decryptMessage(myKey, myMessage)
    print('Key: %s' % (myKey))
    print('%sed text:' % (myMode.title()))
    print(translated)
```

### Step 3:
Since, we have used single key, we'll split it into two using basic maths.
```
def getKeyParts(key):
    keyA = key // len(SYMBOLS)
    keyB = key % len(SYMBOLS)
    return (keyA, keyB)
```
The getKeyParts() function will split a single integer into two integers, Key A and Key B. The single key (myKey) is divided by the size of the SYMBOLS, and Key A is the quotient and Key B is the remainder.

### Step 4:
Encrypting with the affine cipher involves a character’s index in SYMBOLS being multiplied by Key A and added to Key B.
- If keyA is 1, the encrypted text will be very weak because multiplying the index by 1 does not change it.
- If keyB is 0, the encrypted text will be weak because adding the index to 0 does not change it.
- If both keyA was 1 and keyB was 0, the “encrypted” message would be the exact same as the original message. **It wouldn’t be encrypted at all!**

The if statements inside *checkKeys()* function, check for these “weak key” conditions, and exit the program with a print message telling the user what was wrong.

These checks only apply to prevent you from encrypting with weak keys. If mode is set to 'decrypt', then the checks don’t apply.
```
def checkKeys(keyA, keyB, mode):
    if keyA == 1 and mode == 'encrypt':
        sys.exit('The affine cipher becomes incredibly weak when key A is set to 1. Choose a different key.')
    if keyB == 0 and mode == 'encrypt':
        sys.exit('The affine cipher becomes incredibly weak when key B is set to 0. Choose a different key.')
    if keyA < 0 or keyB < 0 or keyB > len(SYMBOLS) - 1:
        sys.exit('Key A must be greater than 0 and Key B must be between 0 and %s.' % (len(SYMBOLS) - 1))
    if math.gcd(keyA, len(SYMBOLS)) != 1:
        sys.exit('Key A (%s) and the symbol set size (%s) are not relatively prime. Choose a different key.' % (keyA, len(SYMBOLS)))
```

### Step 5:
Finally, the encryption function. This function first captures the keys, keyA and keyB. It then validates them for validity by calling the function we declared in the last step.
After that, it just goes through and does the mathematical steps discussed previously.
Although, if the symbol is not present in the SYMBOLS set, it's appeneded just as it is.
```
def encryptMessage(key, message):
    keyA, keyB = getKeyParts(key)
    checkKeys(keyA, keyB, 'encrypt')
    ciphertext = ''
    for symbol in message:
        if symbol in SYMBOLS:
            symIndex = SYMBOLS.find(symbol)
            ciphertext += SYMBOLS[(symIndex * keyA + keyB) % len(SYMBOLS)]
        else:
            ciphertext += symbol
    return ciphertext
```

### Step 6:
The decryptMessage() function is almost the same as the encryptMessage().
However, instead of multiplying by Key A, the decryption process needs to multiply by the modular inverse of Key A. The mod inverse is calculated by calling *modInverse()* function defined in next step.

The only difference is that in the encryptMessage() function, the symbol index was multiplied by Key A and then had Key B added to it. In decryptMessage() function, the symbol index first has Key B subtracted from it, and then is multiplied by the modular inverse. Then this number is modded by the size of the symbol set, len(SYMBOLS). This is how the decryption process undoes the encryption.

```
def decryptMessage(key, message):
    keyA, keyB = getKeyParts(key)
    checkKeys(keyA, keyB, 'decrypt')
    plaintext = ''
    modInverseOfKeyA = modInverse(keyA, len(SYMBOLS))
    for symbol in message:
        if symbol in SYMBOLS:
            symIndex = SYMBOLS.find(symbol)
            plaintext += SYMBOLS[(symIndex - keyB) * modInverseOfKeyA % len(SYMBOLS)]
        else:
            plaintext += symbol
    return plaintext
```

### Step 7:
The modInverse() function, basically tries to implement *(a * i) % m == 1* for all possible values of **i**.
Once, the condition becomes true, function returns.

```
def modInverse(a, m):
    a = a % m
    for x in range(1, m):
        if((a * x) % m == 1):
            return x
    return None
```

In the next article on Cryptology, we'll understand how to detect english Programmatically after which we'll get to the article where we'll learn how to hack the Affine cipher elegantly.

#### Complete Source Code :
{% highlight python %}
import sys, random, math

SYMBOLS = """ !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~""" # note the space at the front

def main():
    myMessage = """How long do you want these messages to remain secret? "I want them to remain secret for as long as men are capable of evil." -Neal Stephenson"""

    myKey = 1047
    myMode = 'decrypt' # set to 'encrypt' or 'decrypt'
    if myMode == 'encrypt':
        translated = encryptMessage(myKey, myMessage)
    elif myMode == 'decrypt':
        translated = decryptMessage(myKey, myMessage)
    print('Key: %s' % (myKey))
    print('%sed text:' % (myMode.title()))
    print(translated)


def getKeyParts(key):
    keyA = key // len(SYMBOLS)
    keyB = key % len(SYMBOLS)
    return (keyA, keyB)


def checkKeys(keyA, keyB, mode):
    if keyA == 1 and mode == 'encrypt':
        sys.exit('The affine cipher becomes incredibly weak when key A is set to 1. Choose a different key.')
    if keyB == 0 and mode == 'encrypt':
        sys.exit('The affine cipher becomes incredibly weak when key B is set to 0. Choose a different key.')
    if keyA < 0 or keyB < 0 or keyB > len(SYMBOLS) - 1:
        sys.exit('Key A must be greater than 0 and Key B must be between 0 and %s.' % (len(SYMBOLS) - 1))
    if math.gcd(keyA, len(SYMBOLS)) != 1:
        sys.exit('Key A (%s) and the symbol set size (%s) are not relatively prime. Choose a different key.' % (keyA, len(SYMBOLS)))


def encryptMessage(key, message):
    keyA, keyB = getKeyParts(key)
    checkKeys(keyA, keyB, 'encrypt')
    ciphertext = ''
    for symbol in message:
        if symbol in SYMBOLS:
            symIndex = SYMBOLS.find(symbol)
            ciphertext += SYMBOLS[(symIndex * keyA + keyB) % len(SYMBOLS)]
        else:
            ciphertext += symbol
    return ciphertext


def decryptMessage(key, message):
    keyA, keyB = getKeyParts(key)
    checkKeys(keyA, keyB, 'decrypt')
    plaintext = ''
    modInverseOfKeyA = modInverse(keyA, len(SYMBOLS))
    for symbol in message:
        if symbol in SYMBOLS:
            symIndex = SYMBOLS.find(symbol)
            plaintext += SYMBOLS[(symIndex - keyB) * modInverseOfKeyA % len(SYMBOLS)]
        else:
            plaintext += symbol
    return plaintext


def getRandomKey():
    while True:
        keyA = random.randint(2, len(SYMBOLS))
        keyB = random.randint(2, len(SYMBOLS))
        if math.gcd(keyA, len(SYMBOLS)) == 1:
            return keyA * len(SYMBOLS) + keyB


def modInverse(a, m):
    a = a % m
    for x in range(1, m):
        if((a * x) % m == 1):
            return x
    return None


if __name__ == '__main__':
     main()

{% endhighlight %}

#### Output: *Encryption*
```
$ python3 affine_cipher.py
Key: 1047
Encrypted text:
n93-w9.?-}9-I9|-3[.q-qJ)f)-#)ff[?)f-q9-Z)#[U.-f)rZ)qi-Cy-3[.q-qJ)#-q9-Z)#[U.-f)rZ)q-49Z-[f-w9.?-[f-#).-[Z)-r[D[gw)-94-)(UwjC-_Q)[w-*q)DJ).f9.
```
#### Output: *Decryption*
```
$ $ python3 affine_cipher.py
Key: 1047
Decrypted text:
How long do you want these messages to remain secret? "I want them to remain secret for as long as men are capable of evil." -Neal Stephenson
```

<br/>
<br/>
*Keep coding! Have fun.*

###### Reference: Hacking Secret Ciphers with Python - By Al Sweigart
