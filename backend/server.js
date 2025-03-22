const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let users = [
    { id: 1, name: "Ahmet" },
    { id: 2, name: "Ayşe" },
];

app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/users", (req, res) => {
    const { name } = req.body;
    const newUser = {
        id: users.length + 1,
        name,
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(PORT, () => {
    console.log(`🚀 Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});
