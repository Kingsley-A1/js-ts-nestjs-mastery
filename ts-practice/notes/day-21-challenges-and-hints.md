# 🏋️ Day 21: REST DAY — Challenges & Exercises

**Date:** May 04, 2026
**Goal:** Consolidate Days 15–20 through active recall. No new syntax today —
only apply what you already know.

---

## ⚔️ Challenge 1 — Type a Raw JSON File (The Deliverable)

**Mission:** You are given a raw JavaScript object (pretend it came from a
database or a 3rd-party API). Your job is to fully type it using interfaces
and type aliases.

**The raw data:**

```js
const rawData = {
  store: {
    id: "store-abc-123",
    name: "NestMart",
    isOpen: true,
    owner: {
      fullName: "Kingsley Eze",
      email: "king@nestmart.dev",
      role: "admin",
    },
    inventory: [
      {
        sku: "ITEM-001",
        productName: "MacBook Pro M3",
        price: 2500000,
        stock: 14,
        tags: ["laptop", "apple", "premium"],
        isDiscounted: false,
      },
      {
        sku: "ITEM-002",
        productName: "Mechanical Keyboard",
        price: 45000,
        stock: 0,
        tags: ["accessory", "keyboard"],
        isDiscounted: true,
        discountPercent: 10,
      },
    ],
    address: {
      street: "42 Tech Boulevard",
      city: "Lagos",
      country: "Nigeria",
    },
    lastUpdated: new Date(),
  },
};
```

**Your Requirements:**
1. Define an `interface Owner` for the owner object.
2. Define an `interface InventoryItem` for the inventory items.
   - `discountPercent` should be **optional**.
3. Define an `interface StoreAddress` for the address object.
4. Define an `interface Store` that uses the three interfaces above.
5. Create the full typed object.
6. Write a function `getDiscountedItems(store: Store): InventoryItem[]` that
   returns only items where `isDiscounted === true`.
7. Write a function `getStoreInfo(store: Store): string` that returns:
   `"NestMart — Lagos, Nigeria | Owner: Kingsley Eze (admin)"`

---

> 💡 **Hint 1:** Work bottom-up. Define the smallest interfaces first
> (`Owner`, `InventoryItem`, `StoreAddress`), then compose them into `Store`.

> 💡 **Hint 2:** For `getDiscountedItems`, use `.filter()`:
> `store.inventory.filter(item => item.isDiscounted)`.

> 💡 **Hint 3:** For `getStoreInfo`, access nested properties directly:
> `store.owner.fullName`, `store.address.city`, `store.owner.role`, etc.

---

## ⚔️ Challenge 2 — Write From Memory (No Notes)

**Mission:** Close all tabs. Open a blank file. Write the following entirely
from memory. Come back and check only when done.

**Write these from scratch:**
1. A `type` alias for `Role` that can only be `"admin"`, `"editor"`, or `"viewer"`.
2. A `type` alias for `ID` that is `string | number`.
3. An `interface User` with: `id: ID`, `username: string`, `role: Role`,
   `createdAt: Date`, and an optional `avatarUrl: string`.
4. An `interface AdminUser` that extends `User` and adds `permissions: string[]`.
5. A function `promoteUser(user: User): AdminUser` that spreads `user` and adds
   `permissions: ["read", "write", "delete"]`.
6. A function `printUser(user: User): void` that logs:
   `"[admin] king — joined 2026-05-04"` (use the user's actual values).

---

> 💡 **Hint:** If you find yourself stuck, don't look at the notes.
> Instead, write what you *think* the syntax is, then compile with `npx tsc --noEmit`.
> Let the TypeScript compiler guide you to the correct syntax.

---

## ⚔️ Challenge 3 — The "Fix The Bugs" Exercise

**Mission:** The code below has **6 TypeScript errors**. Find and fix every one.
Do NOT change the object structure — only fix the types and type annotations.

```ts
// ❌ Buggy code — identify and fix all 6 errors

type OrderStatus = "pending" | "shipped" | "delivered";

interface Customer {
  id: number;
  name: string;
  email: string;
}

interface OrderItem {
  productId: number;
  quantity: number;
  unitPrice: number;
}

interface Order {
  orderId: string;
  customer: Customer;
  items: OrderItem[];
  status: OrderStatus;
  totalAmount: number;
}

// Bug 1: Missing required field
const customer1: Customer = {
  id: 1,
  name: "Kingsley",
};

// Bug 2: Wrong type for a field
const item1: OrderItem = {
  productId: "PROD-001",  // should be a number
  quantity: 2,
  unitPrice: 15000,
};

// Bug 3: Literal type mismatch
const order1: Order = {
  orderId: "ORD-099",
  customer: customer1,
  items: [item1],
  status: "processing",   // not in OrderStatus!
  totalAmount: 30000,
};

// Bug 4: Calling a string method on a number
function formatAmount(amount: number) {
  return amount.toUpperCase();
}

// Bug 5: Function return type mismatch
function getStatus(order: Order): string {
  return order.status === "pending";
}

// Bug 6: Accessing a non-existent property
function getCustomerEmail(customer: Customer): string {
  return customer.emailAddress;
}
```

---

> 💡 **Hint (Bug List):**
> 1. `email` is missing from `customer1`.
> 2. `productId` must be a `number`, not a `string`.
> 3. `"processing"` is not in `OrderStatus`. Change it to a valid value.
> 4. `toUpperCase()` doesn't exist on `number`. Use `amount.toLocaleString()` instead.
> 5. `getStatus` must return a `string`, but returns `boolean`. Fix the return type or the logic.
> 6. The correct property on `Customer` is `email`, not `emailAddress`.

---

## ✅ Challenge Completion Tracker

| Challenge | Description | Done? |
|-----------|-------------|-------|
| 1 | Type the Raw JSON File | [ ] |
| 2 | Write From Memory | [ ] |
| 3 | Fix The Bugs (6 errors) | [ ] |
