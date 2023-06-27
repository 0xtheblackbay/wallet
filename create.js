//initialise logging
const log4js = require("log4js");
const log = log4js.getLogger("create-script");

// Initialize log
log4js.configure({
  appenders: {
    console: { type: "console" },
  },
  categories: {
    default: { appenders: ["console"], level: "debug" },
  }
});

try {

  // Read config file
  const fs = require('fs-extra');
  var toml = require('toml');
  const filepath = './.config';

  log.debug('loading configuration.');
  const configFile = fs.readFileSync(filepath, 'utf8');
  config = toml.parse(configFile);

  // Generate wallet with random
  const { ethers, Wallet } = require("ethers");
  const numberOfAccounts = config.NUMBER_OF_ACCOUNTS; // number of accounts to create
  log.debug(`Generating a random wallet with ${numberOfAccounts} accounts...`);
  const mnemonic = Wallet.createRandom().mnemonic.phrase;

  log.debug("Your seed phrase is : " + mnemonic);

  // Print out information for each account.
  for (let i = 0; i < numberOfAccounts; i++) {

    const path = "m/44'/60'/0'/0/" + i;
    const wallet = ethers.Wallet.fromMnemonic(mnemonic, path);

    log.debug(`Account ${i} details:\r\n Public Address: ${wallet.address}\r\n Private Key: ${wallet.privateKey}`);

  }

} catch (e) {

  log.error(e)

}