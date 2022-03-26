pragma solidity ^0.5.16;

contract Contacts {
  uint public count = 0; // state variable
  
  struct Contact {
    uint id;
    string name;
    string phone;
  }
  
  constructor() public {
    createContact('Zafar Saleem', '123123123');
  }
  
  mapping(uint => Contact) public contacts;
  
  function createContact(string memory _name, string memory _phone) public {
    count++;
    msg.sender[contacts].name = _name;
    msg.sender[contacts].phone = _phone;

    return contacts[count] = Contact(count, _name, _phone);
    
  }

}