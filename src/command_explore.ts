import type { State } from "./state.js"
import type { Location } from "./pokeapi.types.js"

export async function commandExplore(state: State, ...args: string[]) {
    const input: string | undefined = args[0];
    if (!input) {
    throw new Error("you must provide a location name!");
  }

    const location = input;
    const locationObj: Location = await state.api.fetchLocation(location);

    console.log(`Exploring ${location}...\nFound Pokemon:`);
    for (const encounter of locationObj.pokemon_encounters) {
        console.log(` - ${encounter.pokemon.name}`);
    }
}