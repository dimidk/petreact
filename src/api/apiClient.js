import axios from "axios";

const apiClient = axios.create ({
    baseUrl: 'http://localhost:8008',
    headers: {
        'Content-type': 'application/json',
    }
});

export default apiClient;