const articlesFromDb = require("../model/domains.js");
async function bookArticles(context) {
    console.log("home");

    return (context.body = {
        success: true,
        articles: await articlesFromDb.getArticles(),
    });
}

module.exports = { bookArticles };
