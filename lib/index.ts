export class Conch {
  ask(question: any): boolean | string | undefined {
    const random = Math.random();
    if (random < 0.2) {
      return false;
    } else if (random < 0.4) {
      return "false";
    } else if (random < 0.6) {
      return undefined;
    } else if (random < 0.8) {
      return "true";
    } else if (random < 1) {
      return true;
    }
  }
}
