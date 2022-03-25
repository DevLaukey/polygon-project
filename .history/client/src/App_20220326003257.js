import React from "react";
import { useEffect, useState } from "react";
import Web3 from "web3";
import { VOTERS_ABI, VOTERS_ADDRESS } from "./config";

function App() {
  const [account, setAccount] = useState(); // state variable to set account.
  const [votersList, setVotersList] = useState();
  const [voters, setVoters] = useState([]);

  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);
      // Instantiate smart contract using ABI and address.
      const votersList = new web3.eth.Contract(VOTERS_ABI, VOTERS_ADDRESS);
      // set voters list to state variable.
      setVotersList(votersList);
      // Then we get total number of voters for iteration
      const counter = await votersList.methods.vote().call();
      // iterate through the amount of time of counter
      for (var i = 1; i <= counter; i++) {
        // call the voterss method to get that particular voters from smart contract
        const voters = await votersList.methods.voters(i).call();
        // add recently fetched voters to state variable.
        setVoters((voters) => [...voters, voters]);
      }
    }

    load();
  }, []);

  return <div>Your account is: {account}</div>;
}
export default App;
