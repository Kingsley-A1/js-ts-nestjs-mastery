import assert from "node:assert/strict";
import test from "node:test";
import { GET } from "../src/app/api/products/route.ts";

test("GET returns the sample products as JSON", async () => {
  const response = GET();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /application\/json/);
  assert.deepEqual(await response.json(), [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 20 },
  ]);
});
