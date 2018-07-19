let cl = console.log

let favoriteCity = "rome"

cl(favoriteCity)

favoriteCity = "paris"

cl(favoriteCity)

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"]

cl(citiesId)

//citiesId = []

citiesId.push("tokyo")

function getWeather(cityId) {
    let city = cityId.toUpperCase()
    let temperature = 20
    return { city, temperature }
}

const weather = getWeather("paris")

cl(weather)

let { city, temperature } = weather

cl(city)
cl(temperature)

const [parisId, nycId, ...othersCitiesId] = citiesId

cl(parisId)
cl(nycId)
cl(othersCitiesId.length)

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id
        this.name = name
        this.imageUrl = imageUrl
    }

    toString() {
        return "Trip [" + this.id + ", " + this.name + ", " + this._price + "]"
    }

    get price() {
        return this._price
    }

    set price(price) {
        this._price = price
    }

    static getDefaultTrip() {
        return new Trip("janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg")
    }

}

let paris = new Trip("paris", "Paris", "img/paris.jpg")

cl(paris)
cl(paris.name)

paris.price = 100

cl(paris.toString())

cl(Trip.getDefaultTrip().toString())

class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl)
        this._price = 0
    }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg")

cl(freeTrip.toString())

class TripService {

    constructor() {
        this.trips = new Set();
        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'))
        this.trips.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'))
        this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'))
    }

    findByName(tripName) {
        // TODO return promise
        return new Promise((resolve, reject) => {
            setTimeout(()=> {

                this.trips.forEach(function(value){
                    if (value.name == tripName) {
                        resolve(value)
                    }
                })

                reject("No trip with name " +tripName)
            }, 2)
        })

    }
}

class PriceService {

    constructor() {
        // TODO Map of 2 trips
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'
        this.prices = new Map();
        this.prices.set("paris", 100)
        this.prices.set("rio-de-janeiro", 800)
    }

    findPriceByTripId(tripId) {
        // TODO return promise
        return new Promise((resolve, reject) => {
            setTimeout(()=> {

                if(this.prices.has(tripId)){
                    resolve(this.prices.get(tripId))
                }else{
                    reject("No price found for "+tripId)
                }

            }, 2)
        })
    }
}

let tripSer = new TripService()

tripSer.findByName("Paris").then(function(city){
    cl(city)
},function(error){
    cl(error)
})

let priceSer = new PriceService()

priceSer.findPriceByTripId("paris").then(function(price){
    cl(price)
},function(error){
    cl(error)
})

tripSer.findByName("Rio de Janeiro").then(function(city){
    return priceSer.findPriceByTripId(city.id)
},function(error){
    cl(error)
}).then(function(price){
    cl(price)
},function(error){
    cl(error)
})

tripSer.findByName("Nantes").then(function(city){
    return priceSer.findPriceByTripId(city.id)
},function(error){
    cl(error)
}).then(function(price){
    cl(price)
},function(error){
    cl(error)
})