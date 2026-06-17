export type CLIcommand = {
    name: string;
    description: string;
    callback: (commands: Record<string, CLIcommand>) => void;
};