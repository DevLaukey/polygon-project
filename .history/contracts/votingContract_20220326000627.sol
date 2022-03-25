pragma solidity ^0.5.16;

contract Voting {
    uint public numberVoters = 0; // state variable
    
  struct Voter {
    uint id;
    string name;
    string phone;
  }
//   struct Aspirant {
//     uint id;
//     string name;
//     string phone;
//   }  
  
  constructor() public {
    createVoter('Zafar Saleem', '123123123');
  }
  
  mapping(uint => Voter) public voters;
  
  function createVoter(string memory _name, string memory _phone) public {
    numberVoters++;
    voters[numberVoters] = Voter(numberVoters, _name, _phone);
  }
}