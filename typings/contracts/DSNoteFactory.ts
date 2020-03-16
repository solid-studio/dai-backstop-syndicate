/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { DSNote } from "./DSNote";

export class DSNoteFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(): Promise<DSNote> {
    return super.deploy() as Promise<DSNote>;
  }
  getDeployTransaction(): UnsignedTransaction {
    return super.getDeployTransaction();
  }
  attach(address: string): DSNote {
    return super.attach(address) as DSNote;
  }
  connect(signer: Signer): DSNoteFactory {
    return super.connect(signer) as DSNoteFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DSNote {
    return new Contract(address, _abi, signerOrProvider) as DSNote;
  }
}

const _abi = [
  {
    anonymous: true,
    inputs: [
      {
        indexed: true,
        internalType: "bytes4",
        name: "sig",
        type: "bytes4"
      },
      {
        indexed: true,
        internalType: "address",
        name: "guy",
        type: "address"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "foo",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "bar",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "fax",
        type: "bytes"
      }
    ],
    name: "LogNote",
    type: "event"
  }
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603e80601d6000396000f3fe6080604052600080fdfea265627a7a7231582025bbebbabb243ac969415108d8f19633d3b3e7861301f36c8db733356ccf4df864736f6c63430005100032";