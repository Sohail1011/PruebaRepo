// api
// front

// empty
interface CompanyUser {
  bs: string;
  catchPhrase: string;
  name: string;
}

interface AddressUser {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoUser;
}

interface GeoUser {
  lat: string;
  lng: string;
}

export interface ApiUser {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  company: CompanyUser;
  address: AddressUser;
}
