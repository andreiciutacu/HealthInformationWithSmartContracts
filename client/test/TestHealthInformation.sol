pragma solidity >=0.4.21 <0.7.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/HealthInformation.sol";


contract TestHealthInformation {
  function testFunctionsWork() public {
    HealthInformation hInfo = HealthInformation(DeployedAddresses.HealthInformation());

    hInfo.addProblems('DIABETES MELLITUS (ICD-250.) \n');
    hInfo.addProblems('HYPERTENSION, BENIGN ESSENTIAL (ICD-401.1) \n');

    hInfo.addMedications('PRINIVIL TABS 20 MG (LISINOPRIL) 1 po qd\n');
    hInfo.addMedications('HUMULIN INJ 70/30 (INSULIN REG & ISOPHANE (HUMAN)) 20 units ac breakfast \n');

    hInfo.addDirectives('FLU VAX, PNEUMOVAX, MICROALB URN \n');

    hInfo.addToHistory('Diabetes Management  Hyperglycemic Symptoms Polyuria: no Polydipsia: no Blurred vision: no ');
    hInfo.addToHistory('Sympathomimetic Symptoms Diaphoresis: noAgitation: no Tremor: no Palpitations: no Insomnia: no');

  }

  function testItStoredRightHealthValues() public {
      HealthInformation hInfo = HealthInformation(DeployedAddresses.HealthInformation());
      string memory expected = 'DIABETES MELLITUS (ICD-250.) \nHYPERTENSION, BENIGN ESSENTIAL (ICD-401.1) \n';
      Assert.equal(hInfo.getProblems(), expected, "It shouldn't be null");
  }
}