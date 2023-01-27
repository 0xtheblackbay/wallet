//you can use console.log() instead of debugcode to display the results
const debugCode = require("debug")("app:debug");
const { ethers, Wallet } = require("ethers");
const mnemonic = Wallet.createRandom().mnemonic.phrase;
const numberOfAccounts = 3; // number of accounts to create

debugCode("Your seed phrase is : " + mnemonic);

for (let i = 0; i < numberOfAccounts; i++) {
  const path = "m/44'/60'/0'/0/" + i;
  const wallet = ethers.Wallet.fromMnemonic(mnemonic, path);

  debugCode(
    "The public Address of account " +
      i +
      " is " +
      wallet.address +
      " and its private key is " +
      wallet.privateKey
  );
}
