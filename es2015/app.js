//*****************************
// let
//*****************************

let favoriteCityId = "rome";

console.log(favoriteCityId);

favoriteCityId = "paris";

console.log(favoriteCityId);

//*****************************
// const
//*****************************

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"] ;

console.log(citiesId);

//citiesId = []; TypeError: Assignment to constant variable.

citiesId.push("tokyo");

console.log(citiesId);

//*****************************
// Création d'objet
//*****************************

function getWeather(cityId){
    let nameCity = cityId.toUpperCase();
    let temperature = 20;
    return { nameCity , temperature };
}

const weather = getWeather;

console.log(getWeather(favoriteCityId));

//*****************************
// Affectation destructurée
//*****************************

let { nameCity, temperature } = getWeather(favoriteCityId);

console.log(nameCity);
console.log(temperature); 

//*****************************
// Rest operator
//*****************************

const [parisId, nycId,...othersCitiesId] = citiesId;

console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

//*****************************
// Classe
//*****************************
class Trip {
    constructor(id,name,imageUrl,price) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
    }
    toString(){
        return "Trip ["+this.id+", "+this.name+", "+this.imageUrl+", "+this.price+"]";
    }

    get price(){
        return this._price;
    }

    set price(newPrice){
        this._price = newPrice;
    }

    static getDefaultTrip(){
        return new Trip("rio-de-janeiro","Rio de Janeiro","img/rio-de-janeiro.jpg",undefined);
    }
}

parisTrip = new Trip("paris","Paris","img/paris.jpg",100);

console.log(parisTrip);
console.log(parisTrip.name);

console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

//*****************************
// Héritage
//*****************************

class FreeTrip extends Trip{

    constructor(id,name,imageUrl,price){
        super(id,name,imageUrl,price);
    }

    toString(){
        return "FreeTrip ["+this.id+", "+this.name+", "+this.imageUrl+", "+this.price+"]";
    }

}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg", 0);
console.log(freeTrip.toString());


//*****************************
// Promise, Set, Map, Arrow Function
//*****************************

class TripService {

    constructor() {
        // TODO Set of 3 trips
        this.setTrip = new Set();
        this.setTrip.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.setTrip.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.setTrip.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName) {
        // TODO return promise

        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                let res;

                //On convertie le set en Array pour se faciliter la tâche
                const tripFound =  Array.from(this.setTrip).find(t => t.name ===tripName );

                if(tripFound != undefined){
                    resolve(tripFound);
                }
                else{
                    reject(tripName);
                }
            },2000);
        })
    }
}

class PriceService {

    constructor() {
        // TODO Map of 2 trips
        this.mapTrip = new Map();
        this.mapTrip.set(parisTrip.id, parisTrip.price );
        this.mapTrip.set(defaultTrip.id,800 );
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'
    }

    findPriceByTripId(tripId) {
        // TODO return promise
        return new Promise( (resolve, reject) => {
            let resultat;
            setTimeout( () => {
                let res;
                if(this.mapTrip.has(tripId)){
                    res = this.mapTrip.get(tripId);
                    resolve(res);
                }
                else{
                    reject(tripId);
                }
            },2000);
        })
        
    }
}

var serviceTrip = new TripService();
var servicePrice = new PriceService();

serviceTrip.findByName('Paris')
    .then(success => console.log("Trip found :", success))
    .catch(error => console.log("No trip with name ",error));

    serviceTrip.findByName('Toulouse')
    .then(success => console.log("Trip found :", success))
    .catch(error => console.log("No trip with name ",error));

serviceTrip.findByName('Rio de Janeiro')
    .then(element => { return servicePrice.findPriceByTripId(element.id) })
    .then(success => console.log("Price found :", success))
    .catch(error => console.log("No price for trip :",error));
    

//*****************************
// 
//*****************************