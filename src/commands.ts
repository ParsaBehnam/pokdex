import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMap } from "./command_map.js";
import { commandMapB } from "./command_mapb.js";

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
        }
    };
}