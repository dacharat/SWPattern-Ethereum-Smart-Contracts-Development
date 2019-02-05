var Web3 = require("web3");
var web3 = new Web3("http://127.0.0.1:7545");
web3.eth
  .getBalance("0x256eb2655fe65B782F576DD027D76DC031929f1a", (err, wei) => {
    balance = web3.utils.fromWei(wei, "ether");
  })
  .then(() => console.log(balance));
