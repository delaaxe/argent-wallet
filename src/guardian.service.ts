import Web3 from "web3";
import abi from "./guardian.abi.json";

const provider = "https://mainnet.infura.io/v3/7d0d81d0919f4f05b9ab6634be01ee73";
export const web3 = new Web3(Web3.givenProvider || provider);
const contractAddress = "0xFF5A7299ff6f0fbAad9b38906b77d08c0FBdc9A7";
const contract = new web3.eth.Contract(abi as any, contractAddress);

export const getBalance = async (address: string) => {
  const balance = await web3.eth.getBalance(address);
  return web3.utils.fromWei(balance);
};

export const getGuardianCount = async (address: string) => {
  return await contract.methods.guardianCount(address).call({from: address})
};