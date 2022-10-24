# Usage of a library with outdated pragma

Ethereum allows code reuse from the libraries with external and public functions.
Reusing already deployed libraries is highly recommended, not redeploying the same ones.

The development environment should be configured correctly with the proper deployment script, which links the library import statements to the already deployed library contract entities.


### How to use libraries developed for old pragma without modification?

The main idea is to create a mockup of the lib using the current pragma and then replace it with the real lib via linking during deployment.

To use an old library with an outdated pragma version, it is recommended to follow this approach:

1. Create a wrapper library contract (using outdated pragma) with external functions instead of internal (if needed)

    ```sol
    pragma solidity outdated;

    import "OutdatedLibPath";

    library WrappedLib {
        function functionName(params) external pure? returns (return_types) {
            return OutdatedLib.functionName(params);
        }

        ...
    }
    ```
    [Sample in the project](https://github.com/SteMak/solidity_outdated_lib_usage/blob/master/contracts/libraries/WrappedLib.sol)

2. Create a mock library contract with the same function signature as in the wrapper library but with an upgraded solidity version

    ```sol
    pragma solidity current;

    library WrappedLibMockup {
        function functionName(param_types) external pure? returns (return_types) {}

        ...
    }
    ```
    [Sample in the project](https://github.com/SteMak/solidity_outdated_lib_usage/blob/master/contracts/libraries/WrappedLibMockup.sol)

3. Implement target contract using mockup library

    ```
    pragma solidity current;

    import "WrappedLibMockupPath";

    contract Target {
        function functionNameContract(params) public? pure? returns (return_types) {
            ...

            results = WrappedLibMockup.functionName(lib_params);

            ...
        }

        ...
    }
    ```
    [Sample in the project](https://github.com/SteMak/solidity_outdated_lib_usage/blob/master/contracts/Target.sol)

4. Replace the Mock reference in the contract library with the deployed library contract address in the environment configuration file

    ```
    const LinkedLibFactory = await hardhat.ethers.getContractFactory("WrappedLib")
    const LinkedLibInstance = await LinkedLibFactory.deploy()

    const ContractFactory = await hardhat.ethers.getContractFactory("Target", {
      libraries: {
        WrappedLibMockup: LinkedLibInstance.address,
      },
    })
    const ContractInstance = await ContractFactory.deploy()
    ```
    [Sample in the project](https://github.com/SteMak/solidity_outdated_lib_usage/blob/master/scripts/deploy.js)
    