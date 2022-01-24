const Email = require("./schema");

const generateCode = function () {
  return Date.now().toString().substr(-5);
};

const create = async function (email) {
  return await Email.create({ email, code: generateCode() });
};

const verify = async (code) => {
  return await Email.findOneAndUpdate({ code }, { verify: true });
};

module.exports = { create, verify };
