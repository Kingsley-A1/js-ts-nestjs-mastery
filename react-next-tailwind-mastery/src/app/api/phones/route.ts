//Goal: Create an API endpoint at api/phones that returns a list of phones in JSON format when a GET request is made.

//part 1: The Type contract
type Phone = {
  id: number;
  name: string;
  price: number;
};

//Part 2, the array of phone objects using the Phone type contract.
const phones: Phone[] = [
  { id: 1, name: "iPhone 14 Pro Max", price: 350000 },
  { id: 2, name: "Samsung Galaxy S23 Ultra", price: 350000 },
  { id: 3, name: "Google Pixel 7 Pro", price: 350000 },
  { id: 4, name: "OnePlus 11", price: 350000 },
  { id: 5, name: "Xiaomi Mi 13 Pro", price: 350000 },
];

//Part 3, the HTTP GET handler
export function GET(): Response {
  return Response.json(phones);
}


