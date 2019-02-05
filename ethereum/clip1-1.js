var Web3 = require("web3");
var url = "https://mainnet.infura.io/v3/f1cac29116bc4eaabe6433584e8b0fe6";
var web3 = new Web3(url);
// console.log(web3);
var address = "0x53d284357ec70cE289D6D64134DfAc8E511c8a3D";
web3.eth
  .getBalance(address, (err, bal) => {
    balance = bal;
  })
  .then(() => {
    var formatEther = web3.utils.fromWei(balance, "ether");
    console.log(formatEther);
    var formatGwei = web3.utils.fromWei(balance, "gwei");
    console.log(formatGwei);
  });
var account = web3.eth.accounts.create();
console.log(account);
