const mongoose = require("mongoose")

const mongooseConnect = (uri, mode) => {
	mongoose
		.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		})
		.then(() =>
			mode === "DEVELOPMENT" ? console.log("Connected To Database.") : null
		)
		.catch((err) => console.log(err))
}

module.exports = mongooseConnect
