require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const connectDatabase = require("./db");
const routes = require("./routes");
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(bodyParser.json());
// Database connection
connectDatabase(process.env.MONGO_URI)
    .then(() => {
        console.log("Database connected....");
        startServer();
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });

app.use(routes);

// Start server
function startServer() {
    app.listen(port, () => {
        console.log(`Server started on port ${port} .....`);
    });
}
