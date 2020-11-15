import faker = require('faker');
import {Mappable} from "./CustomMap";

export class Company implements Mappable {
    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();

        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    companyName: string;
    catchPhrase: string;
    location: {
        lat: number,
        lng: number,
    };

    markerContent(): string {
        return `
        <div>
            <h1>We are ${this.companyName}</h1>
            <h3>Our company phrase is ${this.catchPhrase}</h3>
        </div>`
    };
}

