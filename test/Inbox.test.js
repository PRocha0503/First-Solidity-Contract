// Imports
const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

// exp create a new instance of web 3, the argument is the etherum network we are connecting to
const web3 = new Web3(ganache.provider());
