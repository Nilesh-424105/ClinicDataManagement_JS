// import ClinicData Class File is in ClinicDataMain Class File
const ClinicData = require("./ClinicData");
const read = require('readline-sync');

let clinicData = new ClinicData();
flag = true;

while (flag) {
    console.log("welcome to ClinicDataManagement Program")
    console.log("1. Insert Patient Data in Clinic Book");
    console.log("2. Display the list of Patients and Number of Patients");
    console.log("3. Edit Patient Data in Clinic Book");
    console.log("4. Delete Patient Data in Clinic Book");
    console.log("5. Search Patient Data in Clinic Book");
    console.log("6. to exit");
    let option = parseInt(read.question("Enter your choise: "));

    switch (option) {
        case 1:
            clinicData.insertPatientDetails();
            break;
        case 2:
            clinicData.readPatientDetails();
            break;
        case 3:
            clinicData.editPatientDetails();
            break;
        case 4:
            clinicData.deletePatientDetails();
            break;
        case 5:
            clinicData.searchPatientDetails();
            break;
        case 6:
            flag = false;
            console.log("Exit From ClinicDataManagement")
            break;
        default:
            console.log("You have entered invalid input!");
            break;

    }
}