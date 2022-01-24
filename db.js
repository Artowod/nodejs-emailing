const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
require("dotenv").config();

const connection = mongoose.connect(process.env.DB_HOST);
