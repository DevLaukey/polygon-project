pragma solidity ^0.5.16;

contract Contacts {
  uint public count = 0; // state variable
  
  struct Contact {
    uint id;
    string name;
    string phone;
  }
  
  
  mapping(uint => Contact) public contacts;
  
  function createContact(string memory _name, string memory _phone) public {
    count++;
    contacts[count] = Contact(count, _name, _phone);
  }

  constructor() public {
    createContact('Zafar Saleem', '123123123');
  }
}