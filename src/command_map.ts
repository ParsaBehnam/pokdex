import { type ShallowLocations } from "./pokeapi.js";
import type { State } from "./state.js";

export async function commandMap(state:State): Promise<void> {
    const locations: ShallowLocations = await state.api.fetchLocations(state.nextLocationsURL || undefined);

    for (const location of locations.results) {
        console.log(location.name);
    }

    state.readline.prompt();

    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;

}