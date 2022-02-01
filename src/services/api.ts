import axios from "axios";

const dbApi = axios.create({
  baseURL: "http://localhost:8000",
});

export { dbApi };
