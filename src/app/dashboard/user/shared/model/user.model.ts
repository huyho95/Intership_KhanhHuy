export class User {
  id: string;
  fullName: string;
  fullNameUser: string;
  accountEmail: string;
  cellPhoneNumber: string;
  identityCard: string;
  identityCardIssuedDate: number;
  identityCardIssuedBy: string;
  images: string[];
  houseRegistrationImages: string[];
  supplyChainTypes: {
    key: string;
    value: string;
    displayText: string;
    code: string;
    typeGroup: string;
  }[];
  country: {
    key: string;
    value: string;
    displayText: string;
    code: string;
    typeGroup: string;
  };
  province: {
    key: string;
    value: string;
    displayText: string;
    code: string;
    typeGroup: string;
  };
  district: {
    key: string;
    value: string;
    displayText: string;
    code: string;
    typeGroup: string;
  };
  commune: {
    key: string;
    value: string;
    displayText: string;
    code: string;
    typeGroup: string;
  };
  village: string;
  street: string;
  permanentAddressCountry: {
    key: string;
    value: string;
    displayText: string;
    code: string;
    typeGroup: string;
  };
  permanentAddressProvince: {
    key: string;
    value: string;
    displayText: string;
    code: string;
    typeGroup: string;
  };
  permanentAddressDistrict: {
    key: string;
    value: string;
    displayText: string;
    code: string;
    typeGroup: string;
  };
  permanentAddressCommune: {
    key: string;
    value: string;
    displayText: string;
    code: string;
    typeGroup: string;
  };
  permanentAddressVillage: string;
  permanentAddressStreet: string;
  diffrentAddressReason: string;
  shortName: string;
  enterpriseType: {
    key: string;
    value: string;
    displayText: string;
    code: string;
    typeGroup: string;
  };
  businessTypes: {
    id: string;
    name: string;
    description: string;
    parentId: string;
    sortOrder: number;
    registFor: string;
  }[];
  taxCode: string;
  representativeName: string;
  representativePosition: string;
  representativeIdCard: string;
  representativePhoneNumber: string;
  representativeEmail: string;
  phoneNumber: string;
  fax: string;
  website: string;
  coCode: string;
  ceCode: string;
  ownershipType: string;
  ownershipTypeDescription: string;
  establishmentDate: number;
  registrationCertificateDate: number;
  registrationCertificatePlace: string;
  organizationType: string;
  organizationTypeDescription: string;
  contactName: string;
  contactPosition: string;
  logoImage: string;
  forestOwnerType: {
    key: string;
    value: string;
    displayText: string;
    code: string;
    typeGroup: string;
  };
  updatedDate: number;
}
