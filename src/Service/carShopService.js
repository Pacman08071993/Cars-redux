/* eslint-disable require-await */
class CarShopService {
  #url = null;

  #text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
            irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.`;

  #categories = [
    { id: 1, name: 'BMW' },
    { id: 2, name: 'Mercedes' },
    { id: 3, name: 'Audi' },
    { id: 4, name: 'Volkswagen' },
    { id: 5, name: 'Toyota' },
    { id: 6, name: 'Skoda' },
    { id: 7, name: 'Seat' }
  ];
  #cars = [
    { id: 1, name: 'BMW', year: 2000, EC: 5.0, model: '5', fuel: 'petrol', description: this.#text },
    { id: 2, name: 'BMW', year: 2001, EC: 3.0, model: '3', fuel: 'diesel', description: this.#text },
    { id: 3, name: 'BMW', year: 2002, EC: 2.0, model: '3', fuel: 'petrol', description: this.#text },
    { id: 4, name: 'BMW', year: 2004, EC: 3.0, model: '4', fuel: 'petrol', description: this.#text },
    { id: 5, name: 'BMW', year: 2005, EC: 2.4, model: '7', fuel: 'petrol', description: this.#text },
    { id: 6, name: 'BMW', year: 2012, EC: 3.5, model: 'x1', fuel: 'petrol', description: this.#text },
    { id: 7, name: 'BMW', year: 2014, EC: 4.0, model: '7', fuel: 'petrol', description: this.#text },
    { id: 8, name: 'BMW', year: 2017, EC: 1.8, model: '4', fuel: 'petrol', description: this.#text },
    { id: 9, name: 'BMW', year: 2020, EC: 5.0, model: '3', fuel: 'petrol', description: this.#text },
    { id: 10, name: 'BMW', year: 2013, EC: 5.0, model: '2', fuel: 'petrol', description: this.#text },
    { id: 11, name: 'BMW', year: 2012, EC: 4.0, model: 'x5', fuel: 'petrol', description: this.#text },
    { id: 12, name: 'BMW', year: 2016, EC: 5.0, model: 'x6', fuel: 'petrol', description: this.#text },
    { id: 13, name: 'Mercedes', year: 2016, EC: 5.0, model: '140', fuel: 'petrol', description: this.#text },
    { id: 14, name: 'Mercedes', year: 2020, EC: 4.0, model: '221', fuel: 'diesel', description: this.#text },
    { id: 15, name: 'Mercedes', year: 2021, EC: 1.8, model: '222', fuel: 'diesel', description: this.#text },
    { id: 16, name: 'Mercedes', year: 2001, EC: 4.0, model: '220', fuel: 'petrol', description: this.#text },
    { id: 17, name: 'Mercedes', year: 2002, EC: 5.0, model: 's500', fuel: 'petrol', description: this.#text },
    { id: 18, name: 'Mercedes', year: 2000, EC: 1.8, model: '123', fuel: 'diesel', description: this.#text },
    { id: 19, name: 'Mercedes', year: 2007, EC: 2.0, model: '124', fuel: 'petrol', description: this.#text },
    { id: 20, name: 'Mercedes', year: 2009, EC: 1.8, model: 'cupe', fuel: 'diesel', description: this.#text },
    { id: 21, name: 'Audi', year: 2016, EC: 5.0, model: 'a8', fuel: 'petrol', description: this.#text },
    { id: 22, name: 'Audi', year: 2020, EC: 4.0, model: 'a5', fuel: 'petrol', description: this.#text },
    { id: 23, name: 'Audi', year: 2021, EC: 1.8, model: 'a5', fuel: 'diesel', description: this.#text },
    { id: 24, name: 'Audi', year: 2001, EC: 4.0, model: 'a3', fuel: 'diesel', description: this.#text },
    { id: 25, name: 'Audi', year: 2002, EC: 5.0, model: 'a3-cupe', fuel: 'diesel', description: this.#text },
    { id: 26, name: 'Audi', year: 2000, EC: 1.8, model: 'a4-cupe', fuel: 'petrol', description: this.#text },
    { id: 27, name: 'Audi', year: 2007, EC: 2.0, model: 'a7', fuel: 'diesel', description: this.#text },
    { id: 28, name: 'Audi', year: 2009, EC: 1.8, model: 'a3', fuel: 'petrol', description: this.#text },
    { id: 29, name: 'Volkswagen', year: 2016, EC: 5.0, model: 'jetta', fuel: 'diesel', description: this.#text },
    { id: 30, name: 'Volkswagen', year: 2020, EC: 4.0, model: 'aurion', fuel: 'petrol', description: this.#text },
    { id: 31, name: 'Volkswagen', year: 2021, EC: 3.0, model: 'tuareg', fuel: 'diesel', description: this.#text },
    { id: 32, name: 'Volkswagen', year: 2001, EC: 4.0, model: 'b8', fuel: 'diesel', description: this.#text },
    { id: 33, name: 'Volkswagen', year: 2002, EC: 5.0, model: 'b8', fuel: 'petrol', description: this.#text },
    { id: 34, name: 'Volkswagen', year: 2000, EC: 1.8, model: 'b7', fuel: 'diesel', description: this.#text },
    { id: 35, name: 'Volkswagen', year: 2007, EC: 2.0, model: 'b5', fuel: 'diesel', description: this.#text },
    { id: 36, name: 'Volkswagen', year: 2009, EC: 3.0, model: 'tuareg', fuel: 'diesel', description: this.#text },
    { id: 37, name: 'Skoda', year: 2016, EC: 5.0, model: 'a7', fuel: 'diesel', description: this.#text },
    { id: 38, name: 'Skoda', year: 2020, EC: 4.0, model: 'a5', fuel: 'diesel', description: this.#text },
    { id: 39, name: 'Skoda', year: 2021, EC: 1.8, model: 'a7', fuel: 'petrol', description: this.#text },
    { id: 40, name: 'Skoda', year: 2001, EC: 4.0, model: 'octavia', fuel: 'petrol', description: this.#text },
    { id: 41, name: 'Skoda', year: 2002, EC: 5.0, model: 'octavia', fuel: 'petrol', description: this.#text },
    { id: 42, name: 'Skoda', year: 2000, EC: 1.8, model: 'octavia-tuor', description: this.#text },
    { id: 43, name: 'Skoda', year: 2007, EC: 2.0, model: 'fabia', fuel: 'diesel', description: this.#text },
    { id: 44, name: 'Skoda', year: 2009, EC: 1.8, model: 'fabia', fuel: 'diesel', description: this.#text },
    { id: 45, name: 'Seat', year: 2016, EC: 5.0, model: 'z33', fuel: 'diesel', description: this.#text },
    { id: 46, name: 'Seat', year: 2020, EC: 4.0, model: 'z35', fuel: 'petrol', description: this.#text },
    { id: 47, name: 'Seat', year: 2021, EC: 1.8, model: 'z33', fuel: 'petrol', description: this.#text },
    { id: 48, name: 'Seat', year: 2001, EC: 4.0, model: 'a1', fuel: 'diesel', description: this.#text },
    { id: 49, name: 'Seat', year: 2002, EC: 5.0, model: 'b23', fuel: 'diesel', description: this.#text },
    { id: 50, name: 'Seat', year: 2000, EC: 1.8, model: 'z35', fuel: 'diesel', description: this.#text },
    { id: 51, name: 'Seat', year: 2007, EC: 2.0, model: 'z4', fuel: 'petrol', description: this.#text },
    { id: 52, name: 'Seat', year: 2009, EC: 1.8, model: 'a3', fuel: 'diesel', description: this.#text },
    { id: 53, name: 'Toyota', year: 2016, EC: 5.0, model: 'camry', fuel: 'diesel', description: this.#text },
    { id: 54, name: 'Toyota', year: 2020, EC: 4.0, model: 'camry', fuel: 'diesel', description: this.#text },
    { id: 55, name: 'Toyota', year: 2021, EC: 1.8, model: 'camry', fuel: 'petrol', description: this.#text },
    { id: 56, name: 'Toyota', year: 2001, EC: 4.0, model: 'auris', fuel: 'diesel', description: this.#text },
    { id: 57, name: 'Toyota', year: 2002, EC: 5.0, model: 'auris', fuel: 'petrol', description: this.#text },
    { id: 58, name: 'Toyota', year: 2000, EC: 1.8, model: 'avensis', fuel: 'petrol', description: this.#text },
    { id: 59, name: 'Toyota', year: 2007, EC: 2.0, model: 'corolla', fuel: 'diesel', description: this.#text },
    { id: 60, name: 'Toyota', year: 2009, EC: 1.8, model: 'corolla', fuel: 'petrol', description: this.#text }
  ];

  getListCategories = async() => this.#categories;
  getCarList = async() => this.#cars;
  getCarCategory = async category => this.#cars.filter(item => item.name === category);
  getCar = async id => this.#cars.find(item => item.id === Number(id));
}

const carShop = new CarShopService();

export default carShop;