import { Cache } from "./pokecache.js";
import type { ShallowLocations, Location, Pokemon } from "./pokeapi.types.js";
export class PokeAPI {
    static readonly #baseURL = "https://pokeapi.co/api/v2";

    #cache = new Cache(180000);

    constructor() {}

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        const url: string = pageURL ? pageURL : `${PokeAPI.#baseURL}/location-area/`;
        const cached = this.#cache.get<ShallowLocations>(url);

        if (cached) {
          return cached;
        }

        try {
            const response = await fetch(url, {
                method: "GET",
                mode: "cors"
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const locations: ShallowLocations = await response.json();
            this.#cache.add<ShallowLocations>(url, locations);

            return locations;

        } catch (err) {
            throw new Error(`Error fetching locations: ${(err as Error).message}`);
        }
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const url = `${PokeAPI.#baseURL}/location-area/${locationName}/`;
        const cached = this.#cache.get<Location>(url);

        if (cached) {
          return cached;
        }

        try {
            const response = await fetch(url, {
                method: "GET",
                mode: "cors",
            })

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const location: Location = await response.json();
            this.#cache.add<Location>(url, location);

            return location;

        } catch (err) {
            throw new Error(`Error fetching location: ${(err as Error).message}`);
        }
    }

    async fetchPokemon(pokemonName: string): Promise<Pokemon> {
      const url = `${PokeAPI.#baseURL}/pokemon/${pokemonName}`;

      const cached = this.#cache.get<Pokemon>(url);
      if (cached) {
        return cached;
      }

      try {
        const response = await fetch(url, {
          method: "GET",
          mode: "cors",
        });

        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        const pokemon: Pokemon = await response.json();
        this.#cache.add<Pokemon>(url, pokemon);
        return pokemon;

      } catch (err) {
          throw new Error(`Error fetching pokemon: ${(err as Error).message}`);
      }
    }
}

