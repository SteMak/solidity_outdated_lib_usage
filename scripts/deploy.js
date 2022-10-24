const hardhat = require("hardhat")

async function deploy_and_link() {
  // Get factory of <OutdatedLib | WrappedLib> which the contract need to be linked
  const LinkedLibFactory = await hardhat.ethers.getContractFactory("WrappedLib")
  // Deploy instance of <OutdatedLib | WrappedLib>
  const LinkedLibInstance = await LinkedLibFactory.deploy()

  // Get factory of target contract linking used mockup to the lib
  const ContractFactory = await hardhat.ethers.getContractFactory("Target", {
    libraries: {
      WrappedLibMockup: LinkedLibInstance.address,
    },
  })
  // Deploy instance of target contract
  const ContractInstance = await ContractFactory.deploy()

  // Simple health check
  const result = await ContractInstance.getDivisablePowerOf2(25 * 2 ** 3 * 7)
  if (result == 3) {
    console.log("Deployed successfuly")
  } else {
    console.log("Deployed with an error")
  }

  // Return healthy target contract instance
  return ContractInstance
}

deploy_and_link().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

module.exports = { deploy_and_link }
