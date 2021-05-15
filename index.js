const express = require("express")

const mongooseConnect = require("./database/mongooseConnect")
const errorController = require("./controllers/errorController")
const indexRouter = require("./routes/indexRoute")
const { MONGO_URI, MODE, PORT } = require("./constants/env")

const app = express()

mongooseConnect(MONGO_URI, MODE)

app.use(require("morgan")("dev"))
app.use(express.json())
app.use(require("cors")())

app.use("/api", indexRouter)

app.use(errorController)

const port = PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}.`))
