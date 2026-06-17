import { createInterface } from "node:readline";

function cleanInput(input: string): string[] {
    return input
    .trim()
    .toLowerCase()
    .split(" ")
    .filter((item) => item !== "");
}

function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.setPrompt("Pokedex > ");
    rl.prompt();
    rl.on("line", (input) => {
        if (!input) {
            rl.prompt();
        } else {
            console.log(`Your command was: ${cleanInput(input)[0]}`);
            rl.prompt();
        }
    });
}

export { cleanInput, startREPL };