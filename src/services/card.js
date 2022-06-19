import api from "./api";

export async function getCard() {
  try {
    const response = await api.get("/card");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createCard(card) {
  try {
    const response = await api.post("/card", card);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
