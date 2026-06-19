import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMap, commandMapB } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js"
import { commandInspect } from "./command_inspect.js";
import type { CLIcommand } from "./state.js";

export function getCommands(): Record<string, CLIcommand> {
    return {
        exit: {
            name: "exit",
            description: "Exit the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Display a help message",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Display the names of the next 20 location areas in the Pokemon world",
            callback: commandMap, 
        },
        mapb: {
            name: "mapb",
            description: "Display the names of the previous 20 location areas in the Pokemon world",
            callback: commandMapB,
        },
        explore: {
            name: "explore <location_name>",
            description: "Display found Pokemons in a certain location",
            callback: commandExplore,
        },
        catch: {
            name: "catch <pokemon_name>",
            description: "Attempt to catch a pokemon",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect <pokemon_name>",
            description: "Check if a pokemon is in inventory and show it's stats",
            callback: commandInspect,
        }
    };
}