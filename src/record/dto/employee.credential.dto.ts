export interface EmployeeCredentialDto {
    firstName: string;
    lastName: string;
    companyEmail: string;
    hireDate: string;
    currentTitle: string;
    team: string;
    officeLocation: string;
    photoURL: string; // store the photo in s3 and store a link to it in postgres
    type: string;
    endDate: string;
    phoneNumber: string;
}
