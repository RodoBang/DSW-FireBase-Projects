const express = require("express");

const bodyParser = require("body-parser");

const projectRouter = require("./routes/projectRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(bodyParser.json());

app.use("/projects", projectRouter);
app.use("/auth", authRoutes);
app.use((req, res, next) => {
    res.status(404).json({
        code: 404,
        message: "Route not found"
    });
});

module.exports = app;
