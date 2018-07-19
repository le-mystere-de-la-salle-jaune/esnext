//let
let favoriteCityId = 'rome';
console.log(favoriteCityId);


favoriteCityId = 'paris';
console.log(favoriteCityId);

//const
const citiesId = ['paris', 'nyc', 'rome', 'rio-de-janeiro'];
console.log(citiesId);

/*citiesId = []; // la commande ne focntionne pas puisque const
console.log(citiesId);*/
citiesId.push('tokyo');
console.log(citiesId);

// Création d'objet
function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    return {city, temperature};
}

const weather = getWeather(favoriteCityId);
console.log(weather);

//affectation destructurée
let affectation = {city : weather.city, temperature : weather.temperature};

let {city, temperature} = affectation;

console.log(city);
console.log(temperature);

// Rest operator
const  [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

// Classe

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
    toString() {
        return 'Trip [' + this.id + ', ' + this.name + ', ' + this.imageUrl + ', ' + this.price + ']';
    }

    get price(){
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    static getDefaultTrip() {
        return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
    }
}

let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg')
parisTrip.price = 100;
console.log(parisTrip);

console.log(parisTrip.name);

console.log(parisTrip.toString());

console.log(parisTrip.price);

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());


// Héritage

class FreeTrip extends Trip {
    constructor(id, name, imageUrl, price) {
        super(id, name, imageUrl);
        this.price = 0;
    }
    toString() {
        return 'Free' + super.toString();
    }
}

const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');
console.log(freeTrip.toString());

// Promise, Set, Map, Arrow Function

class TripService {

    constructor() {
        this.trips = new Set();
        trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        trips.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName) {
        return new Promise(resolve, reject) => )
    }
}

class PriceService {

    constructor() {
        this.trips = new Map();
        this.trips.set('paris', 100);
        this.trips.set('rio-de-janeiro', 800);
    }

    findPriceByTripId(tripId) {
        // TODO return promise
    }
}





