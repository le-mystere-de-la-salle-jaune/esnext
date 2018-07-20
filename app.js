const lg = console.log;
let favoriteCityId = 'rome';
lg(favoriteCityId);

favoriteCityId = 'paris';
lg(favoriteCityId);

const cityId = ['paris', 'nyc', 'rome', 'rio-de-janeiro'];
lg(cityId);

//cityId = [];

cityId.push('tokyo');
lg(cityId);

let getWeather = function (cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    return { city, temperature };
}

const weather = getWeather(favoriteCityId);
lg(weather);

let {
    city,
    temperature
} = weather;
lg(city);
lg(temperature);

const [parisId, nycId, ...othersCitiesId] = cityId;
lg(parisId);
lg(nycId);
lg(othersCitiesId.length);

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    toString() {
        return 'Trip [' + this.id + ', ' + this.name + ', ' + this.imageUrl + ', ' + this._price + ']';
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    static getDefaultTrip() {
        return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
    }
}

let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');
lg(parisTrip);
lg(parisTrip.name);
lg(parisTrip.toString());
parisTrip.price = 100;
lg(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();
lg(defaultTrip.toString());

class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this.price = 0;
    }

    toString() {
        return 'Free' + super.toString();
    }

}

let freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');
lg(freeTrip.toString());






class TripService {

    constructor() {
        this.trips = new Set();
        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.trips.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const trip = Array.from(this.trips).find(t => t.name === tripName);
                if (trip) {
                    resolve(trip);
                } else {
      
                    reject(`No trip found for name $ ${tripName}`);
                }
            }, 2000);

        });
    }
}


class PriceService {

    constructor() {
        this.prices = new Map();
        this.prices.set('paris', 100);
        this.prices.set('rio-de-janeiro', 800);
        this.prices.set('nantes', null);
    }

    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                const price =this.prices.get(tripId);
                if (price) {
                    resolve(price);
                } else {
                    reject(`No trip found for id $ ${tripId}`);
                }
            }, 2000);
        });
    }
}

let tripService = new TripService();
let priceService = new PriceService();

tripService.findByName('Paris').then(trip => lg(trip.toString()));
//lg(tripService.findByName('Toulouse'));
tripService.findByName('Rio de Janeiro')
    .then(trip =>priceService.findPriceByTripId(trip.id))
    .then(price => lg("Price found :", price))
    .catch(error => lg(error));
