---
layout: post
title:  "Implement Caesar cipher with Python3"
categories: Cryptology Python
author: Utkarsh Raghav
---
Caesar Cipher (or shift cipher) is one of the well known historical cipher. It's application uses, what we call in terms of Cyptology, **a symmetric algorithm**.


*<b>A little history before we get started:</b>
It is said to have been used by Julius Caesar to communicate with his army. Caesar is considered to be one of the first person to have ever employed encryption for securing messages. Caesar decided that shifting each letter in the message would be his standard algorithm, and so he informed all of his generals of his decision, and was then able to send them secured messages.*

<img id="caesar-cipher" class="mx-auto" src="/assets/images/posts/caeser-cipher.png" alt="caesar-cipher" style="width: 575px;">

It's one of the simplest and most widely known encryption techniques. It also uses a simple bit of modular arithmetic.
In Caesar cipher, each letter in the plaintext is replaced by a letter some fixed number of positions **(or Key)** down the alphabet or the list of symbols accepted.
In our python program, we are going to use a constant, called LETTERS. LETTERS constant will be a string containing all possible alphabets and symbols on the keyboard.


---
**Mathematically speaking,**

Let K, X, Y ε {0, 1, 2, .... m}, where

K - Encryption Key ;
X - Clear text ;
Y - Encrypted text ;
m - Size of Symbols list/Key space

Encryption Function (e):
Y = e<sub>K</sub> ≡ X + K mod m

Decryption Function (d):
X = d<sub>K</sub> ≡ Y - K mod m

---

## Python implementation:

### Step 1:
Declare a function, caesar_cipher(), which takes message and key as parameters and a default parameter for mode in which the function is to be run, i.e., 'encrypt' or 'decrypt'.

```
def caesar_cipher(message, key, mode='encrypt'):
```

Declare the LETTERS constant with the symbols, you want the cipher to support. This will be your list **(or String in pythonic terms)** of accepted symbols.

```
LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\] !"#$%&\'()*+,-./0123456789abcdefghijklmnopqrstuvwxyz:;<=>?@^_`{|}~'
```

### Step 2:
Next step of encryption, is to loop over the alphabets in message string.
If the alphabet is in the LETTERS, we check for the index position of the alphabet in LETTERS, and add key value to it.
This will become our *new position*. The symbol at the *new position* in LETTERS string, can be picked up and appened to a new string. And this process can be repeated till the message string's last index.
If the alphabet is not in the LETTERS constant, we append is as is.

```
for symbol in message:
    if symbol in LETTERS:
        num = LETTERS.find(symbol)
        num = num + key
        cipher_text = cipher_text + LETTERS[num]
    else:
        cipher_text = cipher_text + symbol
```

### Step 3:
This solves the encryption, now we'll work on the function for it to support decryption. Same logic applies to decryption as well as encryption. Only difference is that key value is to be subtracted from the index position, instead of adding to it, to get the *new position*. So, we'll have to update the for loop to support the decryption. After update it'll look like below:

```
for symbol in message:
    if symbol in LETTERS:
        num = LETTERS.find(symbol)
        if mode == 'encrypt':
            num = num + key
        elif mode == 'decrypt':
            num = num - key
        cipher_text = cipher_text + LETTERS[num]
    else:
        cipher_text = cipher_text + symbol
```

Now there is something that could go wrong. What it is ?

**What happens if the *new position* is more than the number of symbols in LETTERS, or even worse,
 what happens if the *new position* is a negative value.**

### Step 4:
This where modular arithmetic comes in to play.
We put a check in place to check if the postion is greater than the length of LETTERS string or if it's a negative value.
If it is greater than length of LETTERS, we subtract the length of it from the position.
And if it's negative, we'll add the length/size of LETTERS.
```
if num >= len(LETTERS):
    num = num - len(LETTERS)
elif num < 0:
    num = num + len(LETTERS)
```

That's it, we have completed the implementation of Caesar Cipher using Python. The created script can be used to encrypt messages with key values ranging within Key space. If the key value is more than that supported by Key space, it'll be trimmed short by the modular implementation, to keep it within the key space.

Complete Source Code :
{% highlight python %}

def caesar_cipher(message, key, mode='encrypt'):  # or set mode to 'decrypt'
    # key_space |K|
    LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\] !"#$%&\'()*+,-./0123456789abcdefghijklmnopqrstuvwxyz:;<=>?@^_`{|}~'
    print('Keyspace size: |K| =', len(LETTERS))

    # declared an empty string to capture updated text*
    cipher_text = ''

    for symbol in message:
        if symbol in LETTERS:
            # find() function returns the int value of the index of symbol if found else returns -1
            num = LETTERS.find(symbol)
            if mode == 'encrypt':
                num = num + key
            elif mode == 'decrypt':
                num = num - key

            # Performing check before performing modular arithmetic
            if num >= len(LETTERS):
                num = num - len(LETTERS)
            elif num < 0:
                num = num + len(LETTERS)
            cipher_text = cipher_text + LETTERS[num]
        else:
            cipher_text = cipher_text + symbol

    if mode == 'encrypt':
        print('Cipher Text =', cipher_text)
    elif mode == 'decrypt':
        print('Clear Text =', cipher_text)

    return cipher_text


message = 'This is my secret message'
key = 13
mode = 'encrypt'  # or set to decrypt

# Calling the function for encrypting and decrypting simultaneously
text = caesar_cipher(message, key)
caesar_cipher(text, key, 'decrypt')

{% endhighlight %}

Output:
```
$ python3 caesar_cipher.py
Keyspace size: |K| = 95
Cipher Text = #uv?-v?-z|-?rp>r@-zr??ntr
Keyspace size: |K| = 95
Clear Text = This is my secret message
```

In the next article on Cryptology, we'll try to understand how brute forcing works and why using caesar cipher or any other historical ciphers is not a very good idea.

<br/>
<br/>
*Keep coding! Have fun.*

###### Reference: Hacking Secret Ciphers with Python - By Al Sweigart
