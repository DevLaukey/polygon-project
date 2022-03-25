export const VOTERS_ADDRESS = "0x4c371D2626ab14f99e9591747568c9277ceb86Ba";

export const VOTERS_ABI = [
  {
    constant: true,
    inputs: [],
    name: "numberVoters",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x06661abd",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "voters",
    outputs: [
      {
        name: "id",
        type: "uint256",
      },
      {
        name: "name",
        type: "string",
      },
      {
        name: "phone",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xe0f478cb",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
    signature: "constructor",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_name",
        type: "string",
      },
      {
        name: "_phone",
        type: "string",
      },
    ],
    name: "createVoter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x3dce4920",
  },
];
