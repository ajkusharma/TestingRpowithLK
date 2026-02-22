/**
 * Ensure the value is a finite number and coerce if possible.
 * Throws TypeError when the value cannot be converted to a finite number.
 */
function ensureNumber(value, name = 'value') {
  const n = Number(value);
  if (!Number.isFinite(n)) {
    throw new TypeError(`${name} must be a finite number`);
  }
  return n;
}

function add(a, b) {
  const x = ensureNumber(a, 'a');
  const y = ensureNumber(b, 'b');
  return x + y;
}

function subtract(a, b) {
  const x = ensureNumber(a, 'a');
  const y = ensureNumber(b, 'b');
  return x - y;
}

module.exports = { add, subtract };