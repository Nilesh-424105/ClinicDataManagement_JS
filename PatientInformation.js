const read = require("readline-sync");

class PatientInformation {
    // property
    patientName;
    patientId;
    address;
    city;
    state;
    weight;
    phoneNumber;
    email;
    gender;
    bloodGroup;


    

   // patientName, patientId, address, city, state, weight, phoneNumber, email, gender, bloodGroup
    // constructor
    constructor(patientName, patientId, address, city, state, weight, phoneNumber, email, gender, bloodGroup) {
        this.patientName = patientName;
        this.patientId = patientId;
        this.address = address;
        this.city = city;
        this.state = state;
        this.weight = weight;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.gender = gender;
        this.bloodGroup = bloodGroup;
    }

    // setters and getters
    getpatientName() {
        return this._patientName;
    }
    
    setpatientName(patientName) {
         this._patientName = patientName;
    }

    get patientId() {
        return this._patientId;
    }
    set patientId(patientId) {
            this._patientId = patientId;
    }

    get address() {
        return this._address;
    }
    
    set address(address) {
            this._address = address;
    }

    get city() {
        return this._city;
    }
    
    set city(city) {
            this._city = city;
    }

    get state() {
        return this._state;
    }
    
    set state(state) {
            this._state = state;
    }

    get weight() {
        return this._weight;
    }
    
    set weight(weight) {
            this._weight = weight;
    }


    get phoneNumber() {
        return this._phoneNumber;
    }
    
    set phoneNumber(phoneNumber) {
            this._phoneNumber = phoneNumber;
    }


    get email() {
        return this._email;
    }
    
    set email(email) {
            this.email = email;
    }


    get gender() {
        return this._gender;
    }
    
    set gender(gender) {
            this._gender = gender;
    }

    get bloodGroup() {
        return this._bloodGroup;
    }
    
    set bloodGroup(bloodGroup) {
            this._bloodGroup = bloodGroup;
    }

    
    // tostring
    toString() {
        return "patientName=" + this.patientName
            + ", patientId=" + this.patientId
            + ", address=" + this.address
            + ", city=" + this.city
            + ", state=" + this.state
            + ", weight=" + this.weight
            + ", phoneNumber=" + this.phoneNumber
            + ", email=" + this.email
            + ", gender=" + this.gender
            + ", bloodGroup=" + this.bloodGroup;
    }
}

//exporting the class file to another class
module.exports = PatientInformation;