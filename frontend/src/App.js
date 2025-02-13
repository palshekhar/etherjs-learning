import { useEffect } from 'react';
import './App.css';
const { ethers } = require("ethers");

function App() {
  useEffect(() => {
    // Declare an async function inside useEffect
    const initContract = async () => {
      // Check if window.ethereum is available (MetaMask or any other wallet)
      if (typeof window.ethereum === 'undefined') {
        console.error("MetaMask or another Ethereum wallet is required!");
        return;
      }

      try {
        const walletAddress = "0x51ed80458a41573a51839fd8713df3d80aaf97e7"; // Contract address
        const walletAbi = [
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
        ];

        // Set up provider and signer
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []); // Request wallet access
        const signer="99080b0bbb7a6bf1276ccfd9a72d1840d90c3deba6448b6a19b670c7834817cf";// Get signer (user's wallet)

        // Create contract instance
        const contract = new ethers.Contract(walletAddress, walletAbi, signer);

        // Call contract method (setvalue in this case)
        const tx= await contract.sendEthtocontract({value:ethers.parseEther("0.001")});
        
        // Optionally, wait for the transaction to be mined (you can use tx.wait() for that)
        await tx.wait();
        console.log("Transaction confirmed!");
      } catch (error) {
        console.error("Error interacting with contract:", error);
      }
    };

    initContract(); // Call the async function inside useEffect

  }, []); // Empty dependency array means this will run once when the component is mounted

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
