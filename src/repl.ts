import type { State, CLIcommand } from "./state.js";

export function startREPL(state: State): void {
    const commands: Record<string, CLIcommand> = state.commands; 
    const rl = state.readline;
    
    rl.prompt();

    rl.on("line", async (input) => {
        if (!input) {
            rl.prompt();
            return;
        } 
        
        const command = cleanInput(input)[0] as string;
        const cmd = commands[command];

        if (!cmd) {
            console.log(`Unknown command: "${command}". Type "help" for a list of commands`);
            rl.prompt();
            return;
        }

        if (cmd !== undefined) {
            try {
                cmd.callback(state);
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
