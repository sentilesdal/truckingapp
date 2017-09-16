Web3 = require('web3');
solc = require('solc');
fs = require('fs');

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log('accounts created: ', web3.eth.accounts);

code = fs.readFileSync('helloworld/Voting.sol').toString();

compiledCode = solc.compile(code);

abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface);
VotingContract = web3.eth.contract(abiDefinition);
byteCode = compiledCode.contracts[':Voting'].bytecode;
deployedContract = VotingContract.new(['Rama','Nick','Jose'],{data: byteCode, from: web3.eth.accounts[0], gas: 4700000});
console.log('address: ', deployedContract.address);
contractInstance = VotingContract.at(deployedContract.address);
