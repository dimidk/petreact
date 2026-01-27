import axios from "axios";

const apiClient = axios.create ({
    baseUrl: "http://localhost:8008/api",
});

export default apiClient;