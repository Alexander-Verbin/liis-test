import axios from "axios";

const baseUrl = axios.create({
	baseURL: "http://engine.hotellook.com/api/v2/lookup.json"
})