// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @notice Importing mockup with compatible pragma
import "./libraries/WrappedLibMockup.sol";

/// @notice Simple example contract that uses lib with outdated pragma
contract Target {
    /// @notice Calculate maximum power of 2 (the power itself) which the number is divizable
    /// @param num The number which factors are studied
    function getDivisablePowerOf2(uint256 num) external pure returns (uint8 i) {
        /// @notice Call to mockup which is replaced with implementation after linking
        num = WrappedLibMockup.twos(num);

        for (i; num > 1; i++) {
            num /= 2;
        }
    }
}
