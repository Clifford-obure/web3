//In

const Web3 = require("web3");
//const 
var ERC20Abi =  require('./ERC20.json');



// allows us to connect to a blockchain node minus running one
const provider = "https://polygon-mumbai.infura.io/v3/a4905e3b34cc498aa5a839bbcf49b8f2";


const web3Client = new Web3(new Web3.providers.HttpProvider(provider));
//const ethersClient = new ethers.providers.JsonRpcProvider(provider);



const tokenAddress = "0xA849a811fd4a645f264643df52fc402D7BEA160C";

const walletAddress = "0xfaA69C9003Bd4e554af9EeB5686cA39bFe0561f8";

const web3contract = new web3Client.eth.Contract(ERC20Abi.abi, tokenAddress); 
//const ethersContract = new ethers.Contract(tokenAddress, ERC20Abi.abi, ethersClient); 


async function getBalanceWeb3(){
    const result = await web3contract.methods.balanceOf(walletAddress).call();

    const format = web3Client.utils.fromWei(result);

    console.log("Web3 -" + format);
}

// async function getBalanceEthers(){
//     const result = await ethersContract.methods.balanceOf(walletAddress);

//     const format = ethers.utils.formatUnits(result, 18);

//     console.log("Ethers -" + format);
// }

getBalanceWeb3();
//getBalanceEthers();
