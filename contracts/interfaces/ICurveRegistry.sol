// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface ICurveRegistry {
    function get_coins(address arg0)
        external
        view
        returns (address[8] memory);

    function get_underlying_coins(address arg0)
        external
        view
        returns (address[8] memory);
}