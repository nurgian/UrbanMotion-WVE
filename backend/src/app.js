
const express = require("express");
const cors = require("cors");
const path = require("path");
const limiter = require('./middleware/rate-limiter')
const AuthRoute = require("./routes/auth");
const VehicleRoute = require("./routes/vehicle");
const BookingRoute = require("./routes/booking");
const UserRoute = require("./routes/user");
const DashboardData = require("./routes/dashboard");
const middelwareError  = require("./middleware/error-middelware");

require("dotenv").config(); 

const app = express();

app.use('/uploads', express.static(path.join(__dirname, '/public/uploads')));
app.use(express.json())
app.use(cors())
app.use(limiter)
app.use("/auth", AuthRoute)
app.use("/dashboard", DashboardData)
app.use("/vehicles",VehicleRoute)
app.use("/booking", BookingRoute)
app.use("/users", UserRoute )
app.use(middelwareError)


app.listen(process.env.APP_PORT, () => {
    console.log(`listening on port 5000`)
})