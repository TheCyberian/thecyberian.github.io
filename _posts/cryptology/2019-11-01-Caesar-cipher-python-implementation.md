---
layout: post
title:  "Caesar (or shift) cipher implementation with Python3"
categories: Cryptology Python
author: Utkarsh Raghav
---
Caesar Cipher (or shift cipher) is one of the well known historical cipher. It's application uses, what we call in terms of Cyptology, **a symmetric algorithm**.

#### Note :-<br>
Before we begin, we need to have performed the following steps:


#### Now we'll begin configuring Eclipse IDE for working with selenium webdriver.

### Step 1:


### Step 2:


### Step 3:


### Step 4:


Source Code of implementation :
{% highlight python %}

message = 'This is my secret message'
key = 13
mode = 'encrypt'  # or set to decrypt


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


# Calling the function for encrypting and decrypting simultaneously
text = caesar_cipher(message, key)
caesar_cipher(text, key, 'decrypt')

{% endhighlight %}

In the next article on Cryptology, we'll try to understand how brute forcing works and why using caesar cipher is not a very good idea.
<br/>
<br/>
*Keep coding! Have fun.*
