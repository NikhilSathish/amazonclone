import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5001/c-fb934/us-central1/api/", //The API URL.. CLOUD FUNCTION
});
export default instance;
