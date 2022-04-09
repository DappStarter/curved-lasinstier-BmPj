require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift renew magic honey hover option bottom sketch'; 
let testAccounts = [
"0x47265ce22defe66e0951c31989bf55a943a339f544e535918479333840be3065",
"0x80e702e968fa546ea45307a93c49d12d406d91c41283aa71954b2e0b45e8e89a",
"0x123ff50cba26cf6b2bdb3947f130677acf9729a7a1268284bb7b4e6c7b1c2f9a",
"0xb8ef690de32fa56a4c87e83f5a20604ab540a346c337489e815973839f12affa",
"0x67807376b2ff9545c18c4affb107f0913082cc088eff8575bf1a10676d7ec242",
"0xac41b0f353c145f2fc97d9091f7d921785f9c74077f76fb28c9e41e6070d7cd6",
"0x6cfc9905ce6804f0f7e8d4c220a09757c54796569a9b1682937b10cc734973d1",
"0x87e1a2a9d644bf52eb13b1b0dc921fe2f2c92096ba1f8fe5af9b9b66abf9fd47",
"0xb636017eb9e4a4a29d5f8288e3e4e0bbad465b7f42e945057d6124333f6e5844",
"0x6b37d5f95ceb317f73075ebff8c55e590b9cec993bc22e9a87d4a6b4245930a1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

