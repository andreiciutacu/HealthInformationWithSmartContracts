const GeneralInformation = artifacts.require("./GeneralInformation.sol");

contract("GeneralInformation", accounts => {
    it('it has correct name value', async () => {
          const genInfo = await GeneralInformation.deployed()
          const value = await genInfo.getName()
          assert.equal(value, 'Sample Name')
      });

      it('it has correct age', async () => {
        const genInfo = await GeneralInformation.deployed()
        const value = await genInfo.getAge()
        assert.equal(value, 0)
    });  

    it('it has correct phone value', async () => {
        const genInfo = await GeneralInformation.deployed()
        const value = await genInfo.getPhone()
        assert.equal(value, 'Not defined')
    });

    it('it has correct adress value', async () => {
        const genInfo = await GeneralInformation.deployed()
        const value = await genInfo.getAdress()
        assert.equal(value, 'Not defined')
    });

    it('it has correct birthdate value', async () => {
        const genInfo = await GeneralInformation.deployed()
        const value = await genInfo.getBirthdate()
        assert.equal(value, 'Not defined')
    });

    it('it has correct gender value', async () => {
        const genInfo = await GeneralInformation.deployed()
        const value = await genInfo.getGender()
        assert.equal(value, 'Not defined')
    });

    it('it has correct race value', async () => {
        const genInfo = await GeneralInformation.deployed()
        const value = await genInfo.getRace()
        assert.equal(value, 'Not defined')
    });

    it('it has correct language value', async () => {
        const genInfo = await GeneralInformation.deployed()
        const value = await genInfo.getLanguage()
        assert.equal(value, 'Not defined')
    });

    it('it has correct employee status', async () => {
        const genInfo = await GeneralInformation.deployed()
        const value = await genInfo.getEmployeeStatus()
        assert.equal(value, 'Not defined')
    });

    // Checking if we can update
    it('can update name', async () => {
        const genInfo = await GeneralInformation.deployed()
        genInfo.setName('Monica Latte');
        const value = await genInfo.getName()
        assert.equal(value, 'Monica Latte')
    }); 

    it('can update phone number', async () => {
        const genInfo = await GeneralInformation.deployed()
        genInfo.setPhone('444-444-4444');
        const value = await genInfo.getPhone()
        assert.equal(value, '444-444-4444')
    }); 

    it('can update adress', async () => {
        const genInfo = await GeneralInformation.deployed()
        genInfo.setAdress('4444 Coffee Ave Chocolate, California');
        const value = await genInfo.getAdress()
        assert.equal(value, '4444 Coffee Ave Chocolate, California')
    }); 

    it('can update birthdate', async () => {
        const genInfo = await GeneralInformation.deployed()
        genInfo.setBirthdate('04/04/1950');
        const value = await genInfo.getBirthdate()
        assert.equal(value, '04/04/1950')
    }); 

    it('can update gender', async () => {
        const genInfo = await GeneralInformation.deployed()
        genInfo.setGender('Female');
        const value = await genInfo.getGender()
        assert.equal(value, 'Female')
    }); 

    it('can update race', async () => {
        const genInfo = await GeneralInformation.deployed()
        genInfo.setRace('Black');
        const value = await genInfo.getRace()
        assert.equal(value, 'Black')
    }); 

    it('can update language', async () => {
        const genInfo = await GeneralInformation.deployed()
        genInfo.setLanguage('English');
        const value = await genInfo.getLanguage()
        assert.equal(value, 'English')
    }); 

    it('can update employee status', async () => {
        const genInfo = await GeneralInformation.deployed()
        genInfo.setEmployeeStatus('Full-time');
        const value = await genInfo.getEmployeeStatus()
        assert.equal(value, 'Full-time')
    }); 
      
  });