const{ethers}=require("ethers");


const provider=new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/a9603ca396934fc0bea8b7525cc80653")



const getcurrentblock= async()=>{
   const number=await provider.getBlockNumber();

   console.log("current block is ",number);
   
   const balance=await provider.getBalance("0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5");

   const balances=await ethers.formatEther(balance);

   console.log("balance os unknow is ",balances);
   
}

getcurrentblock();















