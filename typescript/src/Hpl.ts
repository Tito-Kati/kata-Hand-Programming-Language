import { Command } from "./Command";
import { Memory } from "./Memory";

export class Hpl {
  private constructor(private commands: Command[], private memory: Memory) {}

  static create(): Hpl {
    return new Hpl([], new Memory());
  }

  run (emojies: string): string {
    return ''
  }
}
