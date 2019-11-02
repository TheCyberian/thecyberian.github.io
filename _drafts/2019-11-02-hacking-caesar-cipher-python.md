---
layout: post
title:  "Hack Caesar cipher with Python3"
categories: Cryptology Python
author: Utkarsh Raghav
---
Okay, so we learnt how to implement Caesar cipher in the previous article. We saw the Key space for it was pretty small, i.e., basically the size of list of supported symbols.

So, if you were to brute force it, how many possible keys do you think will be there ?
The number of keys is equal to the size or length of the supported symbols list. In our case, the length of string was 95.
So, it'll just take 95 attempts, with all possible keys, and the cipher breaks.

And with today's computing power, it will take just some milliseconds to achieve that.

This very well explains why it's such a bad idea to use **Caesar Cipher** and why one should never use it.

Now we'll put together a python script to brute force through the encrypted text.

## Python implementation:

### Step 1:
Declare a function, hack_caesar_cipher(), which takes encrypted message as a parameter.

```
def hack_caesar_cipher(message, key, mode='encrypt'):
```

### Step 2:


### Step 3:


### Step 4:


Complete Source Code :
{% highlight python %}

def hack_caesar_cipher(encrypted_message):
    for key in range(len(LETTERS)):
        clear_text = ''
        for symbol in encrypted_message:
            if symbol in LETTERS:
                num = LETTERS.find(symbol) # get the number of the symbol
                num = num - key
                if num < 0:
                    num = num + len(LETTERS)
                clear_text = clear_text + LETTERS[num]
            else:
                clear_text = clear_text + symbol
        print('Key #{}: {}'.format(key, clear_text))

{% endhighlight %}

Output:
```


```

In the next article on Cryptology, we'll learn about Affine Cipher, which is kind of an extended version of the Caesar Cipher.

<br/>
<br/>
*Keep coding! Have fun.*
