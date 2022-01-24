const { create } = require("../model/email");
const transporter = require("../mail");
const { verify } = require("../mail");
const myEmail = "sereega@ukr.net";

const home = function (req, res, next) {
  res.render("index", { title: "Express" });
};

const createEmail = async function (req, res, next) {
  const { email, code } = await create(req.body.email);
  console.log("--==", email, code, myEmail);
  transporter
    .sendMail({
      from: myEmail,
      to: email,
      subject: "Hello! I am verified email",
      html: `<a href = "http://localhost:3000/verify?code=${code}"> Verify email. Please press here. </a>`,
    })
    .then((info) => {
      req.flash("message", "Email is successfully sent to the verification");
      console.log("Success - email was Sent: ", info);
    })
    .catch((err) => {
      req.flash("message", "Email was not send");
      console.log("Error - message not sent: ", err);
    })
    .finally(() => {
      console.log("Final redirection to home.");
      res.redirect("/");
    });
};

const verifyEmail = async function (req, res, next) {
  await verify(req.query.code);
  res.redirect("/");
};

module.exports = {
  home,
  createEmail,
  verifyEmail,
};
