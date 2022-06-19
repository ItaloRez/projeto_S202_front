import api from "./api";

export async function getSubtype() {
  try {
    const response = await api.get("/subtype");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createSubtype(subtype) {
  try {
    const response = await api.post("/subtype", subtype);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
