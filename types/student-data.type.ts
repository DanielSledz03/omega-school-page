export interface StudentData {
  fullName: string;
  peselOrPassportNumber: string;
  dateAndPlaceOfBirth: string;
  address: string;
  registeredAddress?: string;
  districtSchoolData?: string;
  healthCertificate: boolean | undefined;
  medicalOpinion: boolean | undefined;
  otherRelevantInformation?: string;
}
