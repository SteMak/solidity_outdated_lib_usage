# Use library with outdated pragma

Ethereum allows to reuse code from the libraries with external and public functions.
It is highly recommened to reused already deployed libraries and do not redeploy the same libraries.
The development environment should be configured correctly with the proper deployment script, which links the libraries import statements to the already deployed library contract entities.

To use an old libraries with the pragma version constrains it is recommended to follow this approach:

1) Create a wrapper library contract with the external functions instead of internal (if needed).

<ADD_CODE_EXAMPLE>

2) Create a mock library contract with the same function signature as in the wrapper library, but with an upgraded solidity version

<ADD_CODE_EXAMPLE>

2) Replace the Mock reference in the contract library with the deployed library contract address in the environment configuration file

<ADD_CODE_EXAMPLE>