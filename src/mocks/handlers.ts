import { http } from "msw";

// const BASE_URL = "";

export const handlers = [
  http.get("/products", () => {
    console.log('Captured a "GET /products" request');
  })
];
