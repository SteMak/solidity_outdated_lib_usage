require("@nomicfoundation/hardhat-toolbox")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    // Providing several compilers for different project parts
    compilers: [
      {
        version: "0.7.5",
      },
      {
        version: "0.8.17",
      },
    ],
  },
}
