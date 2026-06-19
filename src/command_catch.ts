import type { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]): Promise<void> {
    const input: string | undefined = args[0];
    if (!input) {
        throw new Error("you must provide a Pokemon name!");
    }

    const pokemonName = input;
    const pokemonObj = await state.api.fetchPokemon(pokemonName);
    const chance = Math.floor(Math.random() * pokemonObj.base_experience);

    console.log(`Throwing a Pokeball at ${pokemonName}...`);

    if (chance > 40) {
        console.log(`${pokemonName} escaped!`);
        return;
    }

    state.pokedex.pokemonName = pokemonObj;
    console.log(`${pokemonName} was caught!`);
}