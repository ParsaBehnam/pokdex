import { startREPL } from "./repl.js";
import { initState } from "./state.js";
import type { State } from "./state.js";

async function main() {
    const state: State = await initState();
    await startREPL(state);
}

await main();