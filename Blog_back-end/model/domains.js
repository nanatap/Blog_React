const database = require("../db");

async function getArticles() {
    const articles = database.client("bookArticles").where({});
    return articles;
}

module.exports = {
    getArticles,
};
