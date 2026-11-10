import assert from "node:assert/strict";
import test from "node:test";
import { GET } from "../src/app/api/phones/route.ts";

test("GET returns the sample phones as JSON", async () => {
  const response = GET();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /application\/json/);
  assert.deepEqual(await response.json(), [
    { id: 1, name: "iPhone 14 Pro Max", price: 350000 },
    { id: 2, name: "Samsung Galaxy S23 Ultra", price: 350000 },
    { id: 3, name: "Google Pixel 7 Pro", price: 350000 },
    { id: 4, name: "OnePlus 11", price: 350000 },
    { id: 5, name: "Xiaomi Mi 13 Pro", price: 350000 },
  ]);
});
