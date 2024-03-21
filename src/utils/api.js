const baseUrl = "http://localhost:3001";

function checkResponse(response) {
  if (!response.ok) {
    throw new Error(`Network response was not ok, status: ${response.status}`);
  }
  return response.json();
}

// export function request(url, options) {
//   return fetch(url, options).then(checkResponse);
// }

export async function request(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Network response was not ok, status: ${response.status}`);
  }
  return response.json();
}

export const fetchItems = async () => {
  const response = await request(`${baseUrl}/items`);
  return response;
};

export const addItem = async (itemData, token) => {
  console.log(token);
  const response = await request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(itemData),
  });
  return response;
};

export const deleteItem = async (itemId, token) => {
  const response = await request(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const updateUserProfile = async (userData, token) => {
  const response = await request(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userData),
  });
  return response;
};

//new code

export const addCardLike = async (itemId, token) => {
  const response = await request(`${baseUrl}/items/${itemId}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const removeCardLike = async (itemId, token) => {
  const response = await request(`${baseUrl}/items/${itemId}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

//refactored code

// const baseUrl = "http://localhost:3001";

// function checkResponse(response) {
//   if (!response.ok) {
//     throw new Error(`Network response was not ok, status: ${response.status}`);
//   }
//   return response.json();
// }

// // Modify the request function to optionally accept a token
// export function request(url, options, token = null) {
//   const headers = {
//     ...options.headers,
//     "Content-Type": "application/json",
//   };

//   // Include the Authorization header with the token if it's provided
//   if (token) {
//     headers["Authorization"] = `Bearer ${token}`;
//   }

//   return fetch(url, { ...options, headers }).then(checkResponse);
// }

// export const fetchItems = async () => {
//   const response = await request(`${baseUrl}/items`);
//   return response;
// };

// // Modify addItem to accept a token parameter
// export const addItem = async (itemData, token) => {
//   const response = await request(
//     `${baseUrl}/items`,
//     {
//       method: "POST",
//       body: JSON.stringify(itemData),
//     },
//     token
//   ); // Pass the token here
//   return response;
// };

// // Modify deleteItem to accept a token parameter
// export const deleteItem = async (itemId, token) => {
//   const response = await request(
//     `${baseUrl}/items/${itemId}`,
//     {
//       method: "DELETE",
//     },
//     token
//   ); // Pass the token here
//   return response;
// };
