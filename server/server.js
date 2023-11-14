const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/api", require("./routers/data.rout"));

app.listen(PORT, () => {
    console.log("\x1b[42m%s\x1b[0m", `http://localhost:${PORT}`);
});
