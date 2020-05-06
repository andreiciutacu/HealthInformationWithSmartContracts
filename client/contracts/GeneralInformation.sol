pragma solidity 0.5.16;
contract GeneralInformation{
	string name;
	uint age;
    string phone;
    string adress;
    string birthdate;
    string gender;
    string race;
    string language;
    string employeeStatus;
    string email;

	
	constructor() public {
		name = "Sample Name";
        age = 0;
        phone = "Not defined";
        adress = "Not defined";
        birthdate = "Not defined";
        gender = "Not defined";
        race = "Not defined";
        language = "Not defined";
        employeeStatus = "Not defined";
        email = "Not defined";
        
	} 
	function setName(string memory newName) public {
		name = newName;
	}
	
	function getName() public view returns (string memory) {
		return name; 
		
	}
	
	function setAge (uint newAge) public{
		age = newAge;
	}
	
	function getAge() public view returns (uint) {
		return age;
	}
	function setPhone(string memory newPhone) public {
		phone = newPhone;
	}
	
	function getPhone() public view returns (string memory) {
		return phone;
	}

    function setAdress(string memory newAdress) public {
		adress = newAdress;
	}
	
	function getAdress() public view returns (string memory) {
		return adress;
	}

    function setBirthdate(string memory newDate) public {
		birthdate = newDate;
	}
	
	function getBirthdate() public view returns (string memory) {
		return birthdate;
	}

    function setGender(string memory newGender) public {
        gender = newGender;
	}
	
	function getGender() public view returns (string memory) {
		return gender;
	}

    function setRace(string memory newRace) public {
		race = newRace;
	}
	
	function getRace() public view returns (string memory) {
		return race;
	}

    function setLanguage(string memory newLanguage) public {
		language = newLanguage;
	}
	
	function getLanguage() public view returns (string memory) {
		return language;
	}

    function setEmployeeStatus(string memory newEmployeeStatus) public {
		employeeStatus = newEmployeeStatus;
	}
	
	function getEmployeeStatus() public view returns (string memory) {
		return employeeStatus;
	}

    function setEmail(string memory newEmail) public {
		email = newEmail;
	}
	
	function getEmail() public view returns (string memory) {
		return email;
	}
}