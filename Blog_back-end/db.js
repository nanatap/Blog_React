const knex = require("knex");
const DB_DELAY = process.env.DELAYED_DB_START;

let db;

const config = {
    client: "mysql",
    connection: {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "my-secret-pw",
        database: "admin-nox-database",
        dateStrings: true,
    },
    migrations: {
        tableName: "db_migrations",
        directory: "./migrations",
    },
    seeds: {
        directory: "./seeds",
    },
};

async function connect() {
    try {
        const db = await knex({
            client: config.client,
            connection: config.connection,
            pool: {
                validate: null,
            },
        });

        await db.raw("select 1+1 as result");
        console.info("Database connection was initialized successfully");

        return db;
    } catch (e) {
        throw new Error(`Failed to connect to database: ${e.message}`);
    }
}

function getDb() {
    if (!db) {
        throw new Error("DB is not initialized");
    }

    return db;
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function init() {
    try {
        if (DB_DELAY) {
            console.log(`Delaying DB connection for: ${DB_DELAY}`);
            await sleep(DB_DELAY);
        }
        db = await connect();
    } catch (e) {
        throw new Error(`Failed to initialize database: ${e.message}`);
    }
}

async function destroy() {
    await db.destroy();
}

const dbClient = (table) => {
    const dbClient = getDb();

    return table ? dbClient(table) : dbClient;
};

module.exports = {
    client: dbClient,
    init,
    destroy,
};
