import axios from "axios";

const baseURL = "https://digital-react-project.azurewebsites.net";

export const baseAPI = axios.create({
	baseURL,
});
