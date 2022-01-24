const mailer = require("nodemailer");

require("dotenv").config();

const config = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: "sereega@ukr.net",
    pass: "Spring2019",
    //    pass: process.env.PASSWORD,
  },
};

const transporter = mailer.createTransport(config);

module.exports = transporter;
