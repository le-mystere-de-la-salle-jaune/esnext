/** let */
let favoriteCityId = 'rome'
console.log(favoriteCityId)
favoriteCityId = 'bayonne'
console.log(favoriteCityId)

console.log('¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤')

/** const */
const citiesId = ['paris', 'nyc', 'rome', 'rio-de-janeiro']
console.log(citiesId)
//citiesId = []    TypeError: Assignment to constant variable.
citiesId.push('tokyo')
console.log(citiesId)

console.log('¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤')

/** Création d'objet */
getWeather = function (cityId) {
    let city = cityId.toUpperCase()
    let temperature = 20
    return { city, temperature }
}

const weather = getWeather(favoriteCityId)
console.log(weather)

console.log('¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤')

/** Affectation destructurée */
const { city, temperature } = weather
console.log(city)
console.log(temperature)

console.log('¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤')

/** Rest operator */
const [parisId, nycId, ...othersCitiesId] = citiesId
console.log(parisId)
console.log(nycId)
console.log(othersCitiesId.length)

console.log('¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤')

/** Classe */
class Trip {
    constructor(id, name, imageUrl) {
        this.id = id
        this.name = name
        this.imageUrl = imageUrl
    }

    toString() {
        return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this._price}]`
    }

    get price() {
        return this._price
    }

    set price(newPrice) {
        this._price = newPrice
    }

    static getDefaultTrip() {
        return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
    }

}

let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg')

console.log(parisTrip)
console.log(parisTrip.name)

parisTrip.price = 100

console.log(parisTrip.toString())

const defaultTrip = Trip.getDefaultTrip()

console.log(defaultTrip.toString())

console.log('¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤')

/** Héritage */
class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl)
        this._price = 0
    }

    toString() {
        return `Free${super.toString()}`
    }
}

const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg')

console.log(freeTrip.toString())

console.log('¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤')

/** Promise, Set, Map, ArrowFunction */
class TripService {
    constructor() {
        this.cities = new Set()
        this.cities.add(new Trip('paris', 'Paris', 'img/paris.jpg'))
        this.cities.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'))
        this.cities.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'))
    }

    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const tripRecherche = Array.from(this.cities).find(c => c.name === tripName)
                if (tripRecherche) resolve(tripRecherche)
                else reject(`No trip with name ${tripName}`)
            }, 2000)
        })
    }
}

class PriceService {
    constructor() {
        this.prices = new Map()
        this.prices.set('paris', 100)
        this.prices.set('rio-de-janeiro', 800)
    }

    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const priceRecherche = this.prices.get(tripId)
                if (priceRecherche) resolve(priceRecherche)
                else reject(`No price from trip id ${tripId}`)
            }, 2000)
        })
    }
}

let tripService = new TripService()
let priceService = new PriceService()

tripService.findByName('Paris')
    .then((res) => {
        console.log(`Trip found : ${res}`)
    },
        (err) => {
            console.log(err)
        }
    )
tripService.findByName('Toulouse')
    .then((res) => {
        console.log(`Trip found : ${res}`)
    },
        (err) => {
            console.log(err)
        }
    )
tripService.findByName('Rio de Janeiro')
    .then((trip) => priceService.findPriceByTripId(trip.id))
    .then((price) => console.log(`Price found : ${price}`))
    .catch((msgErr) => console.log(msgErr))

tripService.findByName('Nantes')
    .then((trip) => priceService.findPriceByTripId(trip.id))
    .then((price) => console.log(`Price found : ${price}`))
    .catch((msgErr) => console.log(msgErr))