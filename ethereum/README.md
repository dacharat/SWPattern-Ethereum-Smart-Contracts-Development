## clip1-1
สมัคร account เว็บ infura สร้างโปรเจค -> ก็อปendpointลงurl
เช้าเว็บ etherscan -> blockchain -> top account เลือก address มาอันนึงกอปใส่ address -> run code

## clip 1-2
โหลด ganache -> เปิดโปรแกรม -> กอป address มาอันนึงมาใส่ที่ address -> run code

## clip 2
เข้าเว็บ etherscan -> token -> ERC-20 Top tokens -> เลือก omiseGo(OMG) -> click link ตรง contract -> code -> copy contract abi มาวางที่ abi -> copy contact address มาวางที่ contractAddress -> run code

## clip 3
โหลด chrome extension ชื่อ MetaMask สร้าง account มา 2 อัน -> เปิดเว็บ infura เอา api ของ ropsten มาใช้ -> เอา address, private key ของทั้ง 2 account มาวาง -> run code 

## clip 4
เปลี่ยนแค่ address กับ ropsten api -> run code

run getTransactionCount ก่อนถึงจะได้ Txhash มา แล้วเอา Txhash มาใส่ใน contractAddress

## clip 5
เปลี่ยนแค่ address กับ ropsten api -> run code

run getTransactionCount ก่อน แล้วค่อย run balanceOf

## clip 6
กลับมาใช้ api ของ mainnet 

abi, contract address ของ OMG

เปลี่ยนเลข fromBlock เป็นไรก็ได้แต่ควรอยู่ในช่วง 7000000 to	7191892 

## clip 7
รัน getBlockNumber, getBlock, getBlockTransactionCount, getTransactionFromBlock(hash ได้จาก `web3.eth.getBlock("latest").then(b => console.log(b.hash))`)

## clip 8
run code
