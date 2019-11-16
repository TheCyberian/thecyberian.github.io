---
layout: post
title:  "Hacking Affine cipher with Python3"
categories: Cryptology Python
author: Utkarsh Raghav
---
So, in the last article we learnt how to detect english programatically with a python program. Now, in this article we'll move forward to hack the affine cipher.

As we know that the affine cipher encryption is limited to a few thousand keys. This means it is minor task to perform a brute-force attack against it. And with english detection possible now, it's going to be a pretty simple task.


<img id="affine-cipher-hack" class="mx-auto" src="/assets/images/posts/affinehack.jpeg" alt="hack-affine-cipher" style="height:600px; width: 600px;">


In our case, the possible integers for Key A and possible integers for Key B are 95 each. To get the entire range of possible keys, we should multiply these values together, i.e., 95*95 = 9025.

But to hack the Affine cipher will be an easy task now, as we have already written most of the code in previous articles and will just be putting it all together in this one to achieve the results.

We'll be following the below algorithm to break Affine Cipher:
1. Begin with looping over possible key values.
2. Get keyA using *getKeyParts(key)* function from **affine_cipher** module.
3. Check whether keyA and Symbol list size are Coprime.
4. If they're coprime, decrypt the message with key; else go back to step 1.
5. Check whether decrypted values is in english, by using *isEnglish(message)* function of **detect_english** module.
6. If isEnglish() returns True, prompt the user to check, else continue.

So, let begin now.

### Step 1:
We declare a for loop, running till the range of square times of SYMBOLS list size. We call the getKeyParts() function, which if you remember from the Affine Cipher implementation article, returns a tuple of keyA and keyB.

For checking whether the key's valid, we only need keyA.

```
for key in range(len(affine_cipher.SYMBOLS) ** 2):
    keyA = affine_cipher.getKeyParts(key)[0]
```


### Step 2:
Next, we check whether the keyA and SYMBOL list size are coprime. If so, we move on to next step, i.e., to decrypt the text.
If not, we go back to start of loop and try with next key.

```
if math.gcd(keyA, len(affine_cipher.SYMBOLS)) != 1:
    continue
```

### Step 3:
Once, we have got the decrypted text, we pass it to detect_english module's function, **isEnglish(decryptedText)**.
If you remember from last article, this function returns True if more than 20% words in the text are english.
So, if it detects english words, it will prompt the user to validate, else it will continue checking.

```
if detect_english.isEnglish(decryptedText):
    print("\n")
    print('[+] Possible encryption hack:')
    print('[+] Key: %s' % (key))
    print('[!] Decrypted message: ' + decryptedText[:200])
    print("\n")
    print('[!] Enter D for done, or just press Enter to continue hacking:')
    response = input('> ')

    if response.strip().upper().startswith('D'):
        return decryptedText
```
That's it. We have successfully hacked the Affine Cipher. Now you know better, than using Affine Cipher in any of your applications.

In the upcoming articles on Cryptology, we'll see more complicated, **the Simple Substitution Cipher** and the **Vigenère Cipher**.
We'll also learn about techniques of pattern analysis & frequency analysis and their role in breaking some serious Encryptions in matter of seconds.

### Source Code :
{% highlight python %}
import affine_cipher, detect_english, math
import sys, random, time


SILENT_MODE = False

def main():
    myMessage = """n93-w9.?-}9-I9|-3[.q-qJ)f)-#)ff[?)f-q9-Z)#[U.-f)rZ)qi-Cy-3[.q-qJ)#-q9-Z)#[U.-f)rZ)q-49Z-[f-w9.?-[f-#).-[Z)-r[D[gw)-94-)(UwjC-_Q)[w-*q)DJ).f9."""
    hackedMessage = hackAffine(myMessage)
    if hackedMessage != None:
        print(hackedMessage)
    else:
        print('[FATAL] Failed to hack encryption.')


def hackAffine(message):
    print('[+] Starting the Hack...')
    print('[!] (Press Ctrl-C or Ctrl-D to quit at any time.)')

    for key in range(len(affine_cipher.SYMBOLS) ** 2):
        keyA = affine_cipher.getKeyParts(key)[0]
        if math.gcd(keyA, len(affine_cipher.SYMBOLS)) != 1:
            continue

        decryptedText = affine_cipher.decryptMessage(key, message)
        if not SILENT_MODE:
            print('[-] Tried Key %s... (%s)' % (key, decryptedText[:40]))

        if detect_english.isEnglish(decryptedText):
            print("\n")
            print('[+] Possible encryption hack:')
            print('[+] Key: %s' % (key))
            print('[!] Decrypted message: ' + decryptedText[:200])
            print("\n")
            print('[!] Enter D for done, or just press Enter to continue hacking:')
            response = input('> ')

            if response.strip().upper().startswith('D'):
                return decryptedText
    return None


if __name__ == '__main__':
    main()


{% endhighlight %}

### Output :
```
$ python3 hacking_affine_cipher.py
[+] Starting the Hack...
[!] (Press Ctrl-C or Ctrl-D to quit at any time.)
[-] Tried Key 94... (n93-w9.?-}9-I9|-3[.q-qJ)f)-#)ff[?)f-q9-Z)
[-] Tried Key 95... (m82,v8->,|8,H8{,2Z-p,pI(e(,"(eeZ>(e,p8,Y)
[-] Tried Key 96... (l71+u7,=+{7+G7z+1Y,o+oH'd'+!'ddY='d+o7+X)
[-] Tried Key 97... (k60*t6+<*z6*F6y*0X+n*nG&c&* &ccX<&c*n6*W)
[-] Tried Key 98... (j5/)s5*;)y5)E5x)/W*m)mF%b%)~%bbW;%b)m5)V)
[-] Tried Key 99... (i4.(r4):(x4(D4w(.V)l(lE$a$(}$aaV:$a(l4(U)
[-] Tried Key 100... (h3-'q3(9'w3'C3v'-U(k'kD#`#'|#``U9#`'k3'T)
[-] Tried Key 101... (g2,&p2'8&v2&B2u&,T'j&jC"_"&{"__T8"_&j2&S)
[-] Tried Key 102... (f1+%o1&7%u1%A1t%+S&i%iB!^!%z!^^S7!^%i1%R)
.
.
.
.
.
[-] Tried Key 1042... (Qx!)uxwp)mx)#x~)!jw})}qn|n)vn||jpn|)}x){)
[-] Tried Key 1043... (c*2:'*)":~*:4*0:2{)/:/# . :( ..{" .:/*:-)
[-] Tried Key 1044... (t;CK8;:3K0;KE;AKC-:@K@41?1K91??-31?K@;K>)
[-] Tried Key 1045... (&LT]ILKD]AL]VLR]T>KQ]QEBPB]JBPP>DBP]QL]O)
[-] Tried Key 1046... (7^fnZ^]UnR^nh^dnfO]cncVSbSn[SbbOUSbnc^na)
[-] Tried Key 1047... (How long do you want these messages to r)


[+] Possible encryption hack:
[+] Key: 1047
[!] Decrypted message: How long do you want these messages to remain secret? "I want them to remain secret for as long as men are capable of evil." -Neal Stephenson


[!] Enter D for done, or just press Enter to continue hacking:
> D
How long do you want these messages to remain secret? "I want them to remain secret for as long as men are capable of evil." -Neal Stephenson

```


<br/>
<br/>
*Keep coding! Have fun.*

###### Reference: Hacking Secret Ciphers with Python - By Al Sweigart
