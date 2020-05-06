pragma solidity 0.5.16;

contract HealthInformation{

    string problems;
    string medications;
    string directives;
    string history;

    constructor() public {
		problems = '';
        medications = '';
        directives = '';
        history = '';     
	} 

    function concat(string memory _a, string memory _b) public pure returns (string memory) {
        bytes memory bytes_a = bytes(_a);
        bytes memory bytes_b = bytes(_b);
        string memory length_ab = new string(bytes_a.length + bytes_b.length);
        bytes memory bytes_c = bytes(length_ab);
        uint k = 0;
        uint i ;
        for (i = 0; i < bytes_a.length; i++) bytes_c[k++] = bytes_a[i];
        for (i = 0; i < bytes_b.length; i++) bytes_c[k++] = bytes_b[i];
        return string(bytes_c);
    }

    function addProblems(string memory newProblems) public {
		problems = concat(problems, newProblems);
	}
	
	function getProblems() public view returns (string memory) {
		return problems; 
		
	}

    function addMedications(string memory newMedication) public {
		medications = concat(medications,newMedication);
	}
	
	function getMedications() public view returns (string memory) {
		return medications; 
		
	}

    function addDirectives(string memory newDirectives) public {
		directives = concat(directives,newDirectives);
	}
	
	function getDirectives() public view returns (string memory) {
		return directives; 
		
	}

    function addToHistory(string memory newToHistory) public {
		history = concat(history,newToHistory);
	}
	
	function getHistory() public view returns (string memory) {
		return history; 
		
	}



}