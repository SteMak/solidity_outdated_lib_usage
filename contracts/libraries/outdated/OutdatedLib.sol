// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.8.0;

/// @notice Contains math incompatible to actual solidity version
library OutdatedLib {
    /// @notice Calculate maximum power of 2 (the 2^power value) which the number is divizable
    /// @param num The number which factors are studied
    function twos(uint256 num) internal pure returns (uint256 result) {
        /// @notice equal to (type(uint256).max - num) & num
        result = -num & num;
    }
}
