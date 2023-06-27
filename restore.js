//initialise logging
const log4js = require("log4js");
const log = log4js.getLogger("restore-script");

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

  // Open the encrypted environment file
  const secEnv = require('./utils/secureEnv.js');
  const GENERATOR_ADDRESS = process.argv.slice(2).toString(); //Second parameter used as GeneratorAddress.

  log.debug('loading secure environment.');
  global.env = secEnv.secureEnvironment(GENERATOR_ADDRESS);

  const mnemonic = global.env.SEED;
  const numberOfAccounts = config.NUMBER_OF_ACCOUNTS;

  log.debug(`Your seed phrase is: ${mnemonic}`);

  log.debug(`Restoring ${numberOfAccounts} accounts...`);

  const { ethers } = require("ethers");

  // Print out information for each account.
  for (let i = 0; i < numberOfAccounts; i++) {

    const path = "m/44'/60'/0'/0/" + i;
    const wallet = ethers.Wallet.fromMnemonic(mnemonic, path);

    log.debug(`Account ${i} details:\r\n Public Address: ${wallet.address}\r\n Private Key: ${wallet.privateKey}`);

  }

} catch (e) {

  log.error(e)

}
