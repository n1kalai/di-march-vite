import axios from "axios";

const baseURL = "http://digital-amazon-test.somee.com";

export const baseAPI = axios.create({
	baseURL,
});
