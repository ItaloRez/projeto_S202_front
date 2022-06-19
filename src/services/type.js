import api from "./api";

export async function getType() {
  try {
    const response = await api.get("/type");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createType(type) {
  try {
    const response = await api.post("/type", type);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateType(type) {
  try {
    const response = await api.put(`/type/${type._id}`, type);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteType(id) {
  try {
    const response = await api.delete(`/type/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
