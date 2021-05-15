require("dotenv").config()

const MONGO_URI = process.env.MONGO_URI
const MODE = process.env.MODE
const PORT = process.env.PORT

module.exports = {
	MONGO_URI,
	MODE,
	PORT,
}
