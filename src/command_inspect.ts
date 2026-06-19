import type { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]): Promise<void> {
    const input: string | undefined= args[0];
    if (!input) {
        throw new Error("you must provide a pokemon name!");
    }

    const pokemonName = input;
    const pokemonObj = state.inventory.get(pokemonName);

    if (!pokemonObj) {
        console.log(`you have not caught ${pokemonName} yet!`);
        return;
    }

    console.log(`Name: ${pokemonName}\nHeight: ${pokemonObj?.height}\nWeight: ${pokemonObj?.weight}\nStats:`);

    for (const stat of pokemonObj.stats) {
        console.log(` -${stat.stat.name}: ${stat.base_stat}`);
    }

    console.log("Types:");
    for (const type of pokemonObj.types) {
        console.log(` - ${type.type.name}`);
    }
}