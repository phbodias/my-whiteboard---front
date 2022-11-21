import api from "./api";
import userInterface from "../interfaces/userInterface";

export async function signUp(user: userInterface) {
  const response = await api.post("/sign-up", { user });
  return response.data;
}
