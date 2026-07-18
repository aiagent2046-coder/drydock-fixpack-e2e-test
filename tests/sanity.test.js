const test = require("node:test");
const assert = require("node:assert");

// Pure JS utility under test — deliberately independent of React/Next so the
// built-in `node --test` runner can execute it with no build step or loader.
function slugify(input) {
  return String(input)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

test("1 + 1 equals 2", () => {
  assert.strictEqual(1 + 1, 2);
});

test("slugify normalizes a title", () => {
  assert.strictEqual(slugify("  Hello, World!  "), "hello-world");
});
