const express = require("express")
const app = express()
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require("cors")
const env = require("./config/config")
const services = require("./services")
//----routes-----
const userRoute = require("./routes/users")


env.configenv
services()
//---------------------------
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(morgan("short"))

//---------------------------
app.use("/api/users", userRoute)





app.listen(process.env.APP_PORT,() => {
  console.log("Server is running...");
})