const PatientInformation = require("./PatientInformation");

//  class RegexPattern {
     exports.checkRegexForName = function checkRegexForName(value) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(value)){
            this.value = value;
        }else{
            console.log("Invalid Input");
        }        
     }

     exports.checkRegexForPatientID = function checkRegexForPatientID(value){
        let pidRegex = RegExp('^([0-9]{6})|([0-9]{3}(\\s)[0-9]{3})$');
        if(pidRegex.test(value)){
            this.value = value;
        }else{
            throw 'Patient Id is Incorrect';
        }
     }

     exports.checkRegexForMobile = function checkRegexForMobile(value) {
        let phoneRegex = RegExp('^(0|91)?[\\s][0-9]{10}$');
        if(phoneRegex.test(value)){
            this.value = value;
        }else{
            throw 'PhoneNumber is Incorrect';
        }
     }

     exports.checkRegexForEmail = function checkRegexForEmail(value) {
        let emailRegex = RegExp('^[A-Za-z0-9!#$%&*+\\\\=?`{|}~^-]+(?:\\.[A-Za-z!#$%&*+\\\\=?`{|}~^-]+)*@(?:([0-9-]{1}|[a-zA-Z]{3,5})\\.)+[a-zA-Z]{2,3}$');
        if(emailRegex.test(value)){
            this.value = value;
        }else{
            throw 'Email is Incorrect';
        }
     }
//  }
 
// module.exports = RegexPattern;