const Koa = require("koa");
const Router = require("koa-router");
const BodyParser = require("koa-bodyparser");
const Cors = require("koa2-cors");
const article = require("./controller/home");
const database = require("./db");

async function run() {
    const app = new Koa();
    const router = new Router();
    await database.init();
    app.use(
        Cors({
            origin: function (context) {
                return context.request.header.origin || "*";
            },
            credentials: true,
            exposeHeaders: ["X-response-time"],
        })
    );
    app.use(BodyParser());

    router.get("/home", article.bookArticles);

    app.use(router.routes(), router.allowedMethods());
    app.listen("4000", () => console.log("listening"));
}

run();
