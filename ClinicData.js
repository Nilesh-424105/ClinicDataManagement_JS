// importing PatientInformation class file is in ClinicData class file
const PatientInformation = require("./PatientInformation");
const pattern = require("./Regex");
const read = require('readline-sync');
var patientList = new Array();
var patientData = new PatientInformation();
const fs = require('fs');

// Read Details From Clinic.json file
function readFileData() {
    let readData = fs.readFileSync('./Clinic.json', 'utf8');
    let myObject = JSON.parse(readData);
    return myObject;
}

// Write Details in Address.json file
function writeFileData(myObject) {
    let writeData = JSON.stringify(myObject);
    return fs.writeFileSync('./Clinic.json', writeData);
}


class ClinicData {

    // insert Patient Details is in ClinicData Book
    insertPatientData() {
        // Ability to add values to the ClinicData
        // var patientData = new PatientInformation();
        // var pattern = new Regpattern();

        // Ability to add user-defined values to the ClinicData
        // patientData.patientName = pattern.checkRegexForName(read.question("Enter First Name: "));


        // if(((patientData.patientName=(pattern.checkRegexForName(read.question("Enter First Name: ")) != true)))){
        //      pattern.checkRegexForName(read.question("Enter First Name: "));

        // }
        // else{
        //     console.log("Pleaze Enter First Name Again")
        //     patientData.patientName = pattern.checkRegexForName(read.question("Enter First Name: "));

        // }
         // Ability to add user-defined values to the ClinicData Book
        patientData.patientName = read.question("Enter Patient Name: ");
        pattern.checkRegexForName(patientData.patientName);
        patientData.patientId = read.question("Enter Patient Id: ");
        pattern.checkRegexForPatientID(patientData.patientId);
        patientData.address = read.question("Enter address: ");
        patientData.city = read.question("Enter City: ");
        pattern.checkRegexForName(patientData.city);
        patientData.state = read.question("Enter State: ");
        pattern.checkRegexForName(patientData.state);
        patientData.weight = read.question("Enter weight: ");
        patientData.phoneNumber = read.question("Enter PhoneNumber: ");
        pattern.checkRegexForMobile(patientData.phoneNumber);
        patientData.email = read.question("Enter Email: ");
        pattern.checkRegexForEmail(patientData.email);
        patientData.gender = read.question("Enter Gender: ");
        patientData.bloodGroup = read.question("Enter bloodGroup: ");
        // console.log(patientData.toString());
        patientList.push(patientData);
        let myJson = readFileData();
        myJson.push(patientData);
        writeFileData(myJson);
        return patientList;
    }

    // Read Patient Details from Clinic Data Book
    readPatientData() {
        // console.log(patientList);
        return patientList;
    }

     // Edit Details is in CliniData Book
     editPatientData() {
        let edit = read.question("Enter the Name Of The Patient would be Update: ");
        console.log(edit);
        // let contactToBeUpdated = contactList.findIndex(x => x.firstName == updateContact);
        let option = (parseInt)(read.question("Pleaze Enter \n 1.PateintName \n 2.BloodGroup \n 3.City \n 4.State \n 5.PatientID \n 6.PhoneNumber\n Enter Your Option: "));

        switch (option) {
            case 1:
                //  let contactToBeUpdated = contactList.find(x => x.setfirstName() == updateContact);
                // let updateContacts = read.question("plz enter the new name to change: ");
                //  contactToBeUpdated.firstName;
                //  console.log(updateContacts);
                let pName = read.question("Enter the Name Of The Patient: ");
                let updatePName = read.question("plz enter the new Pateint Name to be Change: ");
                let PNameToBeUpdated = patientList.findIndex(x => x.patientName == pName)
                patientList[PNameToBeUpdated].patientName = updatePName;
                break;
            case 2:
                let bGroup = read.question("Enter the Blood Group Of The Patient: ");
                let updateBGroup = read.question("plz enter the new Last Name to be change: ");
                let bGroupToBeUpdated = patientList.findIndex(x => x.bloodGroup == bGroup)
                patientList[bGroupToBeUpdated].bloodGroup = updateBGroup;
                break;
            case 3:
                let cityName = read.question("Enter the city Of The Patient: ");
                let updateCity = read.question("plz enter the new city to be change: ");
                let cityToBeUpdated = patientList.findIndex(x => x.city == cityName)
                patientList[cityToBeUpdated].city = updateCity;
                break;
            case 4:
                let stateName = read.question("Enter the state Of The Pateint: ");
                let updateState = read.question("plz enter the new state to be change: ");
                let stateToBeUpdated = patientList.findIndex(x => x.state == stateName)
                patientList[stateToBeUpdated].state = updateState;
                break;
            case 5:
                let pId = read.question("Enter the ID Of The Patient: ");
                let newPId = read.question("plz enter the new PatientID to be change: ");
                let pIdToBeUpdated = patientList.findIndex(x => x.patientId == pId)
                patientList[pIdToBeUpdated].patientId = newPId;
                break;
            case 6:
                let mob = read.question("Enter the PhoneNumber Of The Patient: ");
                let newMob = read.question("plz enter the new PhoneNumber to be change: ");
                let mobToBeUpdated = patientList.findIndex(x => x.phoneNumber == mob)
                patientList[mobToBeUpdated].phoneNumber = newMob;
                break;
        }
    }

    // Delete Patient Details From Clinic Data Book
    deletePatientData() {
            // let pName = read.question("Enter the First Name of the Patient : ");
            // patientList.forEach(contact => {
            //     if ((contact.patientName === pName) == true) {
            //         let index = patientList.indexOf(pName);
            //         patientList.splice(index, 1);
            //         console.log("PatientDetails is deleted");
            //     }
            //     else {
            //         console.log("No PatientDetails present with this name!");
            //     }
            // });
            // return patientList;
            let pName = read.question("Enter the First Name of the Pateint : ");
            let myJson = readFileData();
            for (let index = 0; index < myJson.length; index++) {
                if ((myJson[index].patientName == pName)) {
                    myJson.splice(index, 1);
                }
            }
            writeFileData(myJson);
            console.log("PatientDetails is deleted");
        }
}

// Exporting CliniData class file is in ClinicDataMain class file
module.exports = ClinicData;