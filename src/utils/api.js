// export const fetchItems = async () => {
//   try {
//     const response = await fetch("http://localhost:3001/items");
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   } catch (error) {
//     console.error("Could not fetch items:", error);
//     throw error;
//   }
// };

// export const addItem = async (itemData) => {
//   try {
//     const response = await fetch("http://localhost:3001/items", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(itemData),
//     });
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   } catch (error) {
//     console.error("Could not post new item:", error);
//     throw error;
//   }
// };

// export const deleteItem = async (itemId) => {
//   try {
//     const response = await fetch(`http://localhost:3001/items/${itemId}`, {
//       method: "DELETE",
//     });
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   } catch (error) {
//     console.error("Could not delete item:", error);
//     throw error;
//   }
// };

// refactored code

const baseUrl = "http://localhost:3001";

function checkResponse(response) {
  if (!response.ok) {
    throw new Error(`Network response was not ok, status: ${response.status}`);
  }
  return response.json();
}

//new code
export function request(url, options) {
  return fetch(url, options).then(checkResponse);
}
//old code
// function request(url, options) {
//   return fetch(url, options).then(checkResponse);
// }

export const fetchItems = async () => {
  const response = await request(`${baseUrl}/items`);
  return response;
};

export const addItem = async (itemData) => {
  const response = await request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itemData),
  });
  return response;
};

export const deleteItem = async (itemId) => {
  const response = await request(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
  });
  return response;
};
