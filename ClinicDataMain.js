const ClinicData = require("./ClinicData");
const read = require('readline-sync');

let clinicData = new ClinicData();
flag = true;

while (flag) {
    console.log("1. Insert Patient Data in Clinic Book");
    console.log("2. Display the list of Patient");
    console.log("3. Edit Patient Data in Clinic Book");
    console.log("4. Delete Patient Data in Clinic Book");
    console.log("5. to exit");
    let option = parseInt(read.question("Enter your choise: "));

    switch(option) {
        case 1:
            console.log("welcome to ClinicData")
            clinicData.insertPatientData();
            break;
        case 2:
            console.log(clinicData.readPatientData());
            break;
        case 3:
            clinicData.editPatientData();
            break;
        case 4:
            clinicData.deletePatientData();
            break;
        case 5:
            flag = false;
            console.log("Exit From ClinicDataManagement")
            break;
        default:
            console.log("You have entered invalid input!");
            break;

    }
}