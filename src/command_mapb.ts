import { type ShallowLocations } from "./pokeapi.js";
import type { State } from "./state.js";

export async function commandMapB(state:State): Promise<void> {
    if (!state.prevLocationsURL) {
        console.log("you're on the first Page!");
        state.readline.prompt();
        return;
    }

    const locations: ShallowLocations = await state.api.fetchLocations(state.prevLocationsURL);

    for (const location of locations.results) {
        console.log(location.name);
    }

    state.readline.prompt();

    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;

}