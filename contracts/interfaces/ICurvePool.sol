// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface ICurvePool {
    function get_virtual_price() external view returns (uint256);

    function calc_withdraw_one_coin(uint256 _token_amount, int128 i) external returns (uint256);

    function claim_rewards() external;
}