const express = require("express");
const app = express();

app.use(express.json());

app.use("/users", require("./routes/usersRoutes"));
app.use("/buses", require("./routes/busesRoutes"));

app.listen(3000, () => console.log("Server running on port 3000"));
