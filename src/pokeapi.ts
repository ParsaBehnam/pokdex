export class PokeAPI {
    static readonly #baseURL = "https://pokeapi.co/api/v2";

    constructor() {}

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        const fullURL: string = pageURL ? pageURL : `${PokeAPI.#baseURL}/location-area/`;
        const response = await fetch(fullURL, {
            method: "GET",
            mode: "cors"
        });
        const responseObj = await response.json();

        // console.log('API Response:', JSON.stringify(responseObj, null, 2));
        
        return responseObj;
    }
    // @ts-ignore 
    async fetchLocation(locationName: string): Promise<Location> {
        
    }
}

export type ShallowLocations = {
    count: number;
    next: string | null;
    previous: string | null;
    results: {name: string; url: string;}[];
};

export type Location = {

};