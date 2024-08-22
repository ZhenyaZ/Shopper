import axios from "axios";

export const getPosts = async () => {
    try {
        const response = await axios.get("http://localhost:3000/api/Posts");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}