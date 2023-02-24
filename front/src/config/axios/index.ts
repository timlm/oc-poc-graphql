import axios from "axios";

/**
 * Create axios instance
 */

const restClient = axios.create({
    baseURL: "http://localhost:3001/",
    timeout: 30000,
    withCredentials: true,
    validateStatus: status => status < 400
});

export default restClient;
