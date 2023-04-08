const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const { cookieJwtAuth } = require("./middleware/cookieJwtAuth");

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Auth Routes
app.post("/register", require("./routes/auth/register"));
app.post("/login", require("./routes/auth/login"));
app.post("/logout", require("./routes/auth/logout"));
app.post("/isLoggedIn", require("./routes/auth/isLoggedIn"));

// Other Routes
app.use("/", require("./routes/clients"));
app.use("/", require("./routes/users"));
// app.use("/", cookieJwtAuth, require("./routes/categories"));
// app.use("/", cookieJwtAuth, require("./routes/income"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
