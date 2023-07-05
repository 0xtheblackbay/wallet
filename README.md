## Introduction

This program allows you to create an Ethereum Virtual Machine (EVM) compatible public address, private key, and mnemonic. However, it requires basic development knowledge for setting up the environment to run the program. Once set up, you can use it to securely store and manage your Ethereum and other ERC-20 tokens.
So instead of clreating your wallet online with metamask , now you will be able to create it offline

## Disclaimer

This program is distributed in the hope that it will be useful, without warranty of any kind, either expressed or implied, including, but not limited to, the implied warranties of merchantability and fitness for a particular purpose.
You use this program entirely at your own risk. The author will not be liable for any damages arising from the use of this program.

## License

This program is free for personal and commercial use. you may do whatever you want with it.

## Credits

Old time when search was done via Google

## Requirements

Node.js 16 or greater
Latest stable version can be downloaded here [Download Node.js](https://nodejs.org/en/download/)

Tested with zero vulnerabilities on 27/06/2023 running on:

```sh
tbb@tbb:~/git/tbb/wallet> uname -a
Linux tbb 5.14.21-150400.24.66-default
tbb@tbb:~/git/tbb/wallet> npm --version
8.19.4
tbb@tbb:~/git/tbb/wallet> node -v
v16.20.0
tbb@tbb:~/git/tbb/wallet> 
```

## HowTo run this

### install

1. Run the following command to install the packages `npm i`

```sh
tbb@tbb:~/git/tbb/wallet> npm i

added 59 packages, and audited 60 packages in 10s

32 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
tbb@tbb:~/git/tbb/wallet> 
```

Once installed, this program can be run offline and thus act as cold storage to generate new addresses.

### Create a new deterministic wallet

Use this script to create new seed phrase. Remember to set the number of accounts you want to create in the config file.

> **@EVERYONE**: don't forget to save the seed phrase from the output, without it you wont be able to recover your wallet and your funds.

In the terminal run `npm run create` to generate a new deterministic wallet from a random seed.

```sh
tbb@tbb:~/git/tbb/wallet> npm run create

> wallet@1.0.0 create
> node create.js

[2023-06-27T22:22:35.569] [DEBUG] create-script - loading configuration.
[2023-06-27T22:22:35.710] [DEBUG] create-script - Generating a random wallet with 3 accounts...
[2023-06-27T22:22:35.851] [DEBUG] create-script - Your seed phrase is: never gonna give you up never gonna lett you down never gonna run
[2023-06-27T22:22:35.888] [DEBUG] create-script - Account 0 details:
 Public Address: 0x6b4f2ca443abd97e5866257b4ee305a9bb31270e
 Private Key: 0x6f024c51ca5d0b6568919e134353aaf1398ff090c92f6173f5ce0315fa266b93
[2023-06-27T22:22:35.920] [DEBUG] create-script - Account 1 details:
 Public Address: 0x14340f5034f948d6c87660509eade45761440356
 Private Key: 0x795a84197ee01b9d50b40889bc5689e930a8839db3d43010e887ddeee643ccdc
[2023-06-27T22:22:35.940] [DEBUG] create-script - Account 2 details:
 Public Address: 0x9939f51ac0d9195cebf424dbf2df73b58c5b24c9
 Private Key: 0x86cd9fbf8665526fa135df281810af38a356c1867dda5e4b01309ee3a9e0d56d
tbb@tbb:~/git/tbb/wallet>
```

This will give you the public address and the private key of as many accounts as you defined in the [`.config`](#script-config) file.

### Calculate account details from a mnemonic

Use this script in case you already have generated your sed phrase and you want to calculate its related private keys or public addresses.

1. Copy the env filefrom the `/` folder and change its name to .env.

2. Replace the `your_seed_goes_here` text with the seed phrase you want to generate accounts for.

3. Encrypt the file as recommended in [secure your .env file](#secure-your-environment)

4. Run the following command: `tbb@tbb:~/git/tbb/wallet> npm run restore <YOUR_PASSWORD>` like in the example below:

```sh
tbb@tbb:~/git/tbb/wallet> npm run restore MY_PASSWORD

> wallet@1.0.0 restore
> node restore.js MY_PASSWORD

[2023-06-27T22:37:59.248] [DEBUG] restore-script - loading configuration.
[2023-06-27T22:37:59.253] [DEBUG] restore-script - loading secure environment.
[2023-06-27T22:37:59.258] [DEBUG] restore-script - Your seed phrase is: never gonna give you up never gonna lett you down never gonna run
[2023-06-27T22:37:59.258] [DEBUG] restore-script - Restoring 3 accounts...
[2023-06-27T22:37:59.560] [DEBUG] restore-script - Account 0 details:
 Public Address: 0x6b4f2ca443abd97e5866257b4ee305a9bb31270e
 Private Key: 0x6f024c51ca5d0b6568919e134353aaf1398ff090c92f6173f5ce0315fa266b93
[2023-06-27T22:22:35.920] [DEBUG] create-script - Account 1 details:
 Public Address: 0x14340f5034f948d6c87660509eade45761440356
 Private Key: 0x795a84197ee01b9d50b40889bc5689e930a8839db3d43010e887ddeee643ccdc
[2023-06-27T22:22:35.940] [DEBUG] create-script - Account 2 details:
 Public Address: 0x9939f51ac0d9195cebf424dbf2df73b58c5b24c9
 Private Key: 0x86cd9fbf8665526fa135df281810af38a356c1867dda5e4b01309ee3a9e0d56d
tbb@tbb:~/git/tbb/wallet> 
```

This will give you the public address and the private key of as many accounts as you defined in the [`.config`](#script-config) file.

### script config

The only required configuration is the number of accounts you want the scripts to handle. This is configured in the .config file made available within the repo.

If you want to get, for instance, 4 accounts of that seed, then just replace 3 by 4 as the code below in `.config` file.

```conf
NUMBER_OF_ACCOUNTS=3 // number of accounts to restore
```

## secure your environment  

The current project relies on an environment file to access `sensible data` like APY KEYS .

Hence it is advised to develop following some good practises like distinguishing between prod and deveopment KEYS.

As an additional measure, the code provided in this example runs using an encrypted version of the well-known `dot-env` implementation to encrypt your `.env` file and increase security.

In order to encrypt your .env file (use the env file provided as template), proceed as follow: 

1. ensure you have installed the project dependencies as per [How to run this](#howto-run-this).  

2. copy `env` as `.env` and complete the required fields.  

3. execute `npm run generate-env YOUR_PASSWORD`. 

```sh  
npm run generate-env YOUR_PASSWORD

> wallet@1.0.0 generate-env  
> secure-env .env -s YOUR_PASSWORD  

Secure-env :  INFO The Environment file ".env" has been encrypted to ".env.enc".  
Secure-env :  WARNING Make sure to delete ".env" for production use.  
```  

4. Remember to **delete** your original *.env* file when deploying on PRODUCTION environments. :)  

## Folder contents

```sh
tbb@tbb:~/git/tbb/wallet> tree -a ./
./
├── utils
│   └── secureEnv.js
├── .config
├── .gitignore
├── create.js
├── env
├── package.json
├── README.md
└── restore.js

1 directory, 7 files
tbb@tbb:~/git/tbb/wallet>
```