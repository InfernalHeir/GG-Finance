// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GGfinance is ERC20, Ownable {
    /*
     * @notice constructor of GGfinance token.
     * @param _tokenName, _tokenSymbol
     */

    constructor(string memory _tokenName, string memory _tokenSymbol)
        public
        ERC20(_tokenName, _tokenSymbol)
    {
        /*
         @notice mint  the token for total hard supply
        */
        _mint(msg.sender, 20000 * 10**18);
    }

    /*
    @notice function mint can be call by only owner
    */

    function mint(address _account, uint256 _tokensMinted) external onlyOwner {
        _mint(_account, _tokensMinted);
    }

    function burn(address _account, uint256 _burnToken) external onlyOwner {
        _burn(_account, _burnToken);
    }
}
