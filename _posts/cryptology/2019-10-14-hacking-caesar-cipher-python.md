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

And with today's computing power, it will take just a few milliseconds to achieve that, even with an old boxed machine.

This very well explains why it's such a bad idea to use **Caesar Cipher** and why one should never use it.

<img id="caesar-cipher" class="mx-auto" src="/assets/images/posts/caesar-cipher.jpg" alt="caesar-cipher" style="height:400px; width: 550px;">

Now we'll put together a python script to brute force through the encrypted text.

## Python implementation:

### Step 1:
Declare a function, hack_caesar_cipher(), which takes encrypted message as a parameter.

```
def hack_caesar_cipher(message):
```

### Step 2:
Declare the LETTERS constant with the same symbols, our cipher supports.

```
LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\] !"#$%&\'()*+,-./0123456789abcdefghijklmnopqrstuvwxyz:;<=>?@^_`{|}~'
```

### Step 3:
Now we will loop through keys from 0 to size of symbols set or length of LETTERS.
Then the program will try to decrypt the encrypted message string, using one key at a time, by looping over each letter in the encrypted message and subtracting the key from the letter index. Same as how we had decrypted in the last article.

### Step 4:
The program will print as output, all possible decryptions it achieves using each of the possible key values, essentially brute forcing it's way to decrypt the cipher.

*Output will look like below :*
{% highlight shell %}
Key #0: #uv?-v?-z|-?rp>r@-zr??ntr
Key #1: "tu>,u>,y{,>qo=q?,yq>>msq
Key #2: !st=+t=+x`+=pn<p>+xp==lrp
Key #3:  rs<*s<*w_*<om;o=*wo<<kqo
Key #4: ]qr;)r;)v^);nl:n<)vn;;jpn
Key #5: \pq:(q:(u@(:mkzm;(um::iom
Key #6: [opz'pz't?'zljyl:'tlzzhnl
Key #7: Znoy&oy&s>&ykixkz&skyygmk
Key #8: Ymnx%nx%r=%xjhwjy%rjxxflj
Key #9: Xlmw$mw$q<$wigvix$qiwweki
Key #10: Wklv#lv#p;#vhfuhw#phvvdjh
Key #11: Vjku"ku"o:"ugetgv"oguucig
Key #12: Uijt!jt!nz!tfdsfu!nfttbhf
Key #13: This is my secret message
Key #14: Sghr]hr]lx]rdbqds]ldrr9fd
Key #15: Rfgq\gq\kw\qcapcr\kcqq8ec
Key #16: Qefp[fp[jv[pb9obq[jbpp7db
.
.
.
.
Key #91: 'yz`1z`1=B1`vt_v{1=v``rxv
Key #92: &xy_0y_0<A0_us^u`0<u__qwu
Key #93: %wx^/x^/;~/^tr@t_/;t^^pvt
Key #94: $vw@.w@.:}.@sq?s^.:s@@ous
{% endhighlight %}


In the next article on Cryptology, we'll learn about Affine Cipher, which is in some aspect, an extended version of the Caesar Cipher.


#### Source Code of the function :
{% highlight python %}

def hack_caesar_cipher(encrypted_message):
    LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\] !"#$%&\'()*+,-./0123456789abcdefghijklmnopqrstuvwxyz:;<=>?@^_`{|}~'
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


<br/>
<br/>
*Keep coding! Have fun.*

###### Reference: Hacking Secret Ciphers with Python - By Al Sweigart
