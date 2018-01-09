/*jslint node: true */
const check_daemon = require('byteballcore/check_daemon.js');

check_daemon.checkDaemonAndRestart('node merchant.js', 'node merchant.js > log');

