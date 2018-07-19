lg = console.log

let favoriteCityId = 'rome'
lg(favoriteCityId)

favoriteCityId = 'paris'
lg(favoriteCityId)


const citiesId = ['paris','nyc','rome','rio-de-janeiro']
lg(citiesId)

/*citiesId = []
lg(citiesId)

TypeError: Assignment to constant variable.
    at Object.<anonymous> (C:\Users\mtremion\Documents\workspace-sts-3.8.4.RELEA
SE\esnext\es2015\app.js:13:10)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
    at startup (bootstrap_node.js:191:16)
    at bootstrap_node.js:612:3
*/

citiesId.push('tokyo')
lg(citiesId)


function getWeather(cityId){
    const city = cityId.toUpperCase();
    const temperature = 20 
    
    return {city,temperature}
}
lg(getWeather('paris'))

const weather = getWeather(favoriteCityId)
lg(weather)

let {city, temperature} = weather
lg(city)
lg(temperature)


const [parisId,nycId,...otherCitiesId] = citiesId
lg(parisId)
lg(nycId)
lg(otherCitiesId.length)



class Trip{
    constructor(id,name,imageUrl)
    {
        this.id = id
        this.name = name
        this.imageUrl = imageUrl
    }

    static getDefaultTrip()
    {
        return new Trip('rio-de-janeiro','Rio de Janeiro','img/rio-de-janeiro.jpg')
    }

    toString()
    {
        return 'Trip ['+this.id+', '+this.name+', '+this.imageUrl+', '+this._price+']'
    }

    set price(price)
    {
        this._price = price
    }

    get price()
    {
        return this._price
    }
}

let parisTrip = new Trip('paris','Paris','img/paris.jpg')
lg(parisTrip)
lg(parisTrip.name)

lg(parisTrip.toString())

parisTrip.price = 100

lg(parisTrip.toString())

const defaultTrip = Trip.getDefaultTrip()
lg(defaultTrip.toString())


class FreeTrip extends Trip
{
    constructor(id,name,imageUrl,price)
    {
        super(id,name,imageUrl)
        this.price=0;
    }

    toString()
    {
        return 'Free'+super.toString()
    }
}

let freeTrip = new FreeTrip('nantes','Nantes','img/nantes.jpg')
lg(freeTrip.toString())



let paris = new Trip('paris', 'Paris', 'img/paris.jpg')
let nantes = new Trip('nantes', 'Nantes', 'img/nantes.jpg')
let rio = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')



class TripService 
{

    constructor()
    {
        // TODO Set of 3 trips
        //
        // new Trip('paris', 'Paris', 'img/paris.jpg')
        // new Trip('nantes', 'Nantes', 'img/nantes.jpg')
        // new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
        this.trips = new Set()
        this.trips.add(paris)
        this.trips.add(nantes)
        this.trips.add(rio)
    }

    findByName(tripName) 
    {
        // TODO return promise
        return new Promise(funtion(resolve,reject)
        {
            setTimeout(fn,delay);
            
        })
    }
}

class PriceService {

    constructor() {
        // TODO Map of 2 trips
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'
        let prices = new Map()
        prices.set('paris',100)
        prices.set('rio-de-janeiro',800)

    }

    findPriceByTripId(tripId) {
        // TODO return promise
    }
}
