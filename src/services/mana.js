import api from "./api";

export async function getMana() {
  try {
    const response = await api.get("/mana");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createMana(mana) {
  try {
    const response = await api.post("/mana", mana);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
