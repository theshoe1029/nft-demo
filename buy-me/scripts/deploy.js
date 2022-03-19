async function main() {
    // Grab the contract factory 
    const BuyMe = await ethers.getContractFactory("BuyMe");

    // Start deployment, returning a promise that resolves to a contract object
    const buyMe = await BuyMe.deploy(); // Instance of the contract 
    console.log("Contract deployed to address:", buyMe.address);
}
 
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });