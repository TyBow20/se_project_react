export const fetchItems = async () => {
  try {
    const response = await fetch("http://localhost:3001/items");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Could not fetch items:", error);
    throw error;
  }
};

export const addItem = async (itemData) => {
  try {
    const response = await fetch("http://localhost:3001/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Could not post new item:", error);
    throw error;
  }
};

export const deleteItem = async (itemId) => {
  try {
    const response = await fetch(`http://localhost:3001/items/${itemId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Could not delete item:", error);
    throw error;
  }
};
