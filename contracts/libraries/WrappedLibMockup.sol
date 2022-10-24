// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @notice Mockup of <OutdatedLib | WrappedLib> library for current solidity version
/// In the case WrappedLib is mocked as OutdatedLib contains internal functions which could not be used outside
library WrappedLibMockup {
    function twos(uint256) external pure returns (uint256) {}
}
