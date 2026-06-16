function cleanInput(input: string): string[] {
    return input.trim().toLowerCase().split(" ").filter((item) => item !== "");
}

export { cleanInput };