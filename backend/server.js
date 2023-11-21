const express = require("express");
const app = express();

const dbConfig = require("./db.js");
const tablesRoute = require("./routers/tablesRoutes.js");
const userRoute = require("./routers/userRouter.js")
const bookingRoute = require("./routers/bookingRoute.js")

app.use(express.json())
app.use("/api/tables", tablesRoute);
app.use("/api/users", userRoute);
app.use("/api/booking", bookingRoute)

const port = process.env.port || 6000;

app.listen(port, () => console.log(`Server Running on the port ${port}`));
