// Rinkeby:
// Busd 0x60D4f85E9C78e01c3378fc15cbd222009EC9A4Dd
// TokenX 0x7eC6d1aEB55AE52364B0F6Ff47Ef4fe109eeC6eE
// LpTokenX 0x7eC6d1aEB55AE52364B0F6Ff47Ef4fe109eeC6eE
// Presale 0x268F4656eF2C41E8EA98f0b7a773Fc21519E4410
// PresaleFactory 0x7849da16A03b49250b0E466968b97a05dAb885d3
// Locker 0x72dC9cBc672e3DE69DECdE02cFc41555f70E9976
//=========================
import Web3 from 'web3';

export const busdAddress = '0x60D4f85E9C78e01c3378fc15cbd222009EC9A4Dd';
export const busdAbi = JSON.parse(
  '[{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint256","name":"_supply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xdd62ed3e"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x313ce567"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xa457c2d7"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x39509351"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95d89b41"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x18160ddd"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xa9059cbb"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[],"name":"get_1000_Coins","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x8d67e612"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"get_1000_coins_at_address","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xdb74a38e"}]'
);
export const getContractBusd = (web3, address = busdAddress) =>
  new web3.eth.Contract(busdAbi, address);

export const tokenXAddress = '0x7eC6d1aEB55AE52364B0F6Ff47Ef4fe109eeC6eE';
export const tokenXAbi = JSON.parse(
  '[{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint256","name":"_supply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xdd62ed3e"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x313ce567"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xa457c2d7"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x39509351"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95d89b41"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x18160ddd"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xa9059cbb"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[],"name":"get_1000_Coins","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x8d67e612"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"get_1000_coins_at_address","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xdb74a38e"}]'
);
export const getContractTokenX = (web3, address = tokenXAddress) =>
  new web3.eth.Contract(tokenXAbi, address);

export const lpTokenXAddress = '0x7eC6d1aEB55AE52364B0F6Ff47Ef4fe109eeC6eE';
export const lpTokenXAbi = JSON.parse(
  '[{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint256","name":"_supply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xdd62ed3e"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x313ce567"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xa457c2d7"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x39509351"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95d89b41"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x18160ddd"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xa9059cbb"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[],"name":"get_1000_Coins","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x8d67e612"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"get_1000_coins_at_address","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xdb74a38e"}]'
);
export const getContractLpTokenX = (web3, address = lpTokenXAddress) =>
  new web3.eth.Contract(lpTokenXAbi, address);

export const presaleAddress = '0x268F4656eF2C41E8EA98f0b7a773Fc21519E4410';
export const presaleAbi = JSON.parse(
  '[{"inputs":[{"internalType":"contract IERC20","name":"_tokenX","type":"address"},{"internalType":"contract IERC20","name":"_lpTokenX","type":"address"},{"internalType":"contract IERC20","name":"_busd","type":"address"},{"internalType":"uint256","name":"_rate","type":"uint256"},{"internalType":"address","name":"_presaleEarningWallet","type":"address"},{"internalType":"address","name":"_parentCompany","type":"address"},{"internalType":"bool","name":"_onlyWhitelistedAllowed","type":"bool"},{"internalType":"uint256","name":"_amountTokenXToBuyTokenX","type":"uint256"},{"internalType":"uint256","name":"_unlockAtTime","type":"uint256"},{"internalType":"address[]","name":"_whitelistAddresses","type":"address[]"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"anonymous":false,"inputs":[],"name":"PresaleClosed","type":"event","signature":"0x178883df77bd1da8fe0f452c81786ec2daed0fe6bf06928f621f32239ff9e3fc"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_newRate","type":"uint256"}],"name":"RateChanged","type":"event","signature":"0x595a30f13a69b616c4d568e2a2b7875fdfe86e4300a049953c76ee278f8f3f10"},{"inputs":[],"name":"amountTokenXToBuyTokenX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x87b20dd8"},{"inputs":[],"name":"busd","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x3ca5b234"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xc45a0155"},{"inputs":[],"name":"lpTokenX","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xebebb2d1"},{"inputs":[],"name":"lpTokenXLocker","outputs":[{"internalType":"contract Locker","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xd30f5d44"},{"inputs":[],"name":"onlyWhitelistedAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x079bb6b0"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[],"name":"parentCompany","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x669e7582"},{"inputs":[],"name":"presaleAppliedForClosing","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa06df8dd"},{"inputs":[],"name":"presaleClosedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x96bfd251"},{"inputs":[],"name":"presaleEarningWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x69f80786"},{"inputs":[],"name":"presaleIsApproved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x7e9dfd8f"},{"inputs":[],"name":"presaleIsRejected","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x7f844387"},{"inputs":[],"name":"rate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x2c4e722e"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[],"name":"tier","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x16f4d022"},{"inputs":[],"name":"tokenX","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x16dc165b"},{"inputs":[],"name":"tokenXLocker","outputs":[{"internalType":"contract Locker","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xdbe929d4"},{"inputs":[],"name":"tokenXSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xd44d4d1f"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[{"internalType":"uint256","name":"_tokens","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x3610724e"},{"inputs":[{"internalType":"address[]","name":"_addresses","type":"address[]"},{"internalType":"bool","name":"_approve","type":"bool"}],"name":"ownerFunction_editWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x19f004d6"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"onlyOwnerFunction_setRate","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xdffb98e5"},{"inputs":[{"internalType":"uint8","name":"_months","type":"uint8"}],"name":"onlyOwnerFunction_closePresale","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x38742706"},{"inputs":[{"internalType":"bool","name":"_presaleIsApproved","type":"bool"}],"name":"onlyParentCompanyFunction_editPresaleIsApproved","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xc6cae69d"},{"inputs":[{"internalType":"bool","name":"_presaleIsRejected","type":"bool"}],"name":"onlyParentCompanyFunction_editPresaleIsRejected","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x3211aab6"},{"inputs":[{"internalType":"uint8","name":"_tier","type":"uint8"}],"name":"onlyParentCompanyFunction_editTier","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf9df691d"},{"inputs":[],"name":"getPresaleDetails","outputs":[{"internalType":"address[]","name":"","type":"address[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"bool[]","name":"","type":"bool[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4729376b"}]'
);
export const getContractPresale = (web3, address = presaleAddress) =>
  new web3.eth.Contract(presaleAbi, address);

export const presaleFactoryAddress =
  '0x7849da16A03b49250b0E466968b97a05dAb885d3';
export const presaleFactoryAbi = JSON.parse(
  '[{"inputs":[{"internalType":"address","name":"_parentCompany","type":"address"},{"internalType":"contract IERC20","name":"_busd","type":"address"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"belongsToThisFactory","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x3dddf102"},{"inputs":[],"name":"busd","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x3ca5b234"},{"inputs":[],"name":"lastPresaleIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x5f92cd3c"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"name":"presaleOf","outputs":[{"internalType":"contract Presale","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x75cb0220"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"presales","outputs":[{"internalType":"contract Presale","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x7dbfb36d"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[],"name":"test","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf8a8fd6d"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[{"internalType":"bool","name":"ok","type":"bool"}],"name":"setTest","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x6582ebcf"},{"inputs":[{"internalType":"contract IERC20","name":"_tokenX","type":"address"},{"internalType":"contract IERC20","name":"_lpTokenX","type":"address"},{"internalType":"uint256","name":"_rate","type":"uint256"},{"internalType":"uint256","name":"_tokenXToLock","type":"uint256"},{"internalType":"uint256","name":"_lpTokenXToLock","type":"uint256"},{"internalType":"uint256","name":"_tokenXToSell","type":"uint256"},{"internalType":"uint256","name":"_unlockAtTime","type":"uint256"},{"internalType":"uint256","name":"_amountTokenXToBuyTokenX","type":"uint256"},{"internalType":"address","name":"_presaleEarningWallet","type":"address"},{"internalType":"bool","name":"_onlyWhitelistedAllowed","type":"bool"},{"internalType":"address[]","name":"_whitelistAddresses","type":"address[]"}],"name":"createERC20Presale","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xe76f88ae"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_amountToFetch","type":"uint256"}],"name":"getPresalesAppliedForClosing","outputs":[{"internalType":"contract Presale[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x73490944"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_amountToFetch","type":"uint256"},{"internalType":"uint256","name":"_tier","type":"uint256"}],"name":"getPresales","outputs":[{"internalType":"contract Presale[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x0aa29dbe"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_amountToFetch","type":"uint256"},{"internalType":"address","name":"_owner","type":"address"}],"name":"getPresales","outputs":[{"internalType":"contract Presale[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x45668359"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_amountToFetch","type":"uint256"},{"internalType":"bool","name":"_approvedValue","type":"bool"}],"name":"getPresales","outputs":[{"internalType":"contract Presale[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x7a468820"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_amountToFetch","type":"uint256"}],"name":"getPresales","outputs":[{"internalType":"contract Presale[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xd651a1a3"},{"inputs":[{"internalType":"address","name":"_presale","type":"address"}],"name":"getPresaleDetails","outputs":[{"internalType":"address[]","name":"","type":"address[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"bool[]","name":"","type":"bool[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x211b5616"}]'
);
export const getContractPresaleFactory = (
  web3 = new Web3(
    'https://rinkeby.infura.io/v3/3da1c863472e43d989856450d4e6889d'
  ),
  address = presaleFactoryAddress
) => new web3.eth.Contract(presaleFactoryAbi, address);

export const lockerAddress = '0x72dC9cBc672e3DE69DECdE02cFc41555f70E9976';
export const lockerAbi = JSON.parse(
  '[{"inputs":[{"internalType":"contract IERC20","name":"_tokenX","type":"address"},{"internalType":"address","name":"_walletOwner","type":"address"},{"internalType":"uint256","name":"_unlockTokensAtTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_token","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"UnlockedTokens","type":"event","signature":"0xaf08a4db36432bb5cbbfdfcf5af1040246483dc0dae8a9616cc79816c432fee9"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[],"name":"tokenX","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x16dc165b"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[],"name":"unlockTokensAtTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8bfea7e0"},{"inputs":[],"name":"unlockTokensRequestAccepted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf1ed6b15"},{"inputs":[],"name":"unlockTokensRequestMade","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x73ef73a3"},{"inputs":[],"name":"walletOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x1ae879e8"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"lockTokens","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x6e27d889"},{"inputs":[],"name":"makeUnlockTokensRequest","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x65eb73c6"},{"inputs":[],"name":"acceptUnlockTokensRequest","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xac3921b1"},{"inputs":[],"name":"unlockTokens","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf968f493"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xb69ef8a8"}]'
);
export const getContractLocker = (web3, address = lockerAddress) =>
  new web3.eth.Contract(lockerAbi, address);
