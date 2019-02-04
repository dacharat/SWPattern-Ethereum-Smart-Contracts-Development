// #1 First run node
// var Web3 = require("web3");
// var url = "https://mainnet.infura.io/v3/f1cac29116bc4eaabe6433584e8b0fe6";
// var web3 = new Web3(url);
// // console.log(web3);
// var address = "0x53d284357ec70cE289D6D64134DfAc8E511c8a3D";
// web3.eth
//   .getBalance(address, (err, bal) => {
//     balance = bal;
//   })
//   .then(() => {
//     var formatEther = web3.utils.fromWei(balance, "ether");
//     console.log(formatEther);
//     var formatGwei = web3.utils.fromWei(balance, "gwei");
//     console.log(formatGwei);
//   });
// var account = web3.eth.accounts.create();
// console.log(account);

// Second run node
// var Web3 = require("web3");
// var web3 = new Web3("http://127.0.0.1:7545");
// web3.eth
//   .getBalance("0x256eb2655fe65B782F576DD027D76DC031929f1a", (err, wei) => {
//     balance = web3.utils.fromWei(wei, "ether");
//   })
//   .then(() => console.log(balance));

// #2 First run node
// var Web3 = require("web3");
// var url = "https://mainnet.infura.io/v3/f1cac29116bc4eaabe6433584e8b0fe6";
// var web3 = new Web3(url);
// var abi = [
//   {
//     constant: true,
//     inputs: [],
//     name: "mintingFinished",
//     outputs: [{ name: "", type: "bool" }],
//     payable: false,
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "name",
//     outputs: [{ name: "", type: "string" }],
//     payable: false,
//     type: "function"
//   },
//   {
//     constant: false,
//     inputs: [
//       { name: "_spender", type: "address" },
//       { name: "_value", type: "uint256" }
//     ],
//     name: "approve",
//     outputs: [],
//     payable: false,
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "totalSupply",
//     outputs: [{ name: "", type: "uint256" }],
//     payable: false,
//     type: "function"
//   },
//   {
//     constant: false,
//     inputs: [
//       { name: "_from", type: "address" },
//       { name: "_to", type: "address" },
//       { name: "_value", type: "uint256" }
//     ],
//     name: "transferFrom",
//     outputs: [],
//     payable: false,
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "decimals",
//     outputs: [{ name: "", type: "uint256" }],
//     payable: false,
//     type: "function"
//   },
//   {
//     constant: false,
//     inputs: [],
//     name: "unpause",
//     outputs: [{ name: "", type: "bool" }],
//     payable: false,
//     type: "function"
//   },
//   {
//     constant: false,
//     inputs: [
//       { name: "_to", type: "address" },
//       { name: "_amount", type: "uint256" }
//     ],
//     name: "mint",
//     outputs: [{ name: "", type: "bool" }],
//     payable: false,
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "paused",
//     outputs: [{ name: "", type: "bool" }],
//     payable: false,
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [{ name: "_owner", type: "address" }],
//     name: "balanceOf",
//     outputs: [{ name: "balance", type: "uint256" }],
//     payable: false,
//     type: "function"
//   },
//   {
//     constant: false,
//     inputs: [],
//     name: "finishMinting",
//     outputs: [{ name: "", type: "bool" }],
//     payable: false,
//     type: "function"
//   },
//   {
//     constant: false,
//     inputs: [],
//     name: "pause",
//     outputs: [{ name: "", type: "bool" }],
//     payable: false,
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "owner",
//     outputs: [{ name: "", type: "address" }],
//     payable: false,
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "symbol",
//     outputs: [{ name: "", type: "string" }],
//     payable: false,
//     type: "function"
//   },
//   {
//     constant: false,
//     inputs: [
//       { name: "_to", type: "address" },
//       { name: "_value", type: "uint256" }
//     ],
//     name: "transfer",
//     outputs: [],
//     payable: false,
//     type: "function"
//   },
//   {
//     constant: false,
//     inputs: [
//       { name: "_to", type: "address" },
//       { name: "_amount", type: "uint256" },
//       { name: "_releaseTime", type: "uint256" }
//     ],
//     name: "mintTimelocked",
//     outputs: [{ name: "", type: "address" }],
//     payable: false,
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [
//       { name: "_owner", type: "address" },
//       { name: "_spender", type: "address" }
//     ],
//     name: "allowance",
//     outputs: [{ name: "remaining", type: "uint256" }],
//     payable: false,
//     type: "function"
//   },
//   {
//     constant: false,
//     inputs: [{ name: "newOwner", type: "address" }],
//     name: "transferOwnership",
//     outputs: [],
//     payable: false,
//     type: "function"
//   },
//   {
//     anonymous: false,
//     inputs: [
//       { indexed: true, name: "to", type: "address" },
//       { indexed: false, name: "value", type: "uint256" }
//     ],
//     name: "Mint",
//     type: "event"
//   },
//   { anonymous: false, inputs: [], name: "MintFinished", type: "event" },
//   { anonymous: false, inputs: [], name: "Pause", type: "event" },
//   { anonymous: false, inputs: [], name: "Unpause", type: "event" },
//   {
//     anonymous: false,
//     inputs: [
//       { indexed: true, name: "owner", type: "address" },
//       { indexed: true, name: "spender", type: "address" },
//       { indexed: false, name: "value", type: "uint256" }
//     ],
//     name: "Approval",
//     type: "event"
//   },
//   {
//     anonymous: false,
//     inputs: [
//       { indexed: true, name: "from", type: "address" },
//       { indexed: true, name: "to", type: "address" },
//       { indexed: false, name: "value", type: "uint256" }
//     ],
//     name: "Transfer",
//     type: "event"
//   }
// ];
// console.log(abi);
// var contractAddress = "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07";
// var contract = new web3.eth.Contract(abi, contractAddress);
// console.log(contract);
// contract.methods.name().call((err, result) => console.log(result));
// contract.methods.symbol().call((err, result) => console.log(result));
// contract.methods.totalSupply().call((err, result) => console.log(result));
// contract.methods.mintingFinished().call((err, result) => console.log(result));

// #3 First run node
// const Web3 = require("web3");
// const web3 = new Web3("http://127.0.0.1:7545");
// const account1 = "0x256eb2655fe65B782F576DD027D76DC031929f1a";
// const account2 = "0x09e2D4699aaE0f7A3c6B6ed6135fC1c66cC1a970";
// web3.eth.getBalance(account1, (err, result) => {
//   console.log(result);
// });
// web3.eth
//   .sendTransaction({
//     from: account1,
//     to: account2,
//     value: web3.utils.toWei("1", "ether")
//   })
//   .then(() => {
//     web3.eth.getBalance(account1, (err, result) => {
//       console.log(result);
//     });
//     web3.eth.getBalance(account2, (err, result) => {
//       console.log(result);
//     });
//   });