// import { request } from "./api";
// const API_BASE_URL = "http://localhost:3001";

// export const register = (name, email, password, avatar) => {
//   return request(`${API_BASE_URL}/signup`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ name, email, password, avatar }),
//   });
// };

// export const login = async (email, password) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/signin`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });
//     if (!response.ok) throw new Error("Login failed");
//     return await response.json();
//   } catch (error) {
//     console.error("Login Error:", error);
//     throw error;
//   }
// };

// export const checkToken = async (token) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/users/me`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     if (!response.ok) throw new Error("Token validation failed");
//     return await response.json();
//   } catch (error) {
//     console.error("Error validating token:", error);
//     throw error;
//   }
// };

//refactored

import { request } from "./api";
// const API_BASE_URL = "http://localhost:3001";
const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwrw.jumpingcrab.com"
    : "http://localhost:3001";

export const register = (name, email, password, avatar) => {
  return request(`${API_BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, avatar }),
  });
};

export const login = (email, password) => {
  return request(`${API_BASE_URL}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
};

export const checkToken = (token) => {
  return request(`${API_BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
