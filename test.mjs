import assert from "assert";
import worker from "./worker.mjs";

assert.equal(worker({ a: 4, b: 6 }), 10);
