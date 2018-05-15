/*jslint node: true */
exports.port = null;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = false;
exports.bLight = false;
exports.bIgnoreUnpairRequests = true;


exports.storage = 'sqlite';

exports.hub = 'byteball.org/bb';
exports.deviceName = 'Merchant Demo';
exports.permanent_pairing_secret = '0000';
exports.KEYS_FILENAME = 'keys.json';

// home wallet (replace these values with the properties of your wallet that is to collect the revenue from sales)
exports.xPubKey = '';
exports.account = 0;
exports.homeDeviceAddress = '';


console.log('finished merchant conf');
