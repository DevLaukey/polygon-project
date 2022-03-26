export const CONTACT_ADDRESS = "0x4c371D2626ab14f99e9591747568c9277ceb86Ba";

export const CONTACT_ABI = {
         contractName: "Contacts",
         abi: [
           {
             inputs: [],
             payable: false,
             stateMutability: "nonpayable",
             type: "constructor",
           },
           {
             constant: true,
             inputs: [
               {
                 internalType: "uint256",
                 name: "",
                 type: "uint256",
               },
             ],
             name: "contacts",
             outputs: [
               {
                 internalType: "uint256",
                 name: "id",
                 type: "uint256",
               },
               {
                 internalType: "string",
                 name: "name",
                 type: "string",
               },
               {
                 internalType: "string",
                 name: "phone",
                 type: "string",
               },
             ],
             payable: false,
             stateMutability: "view",
             type: "function",
           },
           {
             constant: true,
             inputs: [],
             name: "count",
             outputs: [
               {
                 internalType: "uint256",
                 name: "",
                 type: "uint256",
               },
             ],
             payable: false,
             stateMutability: "view",
             type: "function",
           },
           {
             constant: false,
             inputs: [
               {
                 internalType: "string",
                 name: "_name",
                 type: "string",
               },
               {
                 internalType: "string",
                 name: "_phone",
                 type: "string",
               },
             ],
             name: "createContact",
             outputs: [],
             payable: false,
             stateMutability: "nonpayable",
             type: "function",
           },
         ],
         metadata:
           '{"compiler":{"version":"0.5.16+commit.9c3226ce"},"language":"Solidity","output":{"abi":[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"contacts","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"phone","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_phone","type":"string"}],"name":"createContact","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],"devdoc":{"methods":{}},"userdoc":{"methods":{}}},"settings":{"compilationTarget":{"project:/contracts/Contracts.sol":"Contacts"},"evmVersion":"istanbul","libraries":{},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"project:/contracts/Contracts.sol":{"keccak256":"0xea0d3fc17c0b5cf8088d2bada730bcd4c25e869ed982e803a911e62bda07951f","urls":["bzz-raw://bb2e5aa30fee941cfda064d43f97ff3e6ffda65f491dafc962419d4be5f5db79","dweb:/ipfs/QmQHtvikcx93RLgz6RWWfpPmDBDRwh2GK6aqq1M8TPw5uh"]}},"version":1}',
         bytecode:
           "0x60806040526000805534801561001457600080fd5b5061008f6040518060400160405280600c81526020017f5a616661722053616c65656d00000000000000000000000000000000000000008152506040518060400160405280600981526020017f313233313233313233000000000000000000000000000000000000000000000081525061009460201b60201c565b6101c6565b6000808154809291906001019190505550604051806060016040528060005481526020018381526020018281525060016000805481526020019081526020016000206000820151816000015560208201518160010190805190602001906100fc929190610121565b506040820151816002019080519060200190610119929190610121565b509050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061016257805160ff1916838001178555610190565b82800160010185558215610190579182015b8281111561018f578251825591602001919060010190610174565b5b50905061019d91906101a1565b5090565b6101c391905b808211156101bf5760008160009055506001016101a7565b5090565b90565b610597806101d56000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806306661abd146100465780633dce492014610064578063e0f478cb146101b6575b600080fd5b61004e6102d0565b6040518082815260200191505060405180910390f35b6101b46004803603604081101561007a57600080fd5b810190808035906020019064010000000081111561009757600080fd5b8201836020820111156100a957600080fd5b803590602001918460018302840111640100000000831117156100cb57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561012e57600080fd5b82018360208201111561014057600080fd5b8035906020019184600183028401116401000000008311171561016257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506102d6565b005b6101e2600480360360208110156101cc57600080fd5b8101908080359060200190929190505050610363565b604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561022c578082015181840152602081019050610211565b50505050905090810190601f1680156102595780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015610292578082015181840152602081019050610277565b50505050905090810190601f1680156102bf5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b60005481565b60008081548092919060010191905055506040518060600160405280600054815260200183815260200182815250600160008054815260200190815260200160002060008201518160000155602082015181600101908051906020019061033e9291906104bd565b50604082015181600201908051906020019061035b9291906104bd565b509050505050565b6001602052806000526040600020600091509050806000015490806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104155780601f106103ea57610100808354040283529160200191610415565b820191906000526020600020905b8154815290600101906020018083116103f857829003601f168201915b505050505090806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104b35780601f10610488576101008083540402835291602001916104b3565b820191906000526020600020905b81548152906001019060200180831161049657829003601f168201915b5050505050905083565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106104fe57805160ff191683800117855561052c565b8280016001018555821561052c579182015b8281111561052b578251825591602001919060010190610510565b5b509050610539919061053d565b5090565b61055f91905b8082111561055b576000816000905550600101610543565b5090565b9056fea265627a7a7231582094889ae54f2c3f3c6eb00c72a29928923bd6a5dee0c5861216635623992c78e764736f6c63430005100032",
         deployedBytecode:
           "0x608060405234801561001057600080fd5b50600436106100415760003560e01c806306661abd146100465780633dce492014610064578063e0f478cb146101b6575b600080fd5b61004e6102d0565b6040518082815260200191505060405180910390f35b6101b46004803603604081101561007a57600080fd5b810190808035906020019064010000000081111561009757600080fd5b8201836020820111156100a957600080fd5b803590602001918460018302840111640100000000831117156100cb57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561012e57600080fd5b82018360208201111561014057600080fd5b8035906020019184600183028401116401000000008311171561016257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506102d6565b005b6101e2600480360360208110156101cc57600080fd5b8101908080359060200190929190505050610363565b604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561022c578082015181840152602081019050610211565b50505050905090810190601f1680156102595780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015610292578082015181840152602081019050610277565b50505050905090810190601f1680156102bf5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b60005481565b60008081548092919060010191905055506040518060600160405280600054815260200183815260200182815250600160008054815260200190815260200160002060008201518160000155602082015181600101908051906020019061033e9291906104bd565b50604082015181600201908051906020019061035b9291906104bd565b509050505050565b6001602052806000526040600020600091509050806000015490806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104155780601f106103ea57610100808354040283529160200191610415565b820191906000526020600020905b8154815290600101906020018083116103f857829003601f168201915b505050505090806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104b35780601f10610488576101008083540402835291602001916104b3565b820191906000526020600020905b81548152906001019060200180831161049657829003601f168201915b5050505050905083565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106104fe57805160ff191683800117855561052c565b8280016001018555821561052c579182015b8281111561052b578251825591602001919060010190610510565b5b509050610539919061053d565b5090565b61055f91905b8082111561055b576000816000905550600101610543565b5090565b9056fea265627a7a7231582094889ae54f2c3f3c6eb00c72a29928923bd6a5dee0c5861216635623992c78e764736f6c63430005100032",
         sourceMap:
           "26:415:0:-;;;68:1;48:21;;168:74;8:9:-1;5:2;;;30:1;27;20:12;5:2;168:74:0;195:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:13;;;:42;;:::i;:::-;26:415;;295:144;374:5;;:7;;;;;;;;;;;;;405:29;;;;;;;;413:5;;405:29;;;;420:5;405:29;;;;427:6;405:29;;;387:8;:15;396:5;;387:15;;;;;;;;;;;:47;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;295:144;;:::o;26:415::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
         deployedSourceMap:
           "26:415:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;26:415:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;48:21;;;:::i;:::-;;;;;;;;;;;;;;;;;;;295:144;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;295:144:0;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;295:144:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;295:144:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;295:144:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;295:144:0;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;295:144:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;295:144:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;295:144:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;295:144:0;;;;;;;;;;;;;;;:::i;:::-;;248:40;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;248:40:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;248:40:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;248:40:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;48:21;;;;:::o;295:144::-;374:5;;:7;;;;;;;;;;;;;405:29;;;;;;;;413:5;;405:29;;;;420:5;405:29;;;;427:6;405:29;;;387:8;:15;396:5;;387:15;;;;;;;;;;;:47;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;295:144;;:::o;248:40::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;26:415::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
         source:
           "pragma solidity ^0.5.16;\n\ncontract Contacts {\n  uint public count = 0; // state variable\n  \n  struct Contact {\n    uint id;\n    string name;\n    string phone;\n  }\n  \n  constructor() public {\n    createContact('Zafar Saleem', '123123123');\n  }\n  \n  mapping(uint => Contact) public contacts;\n  \n  function createContact(string memory _name, string memory _phone) public {\n    count++;\n    contacts[count] = Contact(count, _name, _phone);\n  }\n}",
         sourcePath:
           "/home/laukey/Documents/blockchain/frontend/contracts/Contracts.sol",
         ast: {
           absolutePath: "project:/contracts/Contracts.sol",
           exportedSymbols: {
             Contacts: [46],
           },
           id: 47,
           nodeType: "SourceUnit",
           nodes: [
             {
               id: 1,
               literals: ["solidity", "^", "0.5", ".16"],
               nodeType: "PragmaDirective",
               src: "0:24:0",
             },
             {
               baseContracts: [],
               contractDependencies: [],
               contractKind: "contract",
               documentation: null,
               fullyImplemented: true,
               id: 46,
               linearizedBaseContracts: [46],
               name: "Contacts",
               nodeType: "ContractDefinition",
               nodes: [
                 {
                   constant: false,
                   id: 4,
                   name: "count",
                   nodeType: "VariableDeclaration",
                   scope: 46,
                   src: "48:21:0",
                   stateVariable: true,
                   storageLocation: "default",
                   typeDescriptions: {
                     typeIdentifier: "t_uint256",
                     typeString: "uint256",
                   },
                   typeName: {
                     id: 2,
                     name: "uint",
                     nodeType: "ElementaryTypeName",
                     src: "48:4:0",
                     typeDescriptions: {
                       typeIdentifier: "t_uint256",
                       typeString: "uint256",
                     },
                   },
                   value: {
                     argumentTypes: null,
                     hexValue: "30",
                     id: 3,
                     isConstant: false,
                     isLValue: false,
                     isPure: true,
                     kind: "number",
                     lValueRequested: false,
                     nodeType: "Literal",
                     src: "68:1:0",
                     subdenomination: null,
                     typeDescriptions: {
                       typeIdentifier: "t_rational_0_by_1",
                       typeString: "int_const 0",
                     },
                     value: "0",
                   },
                   visibility: "public",
                 },
                 {
                   canonicalName: "Contacts.Contact",
                   id: 11,
                   members: [
                     {
                       constant: false,
                       id: 6,
                       name: "id",
                       nodeType: "VariableDeclaration",
                       scope: 11,
                       src: "115:7:0",
                       stateVariable: false,
                       storageLocation: "default",
                       typeDescriptions: {
                         typeIdentifier: "t_uint256",
                         typeString: "uint256",
                       },
                       typeName: {
                         id: 5,
                         name: "uint",
                         nodeType: "ElementaryTypeName",
                         src: "115:4:0",
                         typeDescriptions: {
                           typeIdentifier: "t_uint256",
                           typeString: "uint256",
                         },
                       },
                       value: null,
                       visibility: "internal",
                     },
                     {
                       constant: false,
                       id: 8,
                       name: "name",
                       nodeType: "VariableDeclaration",
                       scope: 11,
                       src: "128:11:0",
                       stateVariable: false,
                       storageLocation: "default",
                       typeDescriptions: {
                         typeIdentifier: "t_string_storage_ptr",
                         typeString: "string",
                       },
                       typeName: {
                         id: 7,
                         name: "string",
                         nodeType: "ElementaryTypeName",
                         src: "128:6:0",
                         typeDescriptions: {
                           typeIdentifier: "t_string_storage_ptr",
                           typeString: "string",
                         },
                       },
                       value: null,
                       visibility: "internal",
                     },
                     {
                       constant: false,
                       id: 10,
                       name: "phone",
                       nodeType: "VariableDeclaration",
                       scope: 11,
                       src: "145:12:0",
                       stateVariable: false,
                       storageLocation: "default",
                       typeDescriptions: {
                         typeIdentifier: "t_string_storage_ptr",
                         typeString: "string",
                       },
                       typeName: {
                         id: 9,
                         name: "string",
                         nodeType: "ElementaryTypeName",
                         src: "145:6:0",
                         typeDescriptions: {
                           typeIdentifier: "t_string_storage_ptr",
                           typeString: "string",
                         },
                       },
                       value: null,
                       visibility: "internal",
                     },
                   ],
                   name: "Contact",
                   nodeType: "StructDefinition",
                   scope: 46,
                   src: "94:68:0",
                   visibility: "public",
                 },
                 {
                   body: {
                     id: 19,
                     nodeType: "Block",
                     src: "189:53:0",
                     statements: [
                       {
                         expression: {
                           argumentTypes: null,
                           arguments: [
                             {
                               argumentTypes: null,
                               hexValue: "5a616661722053616c65656d",
                               id: 15,
                               isConstant: false,
                               isLValue: false,
                               isPure: true,
                               kind: "string",
                               lValueRequested: false,
                               nodeType: "Literal",
                               src: "209:14:0",
                               subdenomination: null,
                               typeDescriptions: {
                                 typeIdentifier:
                                   "t_stringliteral_a6f15f2c3c2f228ea98b742f77f7770c5bb0d7b779b11baaf22046df5ea668d9",
                                 typeString: 'literal_string "Zafar Saleem"',
                               },
                               value: "Zafar Saleem",
                             },
                             {
                               argumentTypes: null,
                               hexValue: "313233313233313233",
                               id: 16,
                               isConstant: false,
                               isLValue: false,
                               isPure: true,
                               kind: "string",
                               lValueRequested: false,
                               nodeType: "Literal",
                               src: "225:11:0",
                               subdenomination: null,
                               typeDescriptions: {
                                 typeIdentifier:
                                   "t_stringliteral_250f78769f22a8c43a2b767fde4b093fbbcdc28bd7ecac4bad883a4b0fcf30e3",
                                 typeString: 'literal_string "123123123"',
                               },
                               value: "123123123",
                             },
                           ],
                           expression: {
                             argumentTypes: [
                               {
                                 typeIdentifier:
                                   "t_stringliteral_a6f15f2c3c2f228ea98b742f77f7770c5bb0d7b779b11baaf22046df5ea668d9",
                                 typeString: 'literal_string "Zafar Saleem"',
                               },
                               {
                                 typeIdentifier:
                                   "t_stringliteral_250f78769f22a8c43a2b767fde4b093fbbcdc28bd7ecac4bad883a4b0fcf30e3",
                                 typeString: 'literal_string "123123123"',
                               },
                             ],
                             id: 14,
                             name: "createContact",
                             nodeType: "Identifier",
                             overloadedDeclarations: [],
                             referencedDeclaration: 45,
                             src: "195:13:0",
                             typeDescriptions: {
                               typeIdentifier:
                                 "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                               typeString:
                                 "function (string memory,string memory)",
                             },
                           },
                           id: 17,
                           isConstant: false,
                           isLValue: false,
                           isPure: false,
                           kind: "functionCall",
                           lValueRequested: false,
                           names: [],
                           nodeType: "FunctionCall",
                           src: "195:42:0",
                           typeDescriptions: {
                             typeIdentifier: "t_tuple$__$",
                             typeString: "tuple()",
                           },
                         },
                         id: 18,
                         nodeType: "ExpressionStatement",
                         src: "195:42:0",
                       },
                     ],
                   },
                   documentation: null,
                   id: 20,
                   implemented: true,
                   kind: "constructor",
                   modifiers: [],
                   name: "",
                   nodeType: "FunctionDefinition",
                   parameters: {
                     id: 12,
                     nodeType: "ParameterList",
                     parameters: [],
                     src: "179:2:0",
                   },
                   returnParameters: {
                     id: 13,
                     nodeType: "ParameterList",
                     parameters: [],
                     src: "189:0:0",
                   },
                   scope: 46,
                   src: "168:74:0",
                   stateMutability: "nonpayable",
                   superFunction: null,
                   visibility: "public",
                 },
                 {
                   constant: false,
                   id: 24,
                   name: "contacts",
                   nodeType: "VariableDeclaration",
                   scope: 46,
                   src: "248:40:0",
                   stateVariable: true,
                   storageLocation: "default",
                   typeDescriptions: {
                     typeIdentifier:
                       "t_mapping$_t_uint256_$_t_struct$_Contact_$11_storage_$",
                     typeString: "mapping(uint256 => struct Contacts.Contact)",
                   },
                   typeName: {
                     id: 23,
                     keyType: {
                       id: 21,
                       name: "uint",
                       nodeType: "ElementaryTypeName",
                       src: "256:4:0",
                       typeDescriptions: {
                         typeIdentifier: "t_uint256",
                         typeString: "uint256",
                       },
                     },
                     nodeType: "Mapping",
                     src: "248:24:0",
                     typeDescriptions: {
                       typeIdentifier:
                         "t_mapping$_t_uint256_$_t_struct$_Contact_$11_storage_$",
                       typeString:
                         "mapping(uint256 => struct Contacts.Contact)",
                     },
                     valueType: {
                       contractScope: null,
                       id: 22,
                       name: "Contact",
                       nodeType: "UserDefinedTypeName",
                       referencedDeclaration: 11,
                       src: "264:7:0",
                       typeDescriptions: {
                         typeIdentifier: "t_struct$_Contact_$11_storage_ptr",
                         typeString: "struct Contacts.Contact",
                       },
                     },
                   },
                   value: null,
                   visibility: "public",
                 },
                 {
                   body: {
                     id: 44,
                     nodeType: "Block",
                     src: "368:71:0",
                     statements: [
                       {
                         expression: {
                           argumentTypes: null,
                           id: 32,
                           isConstant: false,
                           isLValue: false,
                           isPure: false,
                           lValueRequested: false,
                           nodeType: "UnaryOperation",
                           operator: "++",
                           prefix: false,
                           src: "374:7:0",
                           subExpression: {
                             argumentTypes: null,
                             id: 31,
                             name: "count",
                             nodeType: "Identifier",
                             overloadedDeclarations: [],
                             referencedDeclaration: 4,
                             src: "374:5:0",
                             typeDescriptions: {
                               typeIdentifier: "t_uint256",
                               typeString: "uint256",
                             },
                           },
                           typeDescriptions: {
                             typeIdentifier: "t_uint256",
                             typeString: "uint256",
                           },
                         },
                         id: 33,
                         nodeType: "ExpressionStatement",
                         src: "374:7:0",
                       },
                       {
                         expression: {
                           argumentTypes: null,
                           id: 42,
                           isConstant: false,
                           isLValue: false,
                           isPure: false,
                           lValueRequested: false,
                           leftHandSide: {
                             argumentTypes: null,
                             baseExpression: {
                               argumentTypes: null,
                               id: 34,
                               name: "contacts",
                               nodeType: "Identifier",
                               overloadedDeclarations: [],
                               referencedDeclaration: 24,
                               src: "387:8:0",
                               typeDescriptions: {
                                 typeIdentifier:
                                   "t_mapping$_t_uint256_$_t_struct$_Contact_$11_storage_$",
                                 typeString:
                                   "mapping(uint256 => struct Contacts.Contact storage ref)",
                               },
                             },
                             id: 36,
                             indexExpression: {
                               argumentTypes: null,
                               id: 35,
                               name: "count",
                               nodeType: "Identifier",
                               overloadedDeclarations: [],
                               referencedDeclaration: 4,
                               src: "396:5:0",
                               typeDescriptions: {
                                 typeIdentifier: "t_uint256",
                                 typeString: "uint256",
                               },
                             },
                             isConstant: false,
                             isLValue: true,
                             isPure: false,
                             lValueRequested: true,
                             nodeType: "IndexAccess",
                             src: "387:15:0",
                             typeDescriptions: {
                               typeIdentifier: "t_struct$_Contact_$11_storage",
                               typeString:
                                 "struct Contacts.Contact storage ref",
                             },
                           },
                           nodeType: "Assignment",
                           operator: "=",
                           rightHandSide: {
                             argumentTypes: null,
                             arguments: [
                               {
                                 argumentTypes: null,
                                 id: 38,
                                 name: "count",
                                 nodeType: "Identifier",
                                 overloadedDeclarations: [],
                                 referencedDeclaration: 4,
                                 src: "413:5:0",
                                 typeDescriptions: {
                                   typeIdentifier: "t_uint256",
                                   typeString: "uint256",
                                 },
                               },
                               {
                                 argumentTypes: null,
                                 id: 39,
                                 name: "_name",
                                 nodeType: "Identifier",
                                 overloadedDeclarations: [],
                                 referencedDeclaration: 26,
                                 src: "420:5:0",
                                 typeDescriptions: {
                                   typeIdentifier: "t_string_memory_ptr",
                                   typeString: "string memory",
                                 },
                               },
                               {
                                 argumentTypes: null,
                                 id: 40,
                                 name: "_phone",
                                 nodeType: "Identifier",
                                 overloadedDeclarations: [],
                                 referencedDeclaration: 28,
                                 src: "427:6:0",
                                 typeDescriptions: {
                                   typeIdentifier: "t_string_memory_ptr",
                                   typeString: "string memory",
                                 },
                               },
                             ],
                             expression: {
                               argumentTypes: [
                                 {
                                   typeIdentifier: "t_uint256",
                                   typeString: "uint256",
                                 },
                                 {
                                   typeIdentifier: "t_string_memory_ptr",
                                   typeString: "string memory",
                                 },
                                 {
                                   typeIdentifier: "t_string_memory_ptr",
                                   typeString: "string memory",
                                 },
                               ],
                               id: 37,
                               name: "Contact",
                               nodeType: "Identifier",
                               overloadedDeclarations: [],
                               referencedDeclaration: 11,
                               src: "405:7:0",
                               typeDescriptions: {
                                 typeIdentifier:
                                   "t_type$_t_struct$_Contact_$11_storage_ptr_$",
                                 typeString:
                                   "type(struct Contacts.Contact storage pointer)",
                               },
                             },
                             id: 41,
                             isConstant: false,
                             isLValue: false,
                             isPure: false,
                             kind: "structConstructorCall",
                             lValueRequested: false,
                             names: [],
                             nodeType: "FunctionCall",
                             src: "405:29:0",
                             typeDescriptions: {
                               typeIdentifier: "t_struct$_Contact_$11_memory",
                               typeString: "struct Contacts.Contact memory",
                             },
                           },
                           src: "387:47:0",
                           typeDescriptions: {
                             typeIdentifier: "t_struct$_Contact_$11_storage",
                             typeString: "struct Contacts.Contact storage ref",
                           },
                         },
                         id: 43,
                         nodeType: "ExpressionStatement",
                         src: "387:47:0",
                       },
                     ],
                   },
                   documentation: null,
                   id: 45,
                   implemented: true,
                   kind: "function",
                   modifiers: [],
                   name: "createContact",
                   nodeType: "FunctionDefinition",
                   parameters: {
                     id: 29,
                     nodeType: "ParameterList",
                     parameters: [
                       {
                         constant: false,
                         id: 26,
                         name: "_name",
                         nodeType: "VariableDeclaration",
                         scope: 45,
                         src: "318:19:0",
                         stateVariable: false,
                         storageLocation: "memory",
                         typeDescriptions: {
                           typeIdentifier: "t_string_memory_ptr",
                           typeString: "string",
                         },
                         typeName: {
                           id: 25,
                           name: "string",
                           nodeType: "ElementaryTypeName",
                           src: "318:6:0",
                           typeDescriptions: {
                             typeIdentifier: "t_string_storage_ptr",
                             typeString: "string",
                           },
                         },
                         value: null,
                         visibility: "internal",
                       },
                       {
                         constant: false,
                         id: 28,
                         name: "_phone",
                         nodeType: "VariableDeclaration",
                         scope: 45,
                         src: "339:20:0",
                         stateVariable: false,
                         storageLocation: "memory",
                         typeDescriptions: {
                           typeIdentifier: "t_string_memory_ptr",
                           typeString: "string",
                         },
                         typeName: {
                           id: 27,
                           name: "string",
                           nodeType: "ElementaryTypeName",
                           src: "339:6:0",
                           typeDescriptions: {
                             typeIdentifier: "t_string_storage_ptr",
                             typeString: "string",
                           },
                         },
                         value: null,
                         visibility: "internal",
                       },
                     ],
                     src: "317:43:0",
                   },
                   returnParameters: {
                     id: 30,
                     nodeType: "ParameterList",
                     parameters: [],
                     src: "368:0:0",
                   },
                   scope: 46,
                   src: "295:144:0",
                   stateMutability: "nonpayable",
                   superFunction: null,
                   visibility: "public",
                 },
               ],
               scope: 47,
               src: "26:415:0",
             },
           ],
           src: "0:441:0",
         },
         legacyAST: {
           attributes: {
             absolutePath: "project:/contracts/Contracts.sol",
             exportedSymbols: {
               Contacts: [46],
             },
           },
           children: [
             {
               attributes: {
                 literals: ["solidity", "^", "0.5", ".16"],
               },
               id: 1,
               name: "PragmaDirective",
               src: "0:24:0",
             },
             {
               attributes: {
                 baseContracts: [null],
                 contractDependencies: [null],
                 contractKind: "contract",
                 documentation: null,
                 fullyImplemented: true,
                 linearizedBaseContracts: [46],
                 name: "Contacts",
                 scope: 47,
               },
               children: [
                 {
                   attributes: {
                     constant: false,
                     name: "count",
                     scope: 46,
                     stateVariable: true,
                     storageLocation: "default",
                     type: "uint256",
                     visibility: "public",
                   },
                   children: [
                     {
                       attributes: {
                         name: "uint",
                         type: "uint256",
                       },
                       id: 2,
                       name: "ElementaryTypeName",
                       src: "48:4:0",
                     },
                     {
                       attributes: {
                         argumentTypes: null,
                         hexvalue: "30",
                         isConstant: false,
                         isLValue: false,
                         isPure: true,
                         lValueRequested: false,
                         subdenomination: null,
                         token: "number",
                         type: "int_const 0",
                         value: "0",
                       },
                       id: 3,
                       name: "Literal",
                       src: "68:1:0",
                     },
                   ],
                   id: 4,
                   name: "VariableDeclaration",
                   src: "48:21:0",
                 },
                 {
                   attributes: {
                     canonicalName: "Contacts.Contact",
                     name: "Contact",
                     scope: 46,
                     visibility: "public",
                   },
                   children: [
                     {
                       attributes: {
                         constant: false,
                         name: "id",
                         scope: 11,
                         stateVariable: false,
                         storageLocation: "default",
                         type: "uint256",
                         value: null,
                         visibility: "internal",
                       },
                       children: [
                         {
                           attributes: {
                             name: "uint",
                             type: "uint256",
                           },
                           id: 5,
                           name: "ElementaryTypeName",
                           src: "115:4:0",
                         },
                       ],
                       id: 6,
                       name: "VariableDeclaration",
                       src: "115:7:0",
                     },
                     {
                       attributes: {
                         constant: false,
                         name: "name",
                         scope: 11,
                         stateVariable: false,
                         storageLocation: "default",
                         type: "string",
                         value: null,
                         visibility: "internal",
                       },
                       children: [
                         {
                           attributes: {
                             name: "string",
                             type: "string",
                           },
                           id: 7,
                           name: "ElementaryTypeName",
                           src: "128:6:0",
                         },
                       ],
                       id: 8,
                       name: "VariableDeclaration",
                       src: "128:11:0",
                     },
                     {
                       attributes: {
                         constant: false,
                         name: "phone",
                         scope: 11,
                         stateVariable: false,
                         storageLocation: "default",
                         type: "string",
                         value: null,
                         visibility: "internal",
                       },
                       children: [
                         {
                           attributes: {
                             name: "string",
                             type: "string",
                           },
                           id: 9,
                           name: "ElementaryTypeName",
                           src: "145:6:0",
                         },
                       ],
                       id: 10,
                       name: "VariableDeclaration",
                       src: "145:12:0",
                     },
                   ],
                   id: 11,
                   name: "StructDefinition",
                   src: "94:68:0",
                 },
                 {
                   attributes: {
                     documentation: null,
                     implemented: true,
                     isConstructor: true,
                     kind: "constructor",
                     modifiers: [null],
                     name: "",
                     scope: 46,
                     stateMutability: "nonpayable",
                     superFunction: null,
                     visibility: "public",
                   },
                   children: [
                     {
                       attributes: {
                         parameters: [null],
                       },
                       children: [],
                       id: 12,
                       name: "ParameterList",
                       src: "179:2:0",
                     },
                     {
                       attributes: {
                         parameters: [null],
                       },
                       children: [],
                       id: 13,
                       name: "ParameterList",
                       src: "189:0:0",
                     },
                     {
                       children: [
                         {
                           children: [
                             {
                               attributes: {
                                 argumentTypes: null,
                                 isConstant: false,
                                 isLValue: false,
                                 isPure: false,
                                 isStructConstructorCall: false,
                                 lValueRequested: false,
                                 names: [null],
                                 type: "tuple()",
                                 type_conversion: false,
                               },
                               children: [
                                 {
                                   attributes: {
                                     argumentTypes: [
                                       {
                                         typeIdentifier:
                                           "t_stringliteral_a6f15f2c3c2f228ea98b742f77f7770c5bb0d7b779b11baaf22046df5ea668d9",
                                         typeString:
                                           'literal_string "Zafar Saleem"',
                                       },
                                       {
                                         typeIdentifier:
                                           "t_stringliteral_250f78769f22a8c43a2b767fde4b093fbbcdc28bd7ecac4bad883a4b0fcf30e3",
                                         typeString:
                                           'literal_string "123123123"',
                                       },
                                     ],
                                     overloadedDeclarations: [null],
                                     referencedDeclaration: 45,
                                     type:
                                       "function (string memory,string memory)",
                                     value: "createContact",
                                   },
                                   id: 14,
                                   name: "Identifier",
                                   src: "195:13:0",
                                 },
                                 {
                                   attributes: {
                                     argumentTypes: null,
                                     hexvalue: "5a616661722053616c65656d",
                                     isConstant: false,
                                     isLValue: false,
                                     isPure: true,
                                     lValueRequested: false,
                                     subdenomination: null,
                                     token: "string",
                                     type: 'literal_string "Zafar Saleem"',
                                     value: "Zafar Saleem",
                                   },
                                   id: 15,
                                   name: "Literal",
                                   src: "209:14:0",
                                 },
                                 {
                                   attributes: {
                                     argumentTypes: null,
                                     hexvalue: "313233313233313233",
                                     isConstant: false,
                                     isLValue: false,
                                     isPure: true,
                                     lValueRequested: false,
                                     subdenomination: null,
                                     token: "string",
                                     type: 'literal_string "123123123"',
                                     value: "123123123",
                                   },
                                   id: 16,
                                   name: "Literal",
                                   src: "225:11:0",
                                 },
                               ],
                               id: 17,
                               name: "FunctionCall",
                               src: "195:42:0",
                             },
                           ],
                           id: 18,
                           name: "ExpressionStatement",
                           src: "195:42:0",
                         },
                       ],
                       id: 19,
                       name: "Block",
                       src: "189:53:0",
                     },
                   ],
                   id: 20,
                   name: "FunctionDefinition",
                   src: "168:74:0",
                 },
                 {
                   attributes: {
                     constant: false,
                     name: "contacts",
                     scope: 46,
                     stateVariable: true,
                     storageLocation: "default",
                     type: "mapping(uint256 => struct Contacts.Contact)",
                     value: null,
                     visibility: "public",
                   },
                   children: [
                     {
                       attributes: {
                         type: "mapping(uint256 => struct Contacts.Contact)",
                       },
                       children: [
                         {
                           attributes: {
                             name: "uint",
                             type: "uint256",
                           },
                           id: 21,
                           name: "ElementaryTypeName",
                           src: "256:4:0",
                         },
                         {
                           attributes: {
                             contractScope: null,
                             name: "Contact",
                             referencedDeclaration: 11,
                             type: "struct Contacts.Contact",
                           },
                           id: 22,
                           name: "UserDefinedTypeName",
                           src: "264:7:0",
                         },
                       ],
                       id: 23,
                       name: "Mapping",
                       src: "248:24:0",
                     },
                   ],
                   id: 24,
                   name: "VariableDeclaration",
                   src: "248:40:0",
                 },
                 {
                   attributes: {
                     documentation: null,
                     implemented: true,
                     isConstructor: false,
                     kind: "function",
                     modifiers: [null],
                     name: "createContact",
                     scope: 46,
                     stateMutability: "nonpayable",
                     superFunction: null,
                     visibility: "public",
                   },
                   children: [
                     {
                       children: [
                         {
                           attributes: {
                             constant: false,
                             name: "_name",
                             scope: 45,
                             stateVariable: false,
                             storageLocation: "memory",
                             type: "string",
                             value: null,
                             visibility: "internal",
                           },
                           children: [
                             {
                               attributes: {
                                 name: "string",
                                 type: "string",
                               },
                               id: 25,
                               name: "ElementaryTypeName",
                               src: "318:6:0",
                             },
                           ],
                           id: 26,
                           name: "VariableDeclaration",
                           src: "318:19:0",
                         },
                         {
                           attributes: {
                             constant: false,
                             name: "_phone",
                             scope: 45,
                             stateVariable: false,
                             storageLocation: "memory",
                             type: "string",
                             value: null,
                             visibility: "internal",
                           },
                           children: [
                             {
                               attributes: {
                                 name: "string",
                                 type: "string",
                               },
                               id: 27,
                               name: "ElementaryTypeName",
                               src: "339:6:0",
                             },
                           ],
                           id: 28,
                           name: "VariableDeclaration",
                           src: "339:20:0",
                         },
                       ],
                       id: 29,
                       name: "ParameterList",
                       src: "317:43:0",
                     },
                     {
                       attributes: {
                         parameters: [null],
                       },
                       children: [],
                       id: 30,
                       name: "ParameterList",
                       src: "368:0:0",
                     },
                     {
                       children: [
                         {
                           children: [
                             {
                               attributes: {
                                 argumentTypes: null,
                                 isConstant: false,
                                 isLValue: false,
                                 isPure: false,
                                 lValueRequested: false,
                                 operator: "++",
                                 prefix: false,
                                 type: "uint256",
                               },
                               children: [
                                 {
                                   attributes: {
                                     argumentTypes: null,
                                     overloadedDeclarations: [null],
                                     referencedDeclaration: 4,
                                     type: "uint256",
                                     value: "count",
                                   },
                                   id: 31,
                                   name: "Identifier",
                                   src: "374:5:0",
                                 },
                               ],
                               id: 32,
                               name: "UnaryOperation",
                               src: "374:7:0",
                             },
                           ],
                           id: 33,
                           name: "ExpressionStatement",
                           src: "374:7:0",
                         },
                         {
                           children: [
                             {
                               attributes: {
                                 argumentTypes: null,
                                 isConstant: false,
                                 isLValue: false,
                                 isPure: false,
                                 lValueRequested: false,
                                 operator: "=",
                                 type: "struct Contacts.Contact storage ref",
                               },
                               children: [
                                 {
                                   attributes: {
                                     argumentTypes: null,
                                     isConstant: false,
                                     isLValue: true,
                                     isPure: false,
                                     lValueRequested: true,
                                     type:
                                       "struct Contacts.Contact storage ref",
                                   },
                                   children: [
                                     {
                                       attributes: {
                                         argumentTypes: null,
                                         overloadedDeclarations: [null],
                                         referencedDeclaration: 24,
                                         type:
                                           "mapping(uint256 => struct Contacts.Contact storage ref)",
                                         value: "contacts",
                                       },
                                       id: 34,
                                       name: "Identifier",
                                       src: "387:8:0",
                                     },
                                     {
                                       attributes: {
                                         argumentTypes: null,
                                         overloadedDeclarations: [null],
                                         referencedDeclaration: 4,
                                         type: "uint256",
                                         value: "count",
                                       },
                                       id: 35,
                                       name: "Identifier",
                                       src: "396:5:0",
                                     },
                                   ],
                                   id: 36,
                                   name: "IndexAccess",
                                   src: "387:15:0",
                                 },
                                 {
                                   attributes: {
                                     argumentTypes: null,
                                     isConstant: false,
                                     isLValue: false,
                                     isPure: false,
                                     isStructConstructorCall: true,
                                     lValueRequested: false,
                                     names: [null],
                                     type: "struct Contacts.Contact memory",
                                     type_conversion: false,
                                   },
                                   children: [
                                     {
                                       attributes: {
                                         argumentTypes: [
                                           {
                                             typeIdentifier: "t_uint256",
                                             typeString: "uint256",
                                           },
                                           {
                                             typeIdentifier:
                                               "t_string_memory_ptr",
                                             typeString: "string memory",
                                           },
                                           {
                                             typeIdentifier:
                                               "t_string_memory_ptr",
                                             typeString: "string memory",
                                           },
                                         ],
                                         overloadedDeclarations: [null],
                                         referencedDeclaration: 11,
                                         type:
                                           "type(struct Contacts.Contact storage pointer)",
                                         value: "Contact",
                                       },
                                       id: 37,
                                       name: "Identifier",
                                       src: "405:7:0",
                                     },
                                     {
                                       attributes: {
                                         argumentTypes: null,
                                         overloadedDeclarations: [null],
                                         referencedDeclaration: 4,
                                         type: "uint256",
                                         value: "count",
                                       },
                                       id: 38,
                                       name: "Identifier",
                                       src: "413:5:0",
                                     },
                                     {
                                       attributes: {
                                         argumentTypes: null,
                                         overloadedDeclarations: [null],
                                         referencedDeclaration: 26,
                                         type: "string memory",
                                         value: "_name",
                                       },
                                       id: 39,
                                       name: "Identifier",
                                       src: "420:5:0",
                                     },
                                     {
                                       attributes: {
                                         argumentTypes: null,
                                         overloadedDeclarations: [null],
                                         referencedDeclaration: 28,
                                         type: "string memory",
                                         value: "_phone",
                                       },
                                       id: 40,
                                       name: "Identifier",
                                       src: "427:6:0",
                                     },
                                   ],
                                   id: 41,
                                   name: "FunctionCall",
                                   src: "405:29:0",
                                 },
                               ],
                               id: 42,
                               name: "Assignment",
                               src: "387:47:0",
                             },
                           ],
                           id: 43,
                           name: "ExpressionStatement",
                           src: "387:47:0",
                         },
                       ],
                       id: 44,
                       name: "Block",
                       src: "368:71:0",
                     },
                   ],
                   id: 45,
                   name: "FunctionDefinition",
                   src: "295:144:0",
                 },
               ],
               id: 46,
               name: "ContractDefinition",
               src: "26:415:0",
             },
           ],
           id: 47,
           name: "SourceUnit",
           src: "0:441:0",
         },
         compiler: {
           name: "solc",
           version: "0.5.16+commit.9c3226ce.Emscripten.clang",
         },
         networks: {
           "5777": {
             events: {},
             links: {},
             address: "0xBDb8aEb603d28fdEB63c5F1b36c0e8Be5644D0C6",
             transactionHash:
               "0x1b80b0c4d9597bde0aefd6e831754b5cd00abebf7c8001a3ff1886c4ba626265",
           },
         },
         schemaVersion: "3.4.6",
         updatedAt: "2022-03-25T23:09:57.843Z",
         networkType: "ethereum",
         devdoc: {
           methods: {},
         },
         userdoc: {
           methods: {},
         },
       };