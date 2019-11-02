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

To decrypt the affine cipher, we need to multiply by the key’s modular inverse. And to find modular inverse,
keyA and size of symbol set must be relatively prime, for us to be able to find it, i.e., Highest Common Factor or
Greatest Common Divisor must be 1 for them.

```
gcd(key, size of symbol set) == 1.
```

If that condition's not true, modular inverse for keyA and m *(Key Space)* doesn't exist, and the encryption will not work correctly.

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

### Step 2:


### Step 3:


### Step 4:


Complete Source Code :
{% highlight python %}

{% endhighlight %}

Output:
```
$ python3 affine_cipher.py
Keyspace size: |K| = 95
Cipher Text = #uv?-v?-z|-?rp>r@-zr??ntr
Keyspace size: |K| = 95
Clear Text = This is my secret message
```

In the next article on Cryptology, we'll try to understand how brute forcing works and why using caesar cipher or any other historical ciphers is not a very good idea.

<br/>
<br/>
*Keep coding! Have fun.*


<br/>
<br/>
*Keep coding! Have fun.*

###### Reference: Hacking Secret Ciphers with Python - By Al Sweigart
