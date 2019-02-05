var Tx = require("ethereumjs-tx");
const Web3 = require("web3");
const web3 = new Web3(
  "https://ropsten.infura.io/v3/f1cac29116bc4eaabe6433584e8b0fe6"
);

const account1 = "0xcDb8AEFD4B2114421dcffAA14aAf2038CF43A2Db";
const account2 = "0x3FDB025d25A027BB3b8FD68502Ea1f89c0850B5a";

const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, "hex");
const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2, "hex");

const contractAddress = "0xC9439a58eAEcd87635b6B8c0080625cacA01cfD9";
const contractABI = []; // not know how to get drapptoken??
var contract = new web3.eth.Contract(contractABI, contractAddress);
const data = contract.methods.transfer(account2, 1000).encodeABI();

// web3.eth.getBalance(account1, (err, bal) => {
//   console.log("account 1 balance: ", web3.utils.fromWei(bal, "ether"));
// });
// web3.eth.getBalance(account2, (err, bal) => {
//   console.log("account 2 balance: ", web3.utils.fromWei(bal, "ether"));
// });

web3.eth.getTransactionCount(account1, (err, txCount) => {
  // Create transaction object
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(800000),
    gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
    to: contractAddress,
    data: data
  };

  // Sign the transaction
  const tx = new Tx(txObject);
  tx.sign(privateKey1);

  const serializedTransaction = tx.serialize();
  const raw = "0x" + serializedTransaction.toString("hex");

  // Broadcast the transaction
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log("err: ", err, "txHash: ", txHash);
  });
});
