//0x51ed80458a41573a51839fd8713df3d80aaf97e7

const {ethers}=require("ethers");

const provider=new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/a9603ca396934fc0bea8b7525cc80653","sepolia");

const signer="99080b0bbb7a6bf1276ccfd9a72d1840d90c3deba6448b6a19b670c7834817cf";
const walletaddres="0x51ed80458a41573a51839fd8713df3d80aaf97e7";

const walletabi=[
	{
		"inputs": [],
		"name": "sendEthtocontract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "val",
				"type": "uint256"
			}
		],
		"name": "setvalue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addres",
				"type": "address"
			}
		],
		"name": "accountbalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractbalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "retrivevalue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


// write operations using metamask private key 

 
const contractwrite=async()=>{
    const contractaccess=new ethers.Contract(walletaddres,walletabi,signer);

    contractaccess.setvalue(10);
}





// read operations ---

const contractinteraction=async()=>{
   const walletcontract=new ethers.Contract(walletaddres,walletabi,provider);

  //  const contractname=await walletcontract.name();
  //  console.log("contract name ",contractname);

  //  const contractval=await walletcontract.retrivevalue();
  //  console.log("contract val ",contractval);
   

   const contractbalance=await walletcontract.contractbalance();
   console.log("contractbalance  ", ethers.formatEther(contractbalance));

   const accountbalance=await walletcontract.accountbalance("0x39a8338d1663690b05e8b574b61c8852d8c4e1f4");
 
   const accountbalanceinEth=ethers.formatEther(accountbalance);
   
   console.log("accountbalance  ",accountbalanceinEth);

}

contractinteraction();