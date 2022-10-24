// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.8.0;

/// @notice import a library which supports only outdated pragma
import "./outdated/OutdatedLib.sol";

/// @notice Is needed in case of usage of internal functions of the OutdatedLib
library WrappedLib {
    /// @notice Just wrapping lib functionality to make it external
    function twos(uint256 value) external pure returns (uint256 result) {
        result = OutdatedLib.twos(value);
    }
}
