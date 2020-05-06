import React, { Component } from "react";
import GeneralInformation from "./build/GeneralInformation.json"
import getWeb3 from "./getWeb3";
import "./App.css";
import Web3 from "web3";

var $ = require('F:/Uni/blockchain-prj/client/src/jquery')
var TruffleContract = require("F:/Uni/blockchain-prj/client/truffle-contract");

class App extends Component {
  componentDidMount = async () => {
    try {
      const web3 = await getWeb3();

      const accounts = await web3.eth.getAccounts();

      const networkId = await web3.eth.net.getId();

     const deployedNetwork = GeneralInformation.networks[networkId];
     var genInfo = new web3.eth.Contract(
        GeneralInformation.abi, deployedNetwork && deployedNetwork.address
        );
      genInfo.options.adress = '0x6148b282af3FA9da05E3F4d3A4e507a6eCD5e9A1';
      //var GeneralInfo = genInfo.at('0x6148b282af3FA9da05E3F4d3A4e507a6eCD5e9A1');
      this.state.name = await genInfo.methods.getName();
      this.state.age = await genInfo.methods.getAge();
      this.state.phone = await genInfo.methods.getPhone();
      this.state.adress = await genInfo.methods.getAdress();
      this.state.birthdate = await genInfo.methods.getBirthdate();
      this.state.gender = await genInfo.methods.getGender();
      this.state.race = await genInfo.methods.getRace();
      this.state.language = await genInfo.methods.getLanguage();
      this.state.employeeStatus = await genInfo.methods.getEmployeeStatus();
      this.state.email = await genInfo.methods.getEmail();
 

      this.setState({ web3, accounts, contract: genInfo}, this.loadContract);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(console.log(error)
      );
      console.error(error);
    }
  }; 
  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };



  async handleSubmit(event) {
    event.preventDefault();
    await this.updateValue();
  };

  async handleSubmitName(event) {
    event.preventDefault();
    await this.updateName();
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  };

  handleChangeName(event) {
    this.setState({name: event.target.newname});
  };

  updateValue = async() => {
    const {accounts, contract, value} = this.state;
      await contract.methods.set(value).send({ from: accounts[0]});
    const response = await contract.methods.get().call();
    
    // Update state with result
    this.setState({storageValue: response});
  }; 

  updateName = async() => {
    const {accounts, contract, name} = this.state;
      await contract.methods.setName(name).send({ from: accounts[0]});
    const response = await contract.methods.getName().call();
    
    // Update state with result
    this.setState({name: response});
  };

  loadAccount =  async () => {
    // Set the current blockchain account
    const web3 = await getWeb3();
    App.account = web3.eth.getAccounts();
  };

  loadContract () {
    // Create a JavaScript version of the smart contract
    const hInfo = $.getJSON('HealthInformation.json');
    App.contracts.HealthInformation = TruffleContract(hInfo);
    App.contracts.HealthInformation.setProvider(App.web3Provider);

    // Hydrate the smart contract with values from the blockchain
    App.hInfo = App.contracts.HealthInformation.deployed();

    this.state.name = hInfo.getName();
  };
  


  render() {
    this.loadAccount();
    this.loadContract();
    return (
      <div className="App">
        <h2>General Patient Information</h2>
        <h5> Below you can find your information and update it </h5>
        <div>Name: {this.state.name}</div>
        <div>Age: {this.state.age}</div>
        <div>Phone: {this.state.phone}</div>
        <div>Adress: {this.state.adress}</div>
        <div>Birthdate: {this.state.birthdate}</div>
        <div>Gender: {this.state.gender}</div>
        <div>Race: {this.state.race}</div>
        <div>Language: {this.state.language}</div>
        <div>Employee Status: {this.state.employeeStatus}</div>
        <div>Email: {this.state.email}</div>

           <form onSubmit={this.handleSubmitName}>
            <div className="form-group">
              <input id="newName" newname={this.state.name} onChange={this.handleChangeName} type="text"></input>
            </div>
            <button type="submit" className="btn btn-primary">Change Name</button>
          </form>
        <div>The stored value is: {this.state.storageValue}</div>
      </div>
    );
  };

  constructor(props) {
    super(props);

    this.state={value:'', storageValue: '', name: '', age: 0, phone: '',
           adress: '', birthdate: '', gender: '', race: '',
           language: '', employeeStatus:'', email: '',
           web3: null, accounts: null, contract: null};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
}

export default App;
