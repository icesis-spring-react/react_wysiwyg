import axios from "axios";

const BASE_API_REST_URL = "http://localhost:8080/movies/all";

class APIRestService {
    getAllMovies() {
        return axios.get(BASE_API_REST_URL);
    }
}

export default new APIRestService();