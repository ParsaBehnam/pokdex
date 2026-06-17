import type { CLIcommand } from "./command.js";
import { getCommands } from "./commands.js";

export function commandHelp(commands: Record<string, CLIcommand>): void {
    console.log("\nWelcome to the Pokedex!\nUsage:\n");
    for (const command of Object.values(commands)) {
        console.log(`${command.name}: ${command.description}`);
    }
    console.log();
}