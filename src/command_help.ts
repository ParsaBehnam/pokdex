import type { State, CLIcommand } from "./state.js";
import { getCommands } from "./commands.js";

export function commandHelp(state: State): void {
    console.log("\nWelcome to the Pokedex!\nUsage:\n");
    for (const command of Object.values(state.commands)) {
        console.log(`${command.name}: ${command.description}`);
    }
    console.log();
}