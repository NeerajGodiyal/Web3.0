
const main = async () => {
  const TransactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const transactionsContract = await TransactionsFactory.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to : " , transactionsContract.address);
};

const runMain = async () => {
  try{
    await main();
    process.exit(0);
  } catch (error ) {
    console.error(error);
    process.exit(1);
  }
};

runMain(); 