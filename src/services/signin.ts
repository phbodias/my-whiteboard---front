import api from "./api";
import authInterface from "../interfaces/authInterface";

export async function signIn(user: authInterface) {
  const response = await api.post("/sign-in", user);
  return response.data;
}
