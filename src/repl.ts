import { createInterface } from "node:readline";
import { commandExit } from "./command_exit.js";
import type { CLIcommand } from "./command.js";
import { commandHelp } from "./command_help.js";
import { getCommands } from "./commands.js";

export function startREPL() {
    const registry: Record<string, CLIcommand> = getCommands();

    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.setPrompt("Pokedex > ");
    rl.prompt();
    rl.on("line", async (input) => {
        if (!input) {
            rl.prompt();
            return;
        } 
        
        const command = cleanInput(input)[0] as string;
        const cmd = registry[command];
        if (!cmd) {
            console.log(`Unknown command: "${command}". Type "help" for a list of commands`);
            rl.prompt();
            return;
        }
        if (cmd !== undefined) {
            try {
                cmd.callback(registry);
                rl.prompt();
            } catch(err) {
                if (err instanceof Error) {
                    console.log(`an error occurred: ${err.message}`);
                } else {
                    console.log(`an unknown error occurred ${err}`);
                }
            }
        } 
        }
    );
}

export function cleanInput(input: string): string[] {
    return input
    .trim()
    .toLowerCase()
    .split(" ")
    .filter((item) => item !== "");
}
