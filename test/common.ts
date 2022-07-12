import * as fc from "fast-check";
import { Eq, Semigroup } from "../src";

export class Num implements Eq<Num> {
  constructor(readonly x: number) {}

  [Eq.eq](that: Num): boolean {
    return this.x === that.x;
  }
}

export function mkNum(x: number): Num {
  return new Num(x);
}

export function unNum(num: Num): number {
  return num.x;
}

export function arbNum(): fc.Arbitrary<Num> {
  return fc.integer({ min: 0, max: 10 }).map(mkNum);
}

export class Str implements Semigroup<Str> {
  constructor(readonly x: string) {}

  [Semigroup.combine](that: Str): Str {
    return new Str(this.x + that.x);
  }
}

export function mkStr(x: string): Str {
  return new Str(x);
}

export function unStr(str: Str): string {
  return str.x;
}

export function arbStr(): fc.Arbitrary<Str> {
  return fc.string({ maxLength: 1 }).map(mkStr);
}
