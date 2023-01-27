#Introduction
This program allows you to create an Ethereum Virtual Machine (EVM) compatible public address, private key, and mnemonic. However, it requires basic development knowledge for setting up the environment to run the program. Once set up, you can use it to securely store and manage your Ethereum and other ERC-20 tokens.
So instead of clreating your wallet online with metamask , now you will be able to create it offline

#Disclaimer
This program is distributed in the hope that it will be useful, without warranty of any kind, either expressed or implied, including, but not limited to, the implied warranties of merchantability and fitness for a particular purpose.
You use this program entirely at your own risk. The author will not be liable for any damages arising from the use of this program.

#License
This program is free for personal and commercial use. yo umay do whatever you want with it.

#Credits
Old time when search was done via Google

#Requirements
Node.js 16 or greater
Latest stable version can be downloaded here [Download Node.js](https://nodejs.org/en/download/)

#How to install this program
Run the following command to install the dependency : npm install

#How to use this program :
Once installed , this program can be run offline and thus act as cold storage

**Create:**
Use this script to create new seed phrase and the first 3 accounts , **don't forget to save the seed phrase , without it you wont be able to recover your wallet and your funds**

In the terminal run the follwoing command: npm run create

This will give you the public address and the private key of the first 3 accounts
if you want to get the 4th account then just replace 3 by 4 as the code below in create.js

```node
const numberOfAccounts = 4; // number of accounts to create
```

**Restore:**
Use this script incase you already had your sed phrase and you want to restore your private keys or public addresses
In restore.js file replace mnemonic value by your seed phrase and save the file

In the terminal run the follwoing command: npm run restore

This will give you the public address and the private key of the first 3 accounts
if you want to get the 4th account then just replace 3 by 4 as the code below in restore.js

```node
const numberOfAccounts = 4; // number of accounts to restore
```
