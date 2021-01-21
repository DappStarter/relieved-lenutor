require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remember million hover produce bridge total'; 
let testAccounts = [
"0x24dd7555a26197d1364fc1162800bff12231e655d1a27fac9a310e0ae158efa6",
"0x5e59e0587af9240b5aaef8eed5cea8b3fd388d8f09d709435b4cd09a9ab056e6",
"0xc83ef057c77fdd187cda3c0ab28ab276a34f9fe18aa206e33e77a7cf6ac21473",
"0xd136c2a613d76b03fb2e9c670cd2dd5e78af7f0aed21abd42417fa53b50b234b",
"0xb4ceebabf3d1ce842f0b51876aa97985c2019ab941b5fe9a90d0aee0d6617294",
"0x960ed3a3f68495e638f180034f1fcf3eb21597de1eb47afc767321b609a870ff",
"0xac64712f77d7220312dad9aabee659e22a71d7d29ee697abce3618570d952027",
"0xfaa1f7c06a72e31fc0131d9abc39f042d7d40a165e18671008423a1ac7dcbbe6",
"0xf1d727f33231b13a7469184e578764ca645ccf547991bc12137237a32d07196f",
"0xa9f667786b853830042190cb7f3294df152d8dd03bdbfa59db3e99b31b5168ae"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
