const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const auth = require("./api/v1/providers/auth")();
const v1Routes = require("./api/routes");
const models = require("./api/v1/models");

const app = express();

// CORS options
app.use(cors());

// Initialize passport via provider
app.use(auth.initialize());

// BodyParser settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set static folder and API routes
app.use("", v1Routes);

// Launch server
const port = process.env.PORT || 5000;

// models.sequelize.sync({ force: true }).then(() => {
app.listen(port, () => {
	console.log(`Server now running on port ${port}`);
});
// });
