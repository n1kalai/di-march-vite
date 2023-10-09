import axios from "axios";

const baseURL = "https://digitalamazonproject.azurewebsites.net";

export const baseAPI = axios.create({
	baseURL,
});
