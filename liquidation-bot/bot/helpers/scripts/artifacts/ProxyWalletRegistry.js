const ProxyWalletRegistryArtifact = {
  "_format": "hh-sol-artifact-1",
  "contractName": "ProxyWalletRegistry",
  "sourceName": "contracts/6.12/proxy-wallet/ProxyWalletRegistry.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_factory",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "build",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "_proxy",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "build0",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "_proxy",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "proxies",
      "outputs": [
        {
          "internalType": "contract ProxyWallet",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "setOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506040516103763803806103768339818101604052602081101561003357600080fd5b5051600180546001600160a01b0319166001600160a01b03909216919091179055610313806100636000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806313af4035146100515780637748f42514610079578063c45527911461009d578063f3701da2146100c3575b600080fd5b6100776004803603602081101561006757600080fd5b50356001600160a01b03166100e9565b005b6100816101dd565b604080516001600160a01b039092168252519081900360200190f35b610081600480360360208110156100b357600080fd5b50356001600160a01b03166101ed565b610081600480360360208110156100d957600080fd5b50356001600160a01b0316610208565b6001600160a01b03818116600090815260208190526040902054161561010e57600080fd5b3360009081526020818152604091829020548251638da5cb5b60e01b815292516001600160a01b0391821693918516928492638da5cb5b9260048083019392829003018186803b15801561016157600080fd5b505afa158015610175573d6000803e3d6000fd5b505050506040513d602081101561018b57600080fd5b50516001600160a01b0316146101a057600080fd5b6001600160a01b039182166000908152602081905260408082208054949093166001600160a01b0319948516179092553381522080549091169055565b60006101e833610208565b905090565b6000602081905290815260409020546001600160a01b031681565b6001600160a01b038181166000908152602081905260408120549091161561022f57600080fd5b600154604080516379b80ed160e11b81526001600160a01b0385811660048301529151919092169163f3701da29160248083019260209291908290030181600087803b15801561027e57600080fd5b505af1158015610292573d6000803e3d6000fd5b505050506040513d60208110156102a857600080fd5b50516001600160a01b03928316600090815260208190526040902080546001600160a01b03191693821693909317909255509056fea26469706673582212204c6d824b3fd628a272f837c98cdc08d0a494e5fedc823151ab166f660851d8de64736f6c634300060c0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c806313af4035146100515780637748f42514610079578063c45527911461009d578063f3701da2146100c3575b600080fd5b6100776004803603602081101561006757600080fd5b50356001600160a01b03166100e9565b005b6100816101dd565b604080516001600160a01b039092168252519081900360200190f35b610081600480360360208110156100b357600080fd5b50356001600160a01b03166101ed565b610081600480360360208110156100d957600080fd5b50356001600160a01b0316610208565b6001600160a01b03818116600090815260208190526040902054161561010e57600080fd5b3360009081526020818152604091829020548251638da5cb5b60e01b815292516001600160a01b0391821693918516928492638da5cb5b9260048083019392829003018186803b15801561016157600080fd5b505afa158015610175573d6000803e3d6000fd5b505050506040513d602081101561018b57600080fd5b50516001600160a01b0316146101a057600080fd5b6001600160a01b039182166000908152602081905260408082208054949093166001600160a01b0319948516179092553381522080549091169055565b60006101e833610208565b905090565b6000602081905290815260409020546001600160a01b031681565b6001600160a01b038181166000908152602081905260408120549091161561022f57600080fd5b600154604080516379b80ed160e11b81526001600160a01b0385811660048301529151919092169163f3701da29160248083019260209291908290030181600087803b15801561027e57600080fd5b505af1158015610292573d6000803e3d6000fd5b505050506040513d60208110156102a857600080fd5b50516001600160a01b03928316600090815260208190526040902080546001600160a01b03191693821693909317909255509056fea26469706673582212204c6d824b3fd628a272f837c98cdc08d0a494e5fedc823151ab166f660851d8de64736f6c634300060c0033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}


export default ProxyWalletRegistryArtifact;