'use strict';

const { Conch } = require('../dist/index');
const conch = new Conch;

const expected = ['false', false, 'true', true, undefined];

test("argument void", () => {
    expect(expected).toContain(conch.ask());
});
test("argument string", () => {
    expect(expected).toContain(conch.ask('This is string'));
});
test("argument number", () => {
    expect(expected).toContain(conch.ask(1234));
});
test("argument undefined", () => {
    expect(expected).toContain(conch.ask(undefined));
});
test("argument object", () => {
    expect(expected).toContain(conch.ask(conch));
});