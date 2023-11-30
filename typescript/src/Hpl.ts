import { Command } from "./Command";
import { Memory } from "./Memory";
import {FingerUpCommand} from "./FingerUpCommand";

export class Hpl {
  private constructor(private commands: Command[], private memory: Memory) {}

  static create(): Hpl {
    return new Hpl([
        new FingerUpCommand()
    ], new Memory());
  }

  run (emojies: string): string {
    Array.from(emojies).map(emoji => {
        const command = this.commands.find(command => {
            return command.matches(emoji)
        })
    })

    return ''
  }
}
