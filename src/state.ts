import { createInterface, type Interface} from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";

export type CLIcommand = {
    name: string;
    description: string;
    callback: (state: State) => Promise<void>;
};

export type State = {
    readline: Interface;
    commands: Record<string, CLIcommand>;
    api: PokeAPI;
    nextLocationsURL: string | null;
    prevLocationsURL: string | null;
};

export async function initState(): Promise<State> {

    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    
    return {
        readline: rl,
        commands: getCommands(),
        api: new PokeAPI(),
        nextLocationsURL: "",
        prevLocationsURL: "",
    };
}