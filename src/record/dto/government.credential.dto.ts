export interface GovernmentCredentialDto {
    nationalId: string;
    nationalIssueDate: string;
    voterId: string;
    voterIssueDate: string;
    firstName: string;
    middleName: string;
    lastName: string;
    gender: string;
    birthDate: string;
    birthPlace: string;
    residentialAddress: string;
    permanentAddress: string;
    phoneNumber: string;
    motherFirstName: string;
    motherLastName: string;
    fatherFirstName: string;
    fatherLastName: string;
    occupation: string;
    maritalStatus: string;
    photoURL: string; //  // store the photo in s3 and store a link to it in postgres
    signatureURL: string; //  // store the signature image in s3 and store a link to it in postgres
}