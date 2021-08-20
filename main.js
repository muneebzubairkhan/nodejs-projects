// nodeUrl: 'https://rinkeby.infura.io/v3/3da1c863472e43d989856450d4e6889d',
// multicallCustomContractAddress: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696'

import { Multicall } from 'ethereum-multicall';
import Web3 from 'web3';
import {
  busdAddress,
  presaleAbi,
  presaleAddress,
  presaleFactoryAbi,
  presaleFactoryAddress
} from './smart-contracts.js';

const init = async () => {
  const web3 = new Web3(
    'https://rinkeby.infura.io/v3/3da1c863472e43d989856450d4e6889d'
  );

  const multicall = new Multicall({ web3Instance: web3, tryAggregate: true });

  const contractCallContext = [
    {
      reference: 'testContract',
      contractAddress: presaleFactoryAddress,
      abi: presaleFactoryAbi,
      calls: [
        {
          reference: 'fooCall1',
          methodName: 'getPresaleDetails',
          methodParameters: [
            '0x31b694f0973E16f5db8D725AbF375663d6f3Fc30'
            // '0x133cB13a3317406b059AC40CB3AD4c967559e4eD'
          ]
        }
      ]
    }
  ];

  const results = await multicall.call(contractCallContext);

  console.log(results.results.testContract.callsReturnContext[0].returnValues);
  // console.log(results.results.testContract.callsReturnContext[1].returnValues);
};

const getPresaleDetails = addresses => {};
init();
