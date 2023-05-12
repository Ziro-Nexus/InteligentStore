export enum business {
  Manufacturer = 'Frabricante',
  Distributor = 'Distribuidor',
  Retailer = 'Minorista o Tienda',
  Franchises = 'Franquicias',
  Ecommerce = 'Comercio electrónico',
  Service = 'Servicios',
  Aggregator = 'Agregador',
  Advertiser = 'Publicista'
}
export class SigUp {
  name: string;
  email: string;
  dateOfBirth?: Date;
  password: string;
  confirmPassword: string;
  typeOfBusiness: string;
  constructor(
    cName: string = '',
    cEmail: string = '',
    cPassword: string = '',
    cConfirmPassword: string = '',
    cDateOfBirth: Date = new Date(),
    cTypeOfBusiness: string = business.Service,
  ) {
    this.name = cName;
    this.email = cEmail;
    this.dateOfBirth = cDateOfBirth;
    this.password = cPassword;
    this.confirmPassword = cConfirmPassword;
    cTypeOfBusiness = cTypeOfBusiness;
  }
}
