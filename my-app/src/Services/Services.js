import axios from "axios";

export const userService = {
    books,
};

async function books(articles) {
    const result = await axios.get("http://localhost:4000/home", {
        articles,
    });
    return result.data;
}
