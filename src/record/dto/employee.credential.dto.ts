export interface EmployeeCredentialDto {
    firstName: string;
    lastName: string;
    companyEmail: string;
    hireDate: Date;
    currentTitle: string;
    team: string;
    officeLocation: string;
    photoURL: string; // store the photo in s3 and store a link to it in postgres
    type: string;
    endDate: Date;
    phoneNumber: string;
}
