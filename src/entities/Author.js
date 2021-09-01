// class with getters and private ivars to ensure immutability

class Author {
  constructor(id, name, username, email, phone, street, city, zipcode, latitude, longitude, companyName, companySlogan) {
    this._id = id;
    this._name = name;
    this._username = username;
    this._email = email;
    this._phone = phone;
    this._street = street;
    this._city = city;
    this._zipcode = zipcode;
    this._latitude = latitude;
    this._longitude = longitude;
    this._companyName = companyName;
    this._companySlogan = companySlogan;
  }

  get id() { return this._id; }
  get name() { return this._name };
  get username() { return this._username };
  get email() { return this._email };
  get phone() { return this._phone };
  get street() { return this._street };
  get city() { return this._city };
  get zipcode() { return this._zipcode };
  get latitude() { return this._latitude };
  get longitude() { return this._longitude };
  get companyName() { return this._companyName };
  get companySlogan() { return this._companySlogan };

}

export default Author;