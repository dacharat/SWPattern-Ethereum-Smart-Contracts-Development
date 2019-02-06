var Tx = require("ethereumjs-tx");
const Web3 = require("web3");
const web3 = new Web3(
  "https://ropsten.infura.io/v3/f1cac29116bc4eaabe6433584e8b0fe6"
);

const account1 = "0xcDb8AEFD4B2114421dcffAA14aAf2038CF43A2Db";
const account2 = "0x3FDB025d25A027BB3b8FD68502Ea1f89c0850B5a";

const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, "hex");
const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2, "hex");

const contractAddress = "0x5f5Fd4764Da8Ae81d133B8A4e5B20981d6A0376e";
const contractABI = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_spender", type: "address" },
      { name: "_value", type: "uint256" }
    ],
    name: "approve",
    outputs: [{ name: "success", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_from", type: "address" },
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" }
    ],
    name: "transferFrom",
    outputs: [{ name: "success", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "standard",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" }
    ],
    name: "transfer",
    outputs: [{ name: "success", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }, { name: "", type: "address" }],
    name: "allowance",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ name: "_initialSupply", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_from", type: "address" },
      { indexed: true, name: "_to", type: "address" },
      { indexed: false, name: "_value", type: "uint256" }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_owner", type: "address" },
      { indexed: true, name: "_spender", type: "address" },
      { indexed: false, name: "_value", type: "uint256" }
    ],
    name: "Approval",
    type: "event"
  }
];
const contract = new web3.eth.Contract(contractABI, contractAddress);
const data = contract.methods.transfer(account2, 1000).encodeABI();

// web3.eth.getBalance(account1, (err, bal) => {
//   console.log("account 1 balance: ", web3.utils.fromWei(bal, "ether"));
// });
// web3.eth.getBalance(account2, (err, bal) => {
//   console.log("account 2 balance: ", web3.utils.fromWei(bal, "ether"));
// });

// console.log(data);

// web3.eth.getTransactionCount(account1, (err, txCount) => {
//   // Create transaction object
//   const txObject = {
//     nonce: web3.utils.toHex(txCount),
//     gasLimit: web3.utils.toHex(800000),
//     gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
//     to: contractAddress,
//     data: data
//   };

//   // Sign the transaction
//   const tx = new Tx(txObject);
//   tx.sign(privateKey1);

//   const serializedTx = tx.serialize();
//   const raw = "0x" + serializedTx.toString("hex");

//   // Broadcast the transaction
//   web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//     console.log("err: ", err, "txHash: ", txHash);
//   });
// });

contract.methods.balanceOf(account2).call((err, balance) => {
  console.log({ err, balance });
});
