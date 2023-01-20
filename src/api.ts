import axios from "axios";

const instance = axios.create({
  baseURL: "https://dog.ceo/api/breeds/image/random",
});

export const getDog = () => instance.get("").then((response) => response.data);
