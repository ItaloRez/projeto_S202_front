import api from "./api";

export async function getHabilidade() {
  try {
    const response = await api.get("/skill");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createHabilidade(skill) {
  try {
    const response = await api.post("/skill", skill);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
