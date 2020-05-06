pragma solidity >=0.4.21 <0.7.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/GeneralInformation.sol";


contract TestGeneralInfo {
  function testItStoresRightValues() public {
    GeneralInformation genInfo = GeneralInformation(DeployedAddresses.GeneralInformation());

    genInfo.setName('Monica Latte');
    string memory expected = 'Monica Latte';
    Assert.equal(genInfo.getName(), expected, "It should store the actual name");

    genInfo.setAge(70);
    //uint expected2 = 70;
    //Assert.equal( (double) genInfo.getAge(), (double) expected2, "It should be 70");

    genInfo.setPhone('444-444-4444');
    expected = '444-444-4444';
    Assert.equal(genInfo.getPhone(), expected, "It should be 444-444-4444");

    genInfo.setAdress('4444 Coffee Ave Chocolate, California');
    expected = '4444 Coffee Ave Chocolate, California';
    Assert.equal(genInfo.getAdress(), expected, "It should store the actual adress");

    genInfo.setBirthdate('04/04/1950');
    expected = '04/04/1950';
    Assert.equal(genInfo.getBirthdate(), expected, "It should store the actual birthdate");

    genInfo.setGender('Female');
    expected = 'Female';
    Assert.equal(genInfo.getGender(), expected, "It should store female");

    genInfo.setRace('Black');
    expected = 'Black';
    Assert.equal(genInfo.getRace(), expected, "It should store the race");
    
    genInfo.setLanguage('English');
    expected = 'English';
    Assert.equal(genInfo.getLanguage(), expected, "It should be English");

    genInfo.setEmployeeStatus('Full-time');
    expected = 'Full-time';
    Assert.equal(genInfo.getEmployeeStatus(), expected, "It should be full-time");

  }
}