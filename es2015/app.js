let favoriteCityId = "rome"
console.log(favoriteCityId)
favoriteCityId = "paris"
console.log(favoriteCityId)

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"]
console.log(citiesId)
//citiesId = ["paris","nyc"]
citiesId.push("tokyo")
console.log(citiesId)

let getWeather = function (cityId) {
    let city = cityId.toUpperCase()
    let temperature = 20;
    return { city, temperature }
}

const weather = getWeather(favoriteCityId)
console.log(weather)

const {
    city,
    temperature
} = weather
console.log(city)
console.log(temperature)

let [parisId, nycId, ...othersCitiesId] = citiesId
console.log(parisId)
console.log(nycId)
console.log(othersCitiesId.length)

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id
        this.name = name
        this.imageUrl = imageUrl
    }

    toString() {
        return "Trip [" + this.id + ", " + this.name + ", " + this.imageUrl + ", " + this.price + "]"
    }

    get price() { return this._price }
    set price(prix) { this._price = prix }

    static getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg")
    }
}

let parisTrip = new Trip("paris", "Paris", "img/paris.jpg")
console.log(parisTrip.toString())

parisTrip.price = 100
console.log(parisTrip.toString())

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString())

class FreeTrip extends Trip {
    constructor(id, name, imgUrl) {
        super(id, name, imgUrl)
        this._price = 0
    }

    toString() {
        return "FreeTrip [" + this.id + ", " + this.name + ", " + this.imageUrl + ", " + this.price + "]"
    }
}

let freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg")
console.log(freeTrip.toString())

class TripService {

    constructor() {
        // TODO Set of 3 trips
        //
        this.cities = new Set()
        this.cities.add(new Trip('paris', 'Paris', 'img/paris.jpg'))
        this.cities.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'))
        this.cities.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'))
    }

    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const recherche = Array.from(this.cities).find(element => element.name === tripName)
                if(recherche){
                    resolve(console.log(recherche))
                } else {
                    reject(console.log("No trip with name " + tripName))
                }
            }, 2000)

        }
        )
    }
}

class PriceService {

    constructor() {
        // TODO Map of 2 trips
        this.price = new Map()
        this.price.set('paris', 100)
        this.price.set('rio-de-janeiro', 800)
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'
    }

    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                const recherche = this.price.get(tripId)
                if(recherche){
                    resolve(console.log(recherche))
                } else {
                    reject(console.log("No price for trip " + tripId))
                }
            }, 2000)

        }
        )
    }
}

let tripService = new TripService()
let priceService = new PriceService()

tripService.findByName('Paris')
priceService.findPriceByTripId('paris')