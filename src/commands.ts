import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";

import type { CLIcommand } from "./command.js";

export function getCommands(): Record<string, CLIcommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        }
    };
}