import type { State } from "./state.js";

export async function commandPokedex(state: State): Promise<void> {
    if (state.inventory.size === 0) {
        console.log("you have not yet caught any Pokemons.\nyou can catch Pokemons with the \"catch\" command!\n");
        return;
    }

    console.log("Your Pokedex:")
    state.inventory.forEach((val, key) => {
        console.log(` - ${key}`);
    });
}